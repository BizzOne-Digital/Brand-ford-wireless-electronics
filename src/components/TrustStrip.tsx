import React from 'react';
import { Store, Wrench, Palette, Cctv } from 'lucide-react';

/**
 * Slim credibility bar. Deliberately label-only: the longer explanations live in
 * WhyChooseUs on the interior pages, so the homepage does not say it twice.
 */
export const TrustStrip: React.FC = () => {
  const trustPillars = [
    { icon: Wrench, title: 'Phone & PC repair' },
    { icon: Palette, title: 'Custom wraps' },
    { icon: Cctv, title: 'Security cameras' },
    { icon: Store, title: 'Buy, sell & trade' },
  ];

  return (
    <section id="trust-strip" className="bg-white border-y border-line overflow-hidden">
      <div className="trust-marquee-track">
        {[0, 1].map((group) => (
          <ul
            key={group}
            aria-hidden={group === 1 ? 'true' : undefined}
            className="trust-marquee-group shell grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 py-5"
          >
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <li
                  key={idx}
                  id={group === 0 ? `trust-pillar-${idx}` : undefined}
                  className="flex items-center gap-2.5 min-w-0"
                >
                  <Icon aria-hidden="true" className="w-[18px] h-[18px] text-brand-600 shrink-0" />
                  <span className="text-[13px] sm:text-sm font-semibold text-ink truncate">
                    {pillar.title}
                  </span>
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </section>
  );
};
