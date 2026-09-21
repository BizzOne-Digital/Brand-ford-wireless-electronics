import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem } from '../types';
import { Modal } from './Modal';

interface TestimonialsSectionProps {
  onNotify?: (msg: string) => void;
}

/**
 * Testimonials live on the homepage and nowhere else.
 *
 * The rail advances on its own so the section reads as moving without the
 * visitor doing anything, and stops the moment they touch it, hover it, focus
 * a card, open a modal, or scroll it by hand. It does not autoplay at all
 * under `prefers-reduced-motion`. Each card shows a trimmed quote; the full
 * quote opens in the site modal. Content comes from `TESTIMONIALS_DATA`;
 * nothing here is generated.
 */
const ADVANCE_MS = 4500;
export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onNotify = (_msg: string) => {},
}) => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [openReview, setOpenReview] = useState<TestimonialItem | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [draft, setDraft] = useState({
    name: '',
    serviceCategory: 'Cell Phone Repair',
    quote: '',
    rating: 5,
  });
  const railRef = useRef<HTMLDivElement | null>(null);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  /* The rail repeats the real reviews. With only a handful of them a single
     pass fits inside a desktop viewport, leaving nothing to scroll and nothing
     to autoplay, so the loop below scrolls through one pass and then jumps
     back by exactly one pass. That jump is invisible because the passes are
     identical, but it only works if the wrap point is actually reachable:
     scrolling stops at `scrollWidth - clientWidth`, so the rail needs at least
     one pass of slack beyond the wrap point. Hence a minimum of four passes
     for a short list, three once the list is long enough to overflow on its
     own. Repeats are hidden from assistive tech and skipped by the tab order,
     so nobody hears or tabs the same review twice. */
  const copies = reviews.length >= 6 ? 3 : 4;
  const railItems = Array.from({ length: copies }, (_, copy) =>
    reviews.map((review) => ({ review, copy }))
  ).flat();

  /** One card plus its gap, so a step always lands a card at the left edge. */
  const stepWidth = (rail: HTMLDivElement) => {
    const card = rail.firstElementChild as HTMLElement | null;
    if (!card) return Math.round(rail.clientWidth * 0.8);
    const gap = parseFloat(getComputedStyle(rail).columnGap || '0') || 0;
    return card.offsetWidth + gap;
  };

  const scrollRail = useCallback((direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * stepWidth(rail), behavior: 'smooth' });
  }, []);

  /* Autoplay. Wraps back to the start once the last card is showing, rather
     than stalling against the end of the scroll range. */
  useEffect(() => {
    if (paused || reduceMotion) return;
    if (openReview || formOpen) return;

    const id = window.setInterval(() => {
      const rail = railRef.current;
      if (!rail) return;
      /* Once two passes have gone by, drop back one pass with no animation.
         The passes are identical, so the visitor sees no change. */
      const pass = rail.scrollWidth / copies;
      if (rail.scrollLeft >= pass * 2 - 8) {
        rail.scrollTo({ left: rail.scrollLeft - pass, behavior: 'instant' as ScrollBehavior });
      }
      rail.scrollBy({ left: stepWidth(rail), behavior: 'smooth' });
    }, ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [paused, reduceMotion, openReview, formOpen, copies]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!draft.name.trim() || !draft.quote.trim()) return;

    setReviews([
      {
        id: `review-${Date.now()}`,
        customerName: draft.name,
        serviceCategory: draft.serviceCategory,
        quote: draft.quote,
        verified: false,
        date: 'Just now',
        rating: draft.rating,
      },
      ...reviews,
    ]);
    setFormOpen(false);
    onNotify(`Thank you ${draft.name}. Your feedback has been received.`);
    setDraft({ name: '', serviceCategory: 'Cell Phone Repair', quote: '', rating: 5 });
  };

  return (
    <section id="testimonials-section" className="section bg-white">
      <div className="shell">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow">Customer feedback</p>
            <h2 className="mt-3 text-2xl font-bold leading-[1.1] text-ink sm:text-3xl lg:text-[2.5rem]">
              What people say after they collect their device
            </h2>
          </div>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => {
                setPaused(true);
                scrollRail(-1);
              }}
              aria-label="Previous testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand-300"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => {
                setPaused(true);
                scrollRail(1);
              }}
              aria-label="Next testimonials"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-brand-300"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onPointerDown={() => setPaused(true)}
          className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-3 sm:mx-0 sm:px-0 lg:gap-5"
        >
          {railItems.map(({ review, copy }) => (
            <figure
              key={`${review.id}-${copy}`}
              id={copy === 0 ? `testimonial-${review.id}` : undefined}
              aria-hidden={copy > 0 ? 'true' : undefined}
              className="card card-interactive group relative flex w-[min(85vw,22rem)] shrink-0 snap-start flex-col p-6 lg:w-[24rem]"
            >
              {/* The whole card opens the full review. One button stretched
                  over the figure keeps that a single tab stop while leaving
                  the figure and blockquote semantics intact. */}
              <button
                type="button"
                onClick={() => setOpenReview(review)}
                aria-label={`Read the full review from ${review.customerName}`}
                tabIndex={copy > 0 ? -1 : undefined}
                className="absolute inset-0 z-10 rounded-2xl"
              />

              <Quote aria-hidden="true" className="h-6 w-6 text-brand-300" />

              <blockquote className="mt-4 line-clamp-4 text-[0.95rem] leading-relaxed text-copy">
                {review.quote}
              </blockquote>

              <span className="mt-2 inline-flex min-h-[44px] items-center self-start text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
                Read the full review
              </span>

              <figcaption className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4">
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-ink">{review.customerName}</p>
                  <p className="truncate text-xs text-faint">{review.serviceCategory}</p>
                </div>
                <span
                  className="flex shrink-0 items-center gap-0.5"
                  aria-label={`Rated ${review.rating} out of 5`}
                >
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      aria-hidden="true"
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          id="leave-review-btn"
          onClick={() => setFormOpen(true)}
          className="mt-6 inline-flex min-h-[44px] items-center text-[15px] font-semibold text-brand-700 transition-colors hover:text-brand-800"
        >
          Share your own feedback
        </button>
      </div>

      {/* Full quote. Secondary detail, so it belongs in a modal. */}
      <Modal
        isOpen={openReview !== null}
        onClose={() => setOpenReview(null)}
        title={openReview ? `Review by ${openReview.customerName}` : ''}
        hideTitle
        size="md"
      >
        {openReview && (
          <figure className="p-6 pr-16 sm:p-8 sm:pr-16">
            <span
              className="flex items-center gap-0.5"
              aria-label={`Rated ${openReview.rating} out of 5`}
            >
              {Array.from({ length: openReview.rating }).map((_, i) => (
                <Star key={i} aria-hidden="true" className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </span>

            <blockquote className="mt-4 text-lg leading-relaxed text-ink">
              {openReview.quote}
            </blockquote>

            <figcaption className="mt-6 border-t border-line pt-4">
              <p className="text-sm font-bold text-ink">{openReview.customerName}</p>
              <p className="text-xs text-faint">
                {openReview.serviceCategory} · {openReview.date}
              </p>
            </figcaption>
          </figure>
        )}
      </Modal>

      <Modal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        title="Share your feedback"
        size="md"
      >
        <form onSubmit={handleSubmit} className="space-y-4 p-6 pt-4 sm:p-8 sm:pt-4">
          <div>
            <label htmlFor="review-name" className="mb-1.5 block text-sm font-semibold text-ink">
              Your name <span className="text-brand-700">*</span>
            </label>
            <input
              id="review-name"
              type="text"
              required
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              className="field"
            />
          </div>

          <div>
            <label htmlFor="review-service" className="mb-1.5 block text-sm font-semibold text-ink">
              Service
            </label>
            <select
              id="review-service"
              value={draft.serviceCategory}
              onChange={(e) => setDraft({ ...draft, serviceCategory: e.target.value })}
              className="field"
            >
              <option>Cell Phone Repair</option>
              <option>Computer &amp; Laptop Repair</option>
              <option>Gaming Console Repair</option>
              <option>Custom Device Wrapping</option>
              <option>Security Cameras &amp; CCTV</option>
              <option>Device Purchase or Trade In</option>
              <option>Other Technology Service</option>
            </select>
          </div>

          <fieldset>
            <legend className="mb-1.5 block text-sm font-semibold text-ink">Rating</legend>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setDraft({ ...draft, rating: star })}
                  aria-label={`${star} star${star > 1 ? 's' : ''}`}
                  aria-pressed={star === draft.rating}
                  className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-mist"
                >
                  <Star
                    aria-hidden="true"
                    className={`h-6 w-6 ${
                      star <= draft.rating ? 'fill-amber-400 text-amber-400' : 'text-line'
                    }`}
                  />
                </button>
              ))}
            </div>
          </fieldset>

          <div>
            <label htmlFor="review-quote" className="mb-1.5 block text-sm font-semibold text-ink">
              Your experience <span className="text-brand-700">*</span>
            </label>
            <textarea
              id="review-quote"
              rows={4}
              required
              value={draft.quote}
              onChange={(e) => setDraft({ ...draft, quote: e.target.value })}
              className="field resize-none"
            />
          </div>

          <div className="flex justify-end pt-1">
            <button type="submit" className="btn btn-primary">
              Post feedback
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
};
