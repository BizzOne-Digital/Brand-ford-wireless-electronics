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
        `Thank you ${formData.name}! Your request has been received. Ernest will call you at ${formData.phone} with recommendations.`
      );
    }, 600);
  };

  return (
    <section id="lead-gen-section" className="py-20 lg:py-24 bg-[#030610] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0a142c] via-[#070d1e] to-[#040711] border border-blue-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Personalized Tech Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3 font-display">
              Need Help With Your Technology?
            </h2>

            <p className="text-sm sm:text-base text-slate-300">
              Tell us what you need and our team can help you find the right solution.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in-95">
              <div className="w-14 h-14 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center mx-auto text-blue-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white font-display">Request Submitted!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Ernest will review your request and reach out directly at <strong>{formData.phone}</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-blue-400 hover:underline font-semibold"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(416) 000-0000"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Email (optional)"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Service / Product Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Mobile Device & Accessories">Mobile Devices & Accessories</option>
                    <option value="Computer Sales & Hardware">Computer Sales & Laptops</option>
                    <option value="Computer Repair & Diagnostics">Computer Repair & Diagnostics</option>
                    <option value="Device Support & Troubleshooting">Device Support & Troubleshooting</option>
                    <option value="Tech Solutions & Consultations">Tech Solutions for Work/Home</option>
                    <option value="General Question">General Technology Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Brief Note (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Broken screen or looking for a fast charger..."
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs text-slate-400 hover:text-blue-300 flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Prefer calling? {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  id="lead-get-started-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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

          <div className="mt-6 pt-4 border-t border-slate-800 text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Fast turnaround • Honest advice • Local Brantford service</span>
          </div>

        </div>
      </div>
    </section>
  );
};
