import React, { useEffect } from 'react';
import { ServiceCategoryItem, ServiceItem } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { X, CheckCircle2, Phone, Calendar, Wrench } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceCategoryItem | ServiceItem | null;
  onClose: () => void;
  onInquire?: (serviceName: string) => void;
  onBookService?: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
  onBookService,
}) => {
  useEffect(() => {
    if (!service) return;
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
  }, [service, onClose]);

  if (!service) return null;

  const handleAction = () => {
    if (onBookService) {
      onBookService(service.title);
    } else if (onInquire) {
      onInquire(service.title);
    }
    onClose();
  };

  return (
    <div 
      id="service-detail-modal"
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center items-start p-3 sm:p-4 pt-24 sm:pt-28 md:pt-32 pb-20 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-sm sm:max-w-md bg-[#070d1e] border border-blue-500/40 rounded-2xl shadow-2xl text-slate-200 flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Top Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-slate-800 bg-[#091126] shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-7 h-7 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-white font-display truncate leading-tight">
                {service.title}
              </h2>
              <span className="text-[10px] text-blue-400 font-semibold uppercase tracking-wider block leading-none mt-0.5">
                {service.badge || 'Service Details'}
              </span>
            </div>
          </div>

          <button
            id="service-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3">
          {/* Image Banner */}
          <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d1e] via-transparent to-transparent" />
          </div>

          {/* Service Description */}
          <p className="text-xs text-slate-300 leading-relaxed">
            {service.fullDesc || service.description}
          </p>

          {/* Key Features List */}
          {service.features && service.features.length > 0 && (
            <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-2.5 sm:p-3">
              <h3 className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1.5 font-display">
                What Is Included:
              </h3>
              <div className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pinned Bottom Actions */}
        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 border-t border-slate-800 bg-[#091126] flex items-center justify-between gap-2 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="service-modal-book-cta"
            onClick={handleAction}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 border border-blue-400/30 transition-all active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};


