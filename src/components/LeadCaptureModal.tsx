import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/mockData';
import { LeadSubmission } from '../types';
import { X, Send, Phone, ShieldCheck, Sparkles } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    phone: '',
    email: '',
    interest: 'Mobile Device & Accessories',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  // Esc key and body scroll lock
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess(
        `Thank you ${formData.name}! Your request has been sent to Ernest at Brantford Wireless. We will call you at ${formData.phone} shortly.`
      );
      onClose();
    }, 500);
  };

  return (
    <div 
      id="lead-capture-modal"
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-start p-3 sm:p-4 pt-24 sm:pt-28 md:pt-32 pb-20 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-sm sm:max-w-md bg-[#070d1e] border border-blue-500/40 rounded-2xl shadow-2xl text-slate-200 flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-800 bg-[#091126] shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-tight">
                Tech Assistance & Inquiries
              </h2>
              <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider block leading-none mt-0.5">
                Direct Help From Ernest
              </span>
            </div>
          </div>

          <button
            id="lead-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-2.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div>
              <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ernest Taylor"
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(416) 771-9078"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Service / Product Interest
              </label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Mobile Device & Accessories">Mobile Devices & Accessories</option>
                <option value="Computer Sales & Hardware">Computer Sales & Laptops</option>
                <option value="Computer Repair & Diagnostics">Computer Repair & Diagnostics</option>
                <option value="Device Support & Setup">Device Support & Setup</option>
                <option value="Tech Solutions & Consultations">Tech Solutions for Business/Home</option>
                <option value="General Tech Help">General Tech Help</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Message (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what device you have or what you're looking for..."
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[11px] text-slate-400 hover:text-blue-300 flex items-center gap-1 py-1"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="lead-modal-submit-btn"
              type="submit"
              disabled={submitting}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 active:scale-[0.98]"
            >
              {submitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Started</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="px-3.5 py-1.5 bg-[#050a16] border-t border-slate-800 text-[10px] text-slate-400 flex items-center gap-1.5 shrink-0">
          <ShieldCheck className="w-3 h-3 text-blue-400 shrink-0" />
          <span className="truncate">Direct contact with Ernest • Local Brantford expertise</span>
        </div>
      </div>
    </div>
  );
};

