import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { PROMO_SLIDES } from '../data/mockData';

interface PromoBannerProps {
  /** On the homepage this carousel IS the hero, so it carries the page's
      single `h1` and clears the fixed header itself. On the store page a
      PageHero above it already holds the `h1`, so it stays an `h2`. */
  asHero?: boolean;
  onNavigate: (route: PageRoute) => void;
  onOpenService: (serviceId: string) => void;
  onOpenBooking: () => void;
}

const ROTATE_MS = 7000;

export const PromoBanner: React.FC<PromoBannerProps> = ({
  asHero = false,
  onNavigate,
  onOpenService,
  onOpenBooking,
}) => {
  const slides = PROMO_SLIDES;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const regionRef = useRef<HTMLElement | null>(null);

  const count = slides.length;
  const hasControls = count > 1;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Gentle autoplay. Off entirely for reduced-motion users and while interacting.
  useEffect(() => {
    if (!hasControls || paused || reduceMotion) return;
    const timer = window.setTimeout(() => go(index + 1), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion, hasControls, go]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!hasControls) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index - 1);
    }
  };

  if (count === 0) return null;

  const slide = slides[index];
  const fade = reduceMotion ? {} : { opacity: 0, y: 8 };

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Store promotions"
      /* As the hero it runs edge to edge with no band around it; the
         category strip above already carries the fixed header's offset. On
         the store page it stays a card inside the content column. */
      className={
        asHero
          ? 'bg-white px-4 pt-4 sm:px-6 lg:px-0 lg:pt-0'
          : 'bg-white pt-5 pb-10 lg:pt-8 lg:pb-14'
      }
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <div className={asHero ? '' : 'shell'}>
        <div
          className={
            asHero
              ? 'relative overflow-hidden rounded-2xl bg-frost sm:rounded-3xl lg:rounded-none'
              : 'relative overflow-hidden rounded-2xl sm:rounded-3xl bg-frost border border-brand-100'
          }
        >
          <div
            className={
              asHero
                ? 'relative'
                : 'grid lg:grid-cols-[1.05fr_1fr] items-stretch'
            }
          >
            {/* Copy. min-height reserves space so slide changes never shift layout. */}
            <div
              className={`flex flex-col justify-center ${
                asHero
                  ? 'relative z-10 max-w-[46rem] px-5 py-11 sm:px-8 sm:py-14 lg:py-20 lg:pl-16 xl:pl-24 min-h-[420px] sm:min-h-[460px] lg:min-h-[520px]'
                  : 'order-2 lg:order-1 px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14 min-h-[248px] sm:min-h-[268px] lg:min-h-[340px]'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={fade}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="inline-flex items-center rounded-full bg-white border border-brand-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                    {slide.badge}
                  </span>

                  {React.createElement(
                    asHero ? 'h1' : 'h2',
                    {
                      className:
                        asHero
                          ? 'on-photo mt-4 text-[2rem] sm:text-4xl lg:text-[3.4rem] lg:leading-[1.06] font-bold text-white max-w-[18ch]'
                          : 'mt-4 text-2xl sm:text-3xl lg:text-[2.6rem] lg:leading-[1.08] font-bold text-ink max-w-[18ch]',
                    },
                    slide.headline
                  )}

                  <p
                    className={`mt-3 leading-relaxed max-w-[46ch] ${
                      asHero ? 'on-photo text-base text-white sm:text-lg' : 'text-[0.95rem] text-copy sm:text-base'
                    }`}
                  >
                    {slide.body}
                  </p>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => {
                        if (slide.ctaRoute === 'booking') {
                          onOpenBooking();
                        } else if (slide.ctaRoute === 'service' && slide.ctaServiceId) {
                          onOpenService(slide.ctaServiceId);
                        } else {
                          onNavigate(slide.ctaRoute);
                        }
                      }}
                      className="btn btn-primary group"
                    >
                      {slide.ctaLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators. In flow on mobile so they never sit under the
                  CTA; pinned to the panel corner from lg up. */}
              {hasControls && (
                <div
                  className={`mt-6 flex flex-wrap items-center gap-1 ${
                    asHero ? '' : 'lg:absolute lg:bottom-6 lg:left-12 lg:mt-0 lg:flex-nowrap'
                  }`}
                >
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show promotion ${i + 1} of ${count}: ${s.headline}`}
                      aria-current={i === index ? 'true' : undefined}
                      className="h-11 w-9 flex items-center justify-center"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          i === index
                            ? `w-6 ${asHero ? 'bg-white shadow-[0_1px_4px_rgba(10,27,51,0.7)]' : 'bg-brand-600'}`
                            : `w-1.5 ${asHero ? 'bg-white/70 shadow-[0_1px_4px_rgba(10,27,51,0.7)]' : 'bg-brand-300'}`
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product image. Fixed aspect on mobile, fills the cell on desktop. */}
            <div
              className={`overflow-hidden ${
                asHero
                  ? 'absolute inset-0 bg-ink'
                  : 'order-1 lg:order-2 relative bg-brand-100/60 aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:min-h-[340px]'
              }`}
            >
              <AnimatePresence mode="wait">
                {slide.beforeImage && slide.afterImage ? (
                  /* A before-and-after slide: the two photographs sit side by
                     side, labelled, with no drag handle. The comparison slider
                     is a separate section further down the page. */
                  <motion.div
                    key={slide.id}
                    initial={reduceMotion ? {} : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0 grid grid-cols-2"
                  >
                    <figure className="relative m-0 h-full w-full overflow-hidden">
                      <img
                        src={slide.beforeImage}
                        alt={slide.beforeImageAlt ?? ''}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                        Before
                      </figcaption>
                    </figure>

                    <figure className="relative m-0 h-full w-full overflow-hidden border-l border-white/70">
                      <img
                        src={slide.afterImage}
                        alt={slide.afterImageAlt ?? ''}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <figcaption className="absolute bottom-3 right-3 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                        After
                      </figcaption>
                    </figure>
                  </motion.div>
                ) : (
                  <motion.img
                    key={slide.id}
                    src={slide.image}
                    alt={slide.imageAlt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    initial={reduceMotion ? {} : { opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? {} : { opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              {/* The hero carries no overlay: the artwork shows as shot.
                  Its copy relies on `.on-photo` instead, see index.css. */}
              {!asHero && (
                /* Softens the image edge into the panel on desktop only */
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-frost to-transparent"
                />
              )}
            </div>
          </div>

          {hasControls && (
            <div className="absolute top-3 right-3 lg:top-6 lg:right-6 flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous promotion"
                className="h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-line text-ink flex items-center justify-center hover:bg-white hover:border-brand-300 transition-colors"
              >
                <ChevronLeft aria-hidden="true" className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next promotion"
                className="h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-line text-ink flex items-center justify-center hover:bg-white hover:border-brand-300 transition-colors"
              >
                <ChevronRight aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Announces slide changes to screen readers without moving focus */}
        <p className="sr-only" aria-live="polite">
          {`Promotion ${index + 1} of ${count}: ${slide.headline}`}
        </p>
      </div>
    </section>
  );
};
