import React from 'react';
import { Store, ShieldCheck, Wrench, HeartHandshake } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustPillars = [
    {
      icon: Store,
      title: 'One Stop Tech Shop',
      description: 'Everything from mobile devices and accessories to computer sales & repair solutions.',
    },
    {
      icon: ShieldCheck,
      title: 'Reliable Solutions',
      description: 'Professional technology assistance and thorough hardware diagnostics you can count on.',
    },
    {
      icon: Wrench,
      title: 'Expert Support',
      description: 'Dedicated guidance helping you select the exact hardware or repair for your needs.',
    },
    {
      icon: HeartHandshake,
      title: 'Customer First',
      description: 'Personalized service, honest recommendations, and transparent communication every time.',
    },
  ];

  return (
    <section id="trust-strip" className="relative z-20 py-10 bg-[#070c1b] border-y border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                id={`trust-pillar-${idx}`}
                className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:border-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1 font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
