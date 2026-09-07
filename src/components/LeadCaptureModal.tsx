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
        `Thank you ${formData.name}! Your request has been sent to our team at Brantford Wireless. We will call you at ${formData.phone} shortly.`
      );
      onClose();
    }, 500);
  };

  return (
    <div
      id="lead-capture-modal"
      className="fixed inset-0 z-[999] overflow-y-auto bg-ink/50 backdrop-blur-md flex justify-center items-start p-3 sm:p-4 pt-24 sm:pt-28 md:pt-32 pb-20 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="relative w-full max-w-sm sm:max-w-md bg-white border border-brand-200 rounded-2xl text-ink flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-line bg-mist shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-7 h-7 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 shrink-0">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-ink font-display truncate leading-tight">
                Tech Assistance & Inquiries
              </h2>
              <span className="text-[10px] text-brand-700 font-semibold uppercase tracking-wider block leading-none mt-0.5">
                Direct Help From Our Team
              </span>
            </div>
          </div>

          <button
            id="lead-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-mist border border-line text-copy hover:text-ink hover:bg-frost transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-2.5 flex flex-col justify-between">
          <div className="space-y-2.5">
            <div>
              <label htmlFor="lead-capture-modal-field-1" className="block text-[10px] font-semibold text-copy uppercase tracking-wider mb-1">
                Your Name *
              </label>
                <input
                  id="lead-capture-modal-field-1"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Taylor Smith"
                className="field !text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <label htmlFor="lead-capture-modal-field-2" className="block text-[10px] font-semibold text-copy uppercase tracking-wider mb-1">
                  Phone Number *
                </label>
                  <input
                    id="lead-capture-modal-field-2"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(416) 771-9078"
                  className="field !text-sm"
                />
              </div>

              <div>
                <label htmlFor="lead-capture-modal-field-3" className="block text-[10px] font-semibold text-copy uppercase tracking-wider mb-1">
                  Email Address
                </label>
                  <input
                    id="lead-capture-modal-field-3"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@domain.com"
                  className="field !text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="lead-capture-modal-field-4" className="block text-[10px] font-semibold text-copy uppercase tracking-wider mb-1">
                Service / Product Interest
              </label>
                <select
                  id="lead-capture-modal-field-4"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="field !text-sm"
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
              <label htmlFor="lead-capture-modal-field-5" className="block text-[10px] font-semibold text-copy uppercase tracking-wider mb-1">
                Message (Optional)
              </label>
                <input
                  id="lead-capture-modal-field-5"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what device you have or what you're looking for..."
                className="field !text-sm resize-none"
              />
            </div>
          </div>

          <div className="pt-2 border-t border-line flex items-center justify-between gap-2 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[11px] text-copy hover:text-brand-700 flex items-center gap-1 py-1"
            >
              <Phone className="w-3 h-3 text-brand-700" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="lead-modal-submit-btn"
              type="submit"
              disabled={submitting}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 border border-brand-200 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 active:scale-[0.98]"
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

        <div className="px-3.5 py-1.5 bg-white border-t border-line text-[10px] text-copy flex items-center gap-1.5 shrink-0">
          <ShieldCheck className="w-3 h-3 text-brand-700 shrink-0" />
          <span className="truncate">Direct contact with our team • Local Brantford expertise</span>
        </div>
      </div>
    </div>
  );
};

