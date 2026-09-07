import React from 'react';
import { PageRoute } from '../types';
import { ArrowRight, Palette, Cctv, Recycle, CheckCircle2 } from 'lucide-react';

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
      id: 'featured-wrapping',
      category: 'Store Specialty',
      title: 'Custom Wrapping',
      headline: 'Give your technology a completely new look.',
      description: 'Instead of carrying the same looking device as everyone else, customise your phone, laptop, console or controller with a professional wrap. It gives a unique appearance while helping protect the original exterior from everyday scratches and wear.',
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop',
      points: ['Colours, Patterns & Textured Finishes', 'Phones, Tablets, Laptops & Consoles', 'Fitted In Store, See The Options In Person'],
      ctaLabel: 'Ask About Wrapping',
      ctaAction: () => onOpenBookingWithService('Custom Device Wrapping'),
      reverse: false,
    },
    {
      id: 'featured-security',
      category: 'Home & Business',
      title: 'Security Cameras',
      headline: 'See what happens at your property, from anywhere.',
      description: 'We help you choose a camera system around your actual property and security requirements, install it properly, and set up remote viewing so you can check the cameras from your phone. Suitable for houses, retail stores, offices and commercial property.',
      icon: Cctv,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop',
      points: ['IP & PoE Cameras With NVR Recording', 'Indoor, Outdoor & Night Vision', 'Remote Viewing From Your Smartphone'],
      ctaLabel: 'Discuss A Camera System',
      ctaAction: () => onNavigate('contact'),
      reverse: true,
    },
    {
      id: 'featured-buy-sell',
      category: 'Buy & Sell',
      title: 'We Buy Devices',
      headline: 'Turn unwanted technology into money.',
      description: 'We buy selected new, used, damaged and broken electronics, including phones, tablets, laptops, desktops and PlayStation consoles. Bring the device in and we will inspect it and make you an offer. All purchases are subject to inspection, ownership verification and our purchasing requirements.',
      icon: Recycle,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1000&auto=format&fit=crop',
      points: ['Phones, Tablets, Laptops & Consoles', 'Working, Damaged & Broken Considered', 'Evaluated In Store, Usually While You Wait'],
      ctaLabel: 'Get A Device Evaluated',
      ctaAction: () => onNavigate('contact'),
      reverse: false,
    },
  ];

  return (
    <section id="featured-solutions-section" className="section bg-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest text-brand-700 font-bold font-display">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mt-2 mb-4 font-display">
            Three Things You Will Not Find Everywhere
          </h2>
          <p className="text-sm sm:text-base text-copy">
            Custom wrapping, security camera installation, and a counter that buys your old
            devices as well as selling you new ones.
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
                  <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-brand-200 bg-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4 bg-mist backdrop-blur-md border border-line px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs text-brand-700 font-semibold">
                      <Icon className="w-3.5 h-3.5 text-brand-700" />
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
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 uppercase tracking-widest mb-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ink tracking-tight mb-4 font-display leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-sm sm:text-base text-copy leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-8 w-full">
                    {item.points.map((pt, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink">
                        <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    id={`featured-cta-${item.id}`}
                    onClick={item.ctaAction}
                    className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 border border-brand-200 transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
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
