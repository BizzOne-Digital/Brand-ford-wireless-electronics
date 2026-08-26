import React, { useState } from 'react';
import { ProductItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { X, Send, Phone, CheckCircle2, ShieldCheck } from 'lucide-react';

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

  if (!product) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmitSuccess(
        `Thank you ${formData.name}! Your inquiry for "${product.name}" has been sent to Ernest. We will contact you at ${formData.phone} shortly.`
      );
      onClose();
    }, 600);
  };

  return (
    <div 
      id="product-inquiry-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-xl bg-[#080d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8">
        
        {/* Close Button */}
        <button
          id="product-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Snapshot Header */}
        <div className="flex items-center gap-4 mb-6 pb-5 border-b border-slate-800">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              {product.name}
            </h3>
            <span className="text-xs text-slate-400">
              Status: <span className="text-blue-300 font-medium">{product.status}</span>
            </span>
          </div>
        </div>

        {/* Inquiry Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Your Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Mitchell"
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(416) 000-0000"
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@domain.com"
                className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Inquiry Type
            </label>
            <select
              value={formData.inquiryType}
              onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              <option value="Availability & Pricing">Check Showroom Availability & Pricing</option>
              <option value="Custom Configuration">Request Custom Configuration / Specific Specs</option>
              <option value="Hold Item">Hold / Reserve Item for Pickup</option>
              <option value="General Question">General Product Question</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
              Specific Message or Notes (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="e.g. Inquiring about preferred storage capacity or color options..."
              className="w-full bg-slate-900/90 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto text-xs text-slate-400 hover:text-blue-300 flex items-center justify-center gap-1.5 py-2"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>Or call {BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="submit-product-inquiry-btn"
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {submitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Product Inquiry</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Inquiries are answered directly by Ernest. No automated spam.</span>
        </div>

      </div>
    </div>
  );
};
