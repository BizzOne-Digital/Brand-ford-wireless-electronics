import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { TestimonialItem, PageRoute } from '../types';
import { Star, Sparkles, CheckCircle2, Plus } from 'lucide-react';

interface TestimonialsSectionProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  isFullPage = false,
  onNavigate,
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
    onNotify(`Thank you ${newReview.name}! Your review has been submitted.`);
    setNewReview({
      name: '',
      serviceCategory: 'Mobile Device & Accessories',
      quote: '',
      rating: 5,
    });
  };

  return (
    <section 
      id="testimonials-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#040711]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Customer Trust & Experiences</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Real feedback from individuals, families, and businesses who rely on Brantford Wireless & Electronics.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {reviews.map((test) => (
            <div
              key={test.id}
              id={`testimonial-${test.id}`}
              className="bg-[#070d1e] border border-blue-900/20 hover:border-blue-500/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-blue-950/30"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white font-display">
                    {test.customerName}
                  </h3>
                  <span className="text-[11px] text-blue-400">
                    {test.serviceCategory}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/40">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Row: Leave a Review */}
        <div className="text-center">
          <button
            id="leave-review-modal-btn"
            onClick={() => setShowReviewModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-blue-500/40 transition-all"
          >
            <Plus className="w-4 h-4 text-blue-400" />
            <span>Have You Visited Us? Share Your Feedback</span>
          </button>
        </div>

      </div>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div 
          id="review-submission-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-lg bg-[#080d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200">
            <h3 className="text-xl font-bold text-white mb-2 font-display">
              Submit Your Feedback
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Your honest feedback helps us maintain the highest standard of service.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Service / Product Purchased
                </label>
                <select
                  value={newReview.serviceCategory}
                  onChange={(e) => setNewReview({ ...newReview, serviceCategory: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Mobile Device & Accessories">Mobile Device & Accessories</option>
                  <option value="Computer Sales">Computer Sales</option>
                  <option value="Computer Repair & Diagnostics">Computer Repair & Diagnostics</option>
                  <option value="Device Support & Setup">Device Support & Setup</option>
                  <option value="Other Technology Service">Other Technology Service</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Rating
                </label>
                <div className="flex items-center gap-2 py-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: star })}
                      className="focus:outline-none"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newReview.quote}
                  onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
                  placeholder="Tell us about the service you received..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  id="submit-review-btn"
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
                >
                  Post Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
};
