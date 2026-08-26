import React, { useState } from 'react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/mockData';
import { ServiceItem, PageRoute } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  Smartphone, 
  Laptop, 
  Wrench, 
  LifeBuoy, 
  Cpu, 
  Headphones, 
  ArrowRight, 
  Sparkles,
  ChevronRight 
} from 'lucide-react';

interface ServicesOverviewProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBookingWithService: (serviceName: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  onNavigate,
  onOpenBookingWithService,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Laptop':
        return Laptop;
      case 'Wrench':
        return Wrench;
      case 'LifeBuoy':
        return LifeBuoy;
      case 'Cpu':
        return Cpu;
      case 'Headphones':
        return Headphones;
      default:
        return Cpu;
    }
  };

  return (
    <section id="services-overview-section" className="py-20 lg:py-28 bg-[#040711] relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Solutions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">
            Technology Solutions Built Around You
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            From everyday device needs to complex computer problems, we provide practical technology solutions you can rely on.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-14">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-[#070d1e] border border-blue-900/20 hover:border-blue-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div>
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-400 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="text-[11px] font-semibold text-blue-300 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/40">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors font-display">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key bullet previews */}
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-300">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => setSelectedService(service)}
                    className="text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`service-quick-book-${service.id}`}
                    onClick={() => onOpenBookingWithService(service.title)}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-blue-600 hover:text-white border border-slate-700 hover:border-blue-500 transition-all"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Consultation Prompt */}
        <div className="bg-gradient-to-r from-blue-950/50 via-[#0a142c] to-slate-900/60 border border-blue-700/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 font-display">
              Have a specific device issue or inquiry?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with <strong>{BUSINESS_INFO.contactPerson}</strong> at <strong>{BUSINESS_INFO.phone}</strong> or request a quick estimate.
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              id="services-view-pricing-btn"
              onClick={() => onNavigate('pricing')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all text-center"
            >
              Service Pricing
            </button>
            <button
              id="services-full-catalog-btn"
              onClick={() => onNavigate('products')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Shop Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Deep-Dive Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBookService={onOpenBookingWithService}
        />
      )}
    </section>
  );
};
