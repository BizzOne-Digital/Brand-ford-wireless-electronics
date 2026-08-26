import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Smartphone, Laptop, Wrench, CheckCircle2 } from 'lucide-react';

interface FeaturedServicesProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenBookingWithService: (serviceName: string) => void;
}

export const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenBookingWithService,
}) => {
  const featured = [
    {
      id: 'featured-mobile',
      category: 'Mobile Solutions',
      title: 'Mobile Technology',
      headline: 'Stay connected with the right technology.',
      description: 'Find premium smartphones, certified accessories, fast charging adapters, and crystal-clear screen protection designed to safeguard and power your everyday digital life.',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1000&auto=format&fit=crop',
      points: ['Flagship & Certified Smartphones', 'Impact-Tested Cases & 9H Glass', 'Fast Multi-Device GaN Chargers'],
      ctaLabel: 'Explore Mobile Solutions',
      ctaAction: () => onNavigate('products'),
      reverse: false,
    },
    {
      id: 'featured-computers',
      category: 'Computing Systems',
      title: 'Computer Solutions',
      headline: 'From choosing a new computer to fixing the one you already own.',
      description: 'Whether you require an efficient laptop for school, a high-performance desktop tower for demanding projects, or diagnostic upgrades for your current machine, we configure solutions that work seamlessly.',
      icon: Laptop,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
      points: ['Work & Academic Laptops', 'Storage SSD & RAM Speed Upgrades', 'Clean OS Installation & Optimization'],
      ctaLabel: 'Explore Computer Services',
      ctaAction: () => onNavigate('services'),
      reverse: true,
    },
    {
      id: 'featured-repairs',
      category: 'Diagnostic & Care',
      title: 'Reliable Repairs',
      headline: "Technology problems shouldn't slow you down.",
      description: 'Cracked displays, rapidly draining batteries, unresponsive keyboards, or sudden software failures — our systematic diagnostic checks pinpoint the root cause for straightforward, lasting repairs.',
      icon: Wrench,
      image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop',
      points: ['Screen & Digitizer Replacement', 'Battery Diagnostics & Refresh', 'No-Nonsense Diagnostic Reports'],
      ctaLabel: 'Book a Repair',
      ctaAction: () => onOpenBookingWithService('Computer Repairs'),
      reverse: false,
    },
  ];

  return (
    <section id="featured-solutions-section" className="py-20 lg:py-28 bg-[#030610] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold font-display">
            Showroom Spotlight
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 font-display">
            Featured Technology Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Engineered around performance, durability, and practical local service.
          </p>
        </div>

        {/* Alternating Featured Items */}
        <div className="space-y-20 lg:space-y-28">
          {featured.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                  item.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Column */}
                <div
                  className={`lg:col-span-6 relative group ${
                    item.reverse ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-blue-900/30 bg-[#060c1d] shadow-2xl shadow-blue-950/30">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030610] via-transparent to-transparent opacity-80" />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-800 px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs text-blue-300 font-semibold">
                      <Icon className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 flex flex-col items-start ${
                    item.reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4 font-display leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-8 w-full">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    id={`featured-cta-${item.id}`}
                    onClick={item.ctaAction}
                    className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-600/25 border border-blue-400/30 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
