import React, { useState } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { LeadSubmission } from '../types';
import { Sparkles, Send, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface LeadBannerProps {
  onNotify?: (msg: string) => void;
}

export const LeadBanner: React.FC<LeadBannerProps> = ({ onNotify = (_msg: string) => {} }) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    phone: '',
    email: '',
    interest: 'Mobile Device & Accessories',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onNotify(
        `Thank you ${formData.name}! Your request has been received. Our team will call you at ${formData.phone} with recommendations.`
      );
    }, 600);
  };

  return (
    <section id="lead-gen-section" className="section bg-mist">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-frost border border-brand-200 rounded-3xl p-8 sm:p-12">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Tech Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3 font-display">
              Need Help With Your Technology?
            </h2>

            <p className="text-sm sm:text-base text-copy">
              Tell us what you need and our team can help you find the right solution.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-brand-50 border border-brand-200 flex items-center justify-center mx-auto text-brand-700">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-ink font-display">Request Submitted!</h3>
              <p className="text-sm text-copy max-w-md mx-auto">
                Our team will review your request and reach out directly at <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-brand-700 hover:underline font-semibold"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="lead-banner-field-1" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                    <input
                      id="lead-banner-field-1"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="lead-banner-field-2" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                    <input
                      id="lead-banner-field-2"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(416) 000-0000"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="lead-banner-field-3" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                    <input
                      id="lead-banner-field-3"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email (optional)"
                    className="field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lead-banner-field-4" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1">
                    Service / Product Interest
                  </label>
                    <select
                      id="lead-banner-field-4"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="field"
                  >
                    <option value="Phone or Tablet Repair">Phone, iPad &amp; Tablet Repair</option>
                    <option value="Computer Repair & Diagnostics">Computer &amp; Laptop Repair</option>
                    <option value="Gaming Console Repair">Gaming Console Repair</option>
                    <option value="Custom Device Wrapping">Custom Device Wrapping</option>
                    <option value="Security Cameras & CCTV">Security Cameras &amp; CCTV</option>
                    <option value="Sell or Trade In a Device">Sell or Trade In a Device</option>
                    <option value="Phones & Electronics for Sale">Phones &amp; Electronics for Sale</option>
                    <option value="Business Technology">Business Technology Solutions</option>
                    <option value="General Question">General Technology Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="lead-banner-field-5" className="block text-xs font-semibold text-copy uppercase tracking-wider mb-1">
                    Brief Note (Optional)
                  </label>
                    <input
                      id="lead-banner-field-5"
                      type="text"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Broken screen or looking for a fast charger..."
                    className="field"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-sm text-copy hover:text-brand-700 flex min-h-[44px] items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-700" />
                  <span>Prefer calling? {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  id="lead-get-started-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 border border-brand-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Get Started</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6 pt-4 border-t border-line text-[11px] text-copy text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
            <span>Fast turnaround • Honest advice • Local Brantford service</span>
          </div>

        </div>
      </div>
    </section>
  );
};
