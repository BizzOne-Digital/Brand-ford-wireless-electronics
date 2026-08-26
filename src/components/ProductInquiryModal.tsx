import React, { useState, useEffect } from 'react';
import { ProductItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { X, Send, Phone, CheckCircle2, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';

interface ProductInquiryModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onSubmitSuccess: (msg: string) => void;
}

export const ProductInquiryModal: React.FC<ProductInquiryModalProps> = ({
  product,
  onClose,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    inquiryType: 'Availability & Pricing',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  // Esc key and body scroll lock
  useEffect(() => {
    if (!product) return;
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
  }, [product, onClose]);

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess(
        `Thank you ${formData.name}! Your inquiry for "${product.name}" has been sent to Ernest. We will contact you at ${formData.phone} shortly.`
      );
      onClose();
    }, 500);
  };

  return (
    <div 
      id="product-inquiry-modal"
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
              <MessageSquare className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-tight">
                Product Inquiry
              </h2>
              <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider block leading-none mt-0.5 truncate">
                {product.name}
              </span>
            </div>
          </div>

          <button
            id="product-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none shrink-0"
            aria-label="Close product modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3 flex flex-col justify-between">
          <div className="space-y-2.5">
            {/* Product Snapshot Card */}
            <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-950/80 border border-slate-800/80 shrink-0">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider truncate">
                  {product.categoryLabel}
                </div>
                <div className="text-xs font-bold text-white truncate">
                  {product.name}
                </div>
                <div className="text-[10px] text-emerald-400 font-medium">
                  {product.status}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Mitchell"
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
                  placeholder="(416) 000-0000"
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
                Inquiry Type
              </label>
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Availability & Pricing">Check Availability & Pricing</option>
                <option value="Custom Configuration">Request Custom Specs</option>
                <option value="Hold Item">Hold / Reserve Item for Pickup</option>
                <option value="General Question">General Product Question</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                Questions / Notes (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Questions regarding warranty, specs, or availability..."
                className="w-full bg-slate-950/80 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-2 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-[11px] text-slate-400 hover:text-blue-300 flex items-center gap-1 py-1"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="submit-product-inquiry-btn"
              type="submit"
              disabled={submitting}
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-1.5 disabled:opacity-50 active:scale-[0.98]"
            >
              {submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

