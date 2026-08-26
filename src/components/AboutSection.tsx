import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { ShieldCheck, Cpu, Store, Users, ArrowRight, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section id="about-brand-section" className="py-20 lg:py-28 bg-[#040711] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-blue-900/30 bg-[#060c1d] shadow-2xl shadow-blue-950/40">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
                alt="Technology workspace and hardware repair workbench"
                className="w-full h-[400px] sm:h-[460px] object-cover opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-transparent" />

              {/* Founder / Team Spotlight Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block font-display">
                      Direct Expertise with {BUSINESS_INFO.contactPerson}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Personalized tech guidance & local care
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hidden sm:inline-block text-xs font-bold text-blue-400 bg-blue-950/80 px-3 py-1.5 rounded-lg border border-blue-800/40"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Brantford Wireless & Electronics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-display leading-tight">
              Technology That Works For You
            </h2>

            <p className="text-base text-slate-300 leading-relaxed mb-6 font-normal">
              <strong>Brantford Wireless & Electronics</strong> is your trusted one-stop destination for mobile devices, high-grade accessories, computer systems, repairs, and reliable technology support.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              We believe quality technology retail and dependable technical services belong under one roof. Whether you are searching for a new laptop for university, outfitting your smartphone with heavy-duty protection, or seeking honest diagnostics for a malfunctioning computer, we take the time to deliver solutions that fit your lifestyle and budget.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Store className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display">One-Stop Convenience</h4>
                  <p className="text-[11px] text-slate-400">Hardware, accessories, and repairs in one place.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display">Reliable Solutions</h4>
                  <p className="text-[11px] text-slate-400">Proven diagnostics and careful hardware handling.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display">Practical Technology</h4>
                  <p className="text-[11px] text-slate-400">Straightforward advice without tech jargon.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <Users className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white font-display">Customer Focused</h4>
                  <p className="text-[11px] text-slate-400">Direct assistance from Ernest and our team.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {onOpenBooking && (
                <button
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all"
                >
                  Book a Consultation
                </button>
              )}
              {onNavigate && (
                <button
                  id="about-meet-team-btn"
                  onClick={() => onNavigate('team')}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 flex items-center gap-2 transition-all"
                >
                  <span>Learn About Our Team</span>
                  <ArrowRight className="w-4 h-4 text-blue-400" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
