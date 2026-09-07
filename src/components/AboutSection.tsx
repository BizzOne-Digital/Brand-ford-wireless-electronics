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
    <section id="about-brand-section" className="section bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop"
                alt="Technology workspace and hardware repair workbench"
                className="w-full h-[400px] sm:h-[460px] object-cover opacity-85"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Founder / Team Spotlight Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-mist backdrop-blur-md border border-line flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-ink block font-display">
                      Direct Expertise with {BUSINESS_INFO.contactPerson}
                    </span>
                    <span className="text-[11px] text-copy">
                      Personalized tech guidance & local care
                    </span>
                  </div>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hidden sm:inline-block text-xs font-bold text-brand-700 bg-brand-50 px-3 py-1.5 rounded-lg border border-brand-200"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Brantford Wireless &amp; Electronics</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-6 font-display leading-tight">
              One Local Store. More Technology Solutions.
            </h2>

            <p className="text-base text-copy leading-relaxed mb-6 font-normal">
              <strong>Brantford Wireless &amp; Electronics</strong> is a local technology store at {BUSINESS_INFO.addressFull}, offering cell phone and computer repair, electronics sales, gaming console repair, custom device wrapping, security cameras and technology solutions for individuals, families and businesses.
            </p>

            <p className="text-sm text-copy leading-relaxed mb-8">
              Instead of visiting one store for your phone, another for your computer, another for your gaming system and another for electronics, our goal is to provide those services from one convenient Brantford location. Most importantly, we are a local business committed to building long-term relationships with our customers.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 w-full">
              <div className="p-3.5 rounded-xl bg-mist border border-line flex items-start gap-3">
                <Store className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-ink font-display">One-Stop Convenience</h4>
                  <p className="text-[11px] text-copy">Sales, repairs, wraps and cameras in one place.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-mist border border-line flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-ink font-display">Reliable Solutions</h4>
                  <p className="text-[11px] text-copy">Proven diagnostics and careful hardware handling.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-mist border border-line flex items-start gap-3">
                <Cpu className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-ink font-display">Repair Or Replace</h4>
                  <p className="text-[11px] text-copy">We say when a repair is not worth the money.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-mist border border-line flex items-start gap-3">
                <Users className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-ink font-display">Local Business</h4>
                  <p className="text-[11px] text-copy">Built on long-term customer relationships.</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              {onOpenBooking && (
                <button
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 transition-all"
                >
                  Book a Consultation
                </button>
              )}
              {onNavigate && (
                <button
                  id="about-meet-team-btn"
                  onClick={() => onNavigate('team')}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-ink bg-mist hover:bg-frost border border-line flex items-center gap-2 transition-all"
                >
                  <span>Learn About Our Team</span>
                  <ArrowRight className="w-4 h-4 text-brand-700" />
                </button>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
