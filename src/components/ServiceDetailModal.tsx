import React from 'react';
import { ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { X, CheckCircle2, Phone, Calendar, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div 
      id="service-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#080d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200 my-8 overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          id="service-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold text-blue-400 bg-blue-950/70 border border-blue-800/50">
            {service.badge || 'Featured Service'}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 font-display">
          {service.title}
        </h2>

        {/* Image banner */}
        <div className="w-full h-48 sm:h-56 rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800 relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1e] via-transparent to-transparent" />
        </div>

        {/* Full Description */}
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {service.fullDesc}
        </p>

        {/* Key Features / Included Capabilities */}
        <div className="mb-8">
          <h3 className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3 font-display">
            What is Included & Addressed:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-blue-500/50"
          >
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Call: {BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="service-modal-book-cta"
            onClick={() => {
              onBookService(service.title);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Book This Service</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
