import React from 'react';
import { PageRoute } from '../types';
import { Store, ShieldCheck, HeartHandshake, MapPin, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const points = [
    {
      icon: Store,
      title: 'One Local Store',
      description: 'Phones, computers, gaming systems, wraps, security cameras and accessories, instead of four separate trips.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Solutions',
      description: 'Diagnostics before quotes, and a straight answer on whether a repair is worth doing or the device is better replaced.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer Focused',
      description: 'Recommendations built around what you actually need, without confusing upselling.',
    },
    {
      icon: MapPin,
      title: 'Local On King Street',
      description: 'A Brantford business at 28 King Street, building long-term relationships with the customers who walk in.',
    },
  ];

  return (
    <section id="why-choose-us-section" className="section bg-mist">
      <div className="shell">

        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
            Your technology. Our expertise.
          </h2>
          <p className="mt-4 text-base text-copy leading-relaxed">
            Sales, repairs, buy and sell, custom wraps, computers, gaming, electronics and
            security cameras. One local store, more technology solutions.
          </p>
        </div>

        {/* Text-led, not a card grid. Hairlines do the separating. */}
        <div className="mt-10 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-9">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div key={idx} id={`why-choose-${idx}`} className="lg:pt-6 lg:border-t lg:border-line">
                <Icon aria-hidden="true" className="w-6 h-6 text-brand-600" />
                <h3 className="mt-4 text-lg font-bold text-ink">{pt.title}</h3>
                <p className="mt-2 text-sm text-copy leading-relaxed">{pt.description}</p>
              </div>
            );
          })}
        </div>

        {onOpenBooking && (
          <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 pt-8 border-t border-line">
            <p className="text-base text-copy">
              Ready to upgrade your device or fix an issue?
            </p>
            <button
              id="why-choose-book-btn"
              onClick={onOpenBooking}
              className="btn btn-primary group sm:ml-auto"
            >
              <span>Mailed in Service</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
