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
      className="fixed inset-0 z-[999] overflow-y-auto bg-ink/50 backdrop-blur-md flex justify-center items-start p-3 sm:p-4 pt-24 sm:pt-28 md:pt-32 pb-20 animate-in fade-in duration-150"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative w-full max-w-sm sm:max-w-md bg-white border border-brand-200 rounded-2xl text-ink flex flex-col max-h-[calc(100vh-8rem)] sm:max-h-[calc(100vh-9.5rem)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Pinned Top Header */}
        <div className="flex items-center justify-between px-3.5 py-2.5 sm:px-4 sm:py-3 border-b border-line bg-mist shrink-0">
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <div className="w-7 h-7 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 shrink-0">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <h2 className="text-xs sm:text-sm font-bold text-ink font-display truncate leading-tight">
                {service.title}
              </h2>
              <span className="text-[10px] text-brand-700 font-semibold uppercase tracking-wider block leading-none mt-0.5">
                {service.badge || 'Service Details'}
              </span>
            </div>
          </div>

          <button
            id="service-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-mist border border-line text-copy hover:text-ink hover:bg-frost transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3">
          {/* Image Banner */}
          <div className="w-full h-20 sm:h-24 rounded-xl overflow-hidden bg-mist border border-line relative shrink-0">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Service Description */}
          <p className="text-xs text-copy leading-relaxed">
            {service.fullDesc || service.description}
          </p>

          {/* Key Features List */}
          {service.features && service.features.length > 0 && (
            <div className="bg-mist border border-line rounded-xl p-2.5 sm:p-3">
              <h3 className="text-[10px] uppercase tracking-wider text-copy font-bold mb-1.5 font-display">
                What Is Included:
              </h3>
              <div className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[11px] text-copy">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-700 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pinned Bottom Actions */}
        <div className="px-3.5 py-2.5 sm:px-4 sm:py-3 border-t border-line bg-mist flex items-center justify-between gap-2 shrink-0">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 rounded-xl text-xs font-semibold text-ink bg-mist border border-line hover:border-brand-200 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-700" />
            <span className="truncate">Call: {BUSINESS_INFO.phone}</span>
          </a>

          <button
            id="service-modal-book-cta"
            onClick={handleAction}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 border border-brand-200 transition-all active:scale-[0.98]"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Service</span>
          </button>
        </div>
      </div>
    </div>
  );
};


