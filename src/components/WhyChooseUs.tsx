import React from 'react';
import { PageRoute } from '../types';
import { Store, ShieldCheck, HeartHandshake, Cpu, ArrowRight } from 'lucide-react';

interface WhyChooseUsProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate, onOpenBooking }) => {
  const points = [
    {
      icon: Store,
      number: '01',
      title: 'One Stop Shop',
      description: 'Get smartphones, accessories, computer hardware, and reliable technology support all in one convenient place.',
    },
    {
      icon: ShieldCheck,
      number: '02',
      title: 'Reliable Solutions',
      description: 'Practical, honest help for everyday technology needs — with systematic diagnostics and durable replacement components.',
    },
    {
      icon: HeartHandshake,
      number: '03',
      title: 'Customer Focused',
      description: 'Every recommendation is designed around what you actually need, without confusing upselling or unnecessary complexity.',
    },
    {
      icon: Cpu,
      number: '04',
      title: 'Technology Expertise',
      description: 'Knowledgeable support across both mobile ecosystems and modern computer systems to keep your hardware running smoothly.',
    },
  ];

  return (
    <section id="why-choose-us-section" className="py-20 lg:py-28 bg-[#030610] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold font-display">
            The Brantford Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2 mb-4 font-display">
            Your Technology. Our Expertise.
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            We bridge high-end electronics retail with dependable local technical assistance.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                id={`why-choose-${idx}`}
                className="bg-[#070d1e] border border-blue-900/20 hover:border-blue-500/40 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-extrabold text-slate-400 font-display">
                      {pt.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-display">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-slate-900/60 border border-slate-800 p-3 sm:p-4 rounded-2xl">
            <span className="text-xs sm:text-sm text-slate-300">
              Ready to upgrade your device or fix an issue?
            </span>
            {onOpenBooking && (
              <button
                id="why-choose-book-btn"
                onClick={onOpenBooking}
                className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all flex items-center gap-1.5"
              >
                <span>Book Service Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
