import React, { useEffect, useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem, PageRoute } from '../types';
import { Star, CheckCircle2, Plus, X } from 'lucide-react';

interface TestimonialsSectionProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  hideHeader = false,
  isFullPage = false,
  onNotify = (_msg: string) => {},
}) => {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    serviceCategory: 'Mobile Device & Accessories',
    quote: '',
    rating: 5,
  });

  useEffect(() => {
    if (!showReviewModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowReviewModal(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [showReviewModal]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;

    const reviewItem: TestimonialItem = {
      id: `review-${Date.now()}`,
      customerName: newReview.name,
      serviceCategory: newReview.serviceCategory,
      quote: newReview.quote,
      verified: true,
      date: 'Just now',
      rating: newReview.rating,
    };

    setReviews([reviewItem, ...reviews]);
    setShowReviewModal(false);
    onNotify(`Thank you ${newReview.name}. Your review has been submitted.`);
    setNewReview({
      name: '',
      serviceCategory: 'Mobile Device & Accessories',
      quote: '',
      rating: 5,
    });
  };

  const shown = isFullPage ? reviews : reviews.slice(0, 3);

  return (
    <section id="testimonials-section" className="section bg-white">
      <div className="shell">

        {!hideHeader && (
  <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
              What our customers say
            </h2>
            <p className="mt-4 text-base sm:text-lg text-copy leading-relaxed">
              Real feedback from individuals, families and businesses across Brantford.
            </p>
          </div>
        )}

        <div className={`${hideHeader ? '' : 'mt-10 lg:mt-12'} grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6`}>
          {shown.map((test) => (
            <figure
              key={test.id}
              id={`testimonial-${test.id}`}
              className="card p-6 flex flex-col"
            >
              <div className="flex items-center gap-0.5" aria-label={`Rated ${test.rating} out of 5`}>
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} aria-hidden="true" className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <blockquote className="mt-4 text-[0.95rem] text-copy leading-relaxed">
                {test.quote}
              </blockquote>

              <figcaption className="mt-auto pt-5 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-bold text-ink truncate">{test.customerName}</p>
                  <p className="text-xs text-faint truncate">{test.serviceCategory}</p>
                </div>
                {test.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 shrink-0">
                    <CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <button
            id="leave-review-modal-btn"
            onClick={() => setShowReviewModal(true)}
            className="btn btn-secondary"
          >
            <Plus aria-hidden="true" className="w-4 h-4" />
            <span>Share your feedback</span>
          </button>
        </div>

      </div>

      {showReviewModal && (
        <div
          id="review-submission-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="review-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/50 backdrop-blur-sm overflow-y-auto"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowReviewModal(false);
          }}
        >
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 my-8">
            <button
              type="button"
              onClick={() => setShowReviewModal(false)}
              aria-label="Close feedback form"
              className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-faint hover:text-ink hover:bg-mist transition-colors"
            >
              <X aria-hidden="true" className="w-5 h-5" />
            </button>

            <h3 id="review-modal-title" className="text-xl font-bold text-ink pr-10">
              Submit your feedback
            </h3>
            <p className="mt-2 text-sm text-copy">
              Your honest feedback helps us keep our standard of service high.
            </p>

            <form onSubmit={handleReviewSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="review-name" className="block text-sm font-semibold text-ink mb-1.5">
                  Your name <span className="text-brand-700">*</span>
                </label>
                <input
                  id="review-name"
                  name="name"
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="field"
                />
              </div>

              <div>
                <label htmlFor="review-service" className="block text-sm font-semibold text-ink mb-1.5">
                  Service or product
                </label>
                <select
                  id="review-service"
                  name="serviceCategory"
                  value={newReview.serviceCategory}
                  onChange={(e) => setNewReview({ ...newReview, serviceCategory: e.target.value })}
                  className="field"
                >
                  <option value="Mobile Device &amp; Accessories">Mobile Device &amp; Accessories</option>
                  <option value="Computer Sales">Computer Sales</option>
                  <option value="Computer Repair &amp; Diagnostics">Computer Repair &amp; Diagnostics</option>
                  <option value="Device Support &amp; Setup">Device Support &amp; Setup</option>
                  <option value="Other Technology Service">Other Technology Service</option>
                </select>
              </div>

              <fieldset>
                <legend className="block text-sm font-semibold text-ink mb-1.5">Rating</legend>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      aria-label={`${star} star${star > 1 ? 's' : ''}`}
                      aria-pressed={star === newReview.rating}
                      className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-mist transition-colors"
                    >
                      <Star
                        aria-hidden="true"
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-line'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor="review-quote" className="block text-sm font-semibold text-ink mb-1.5">
                  Your experience <span className="text-brand-700">*</span>
                </label>
                <textarea
                  id="review-quote"
                  name="quote"
                  rows={3}
                  required
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  placeholder="Tell us about the service you received"
                  className="field resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="btn !bg-transparent text-copy hover:text-ink"
                >
                  Cancel
                </button>
                <button id="submit-review-btn" type="submit" className="btn btn-primary">
                  Post feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
