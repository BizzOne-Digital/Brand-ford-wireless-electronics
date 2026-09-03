import React from 'react';
import { BUSINESS_INFO, TEAM_VALUES } from '../data/mockData';
import { PageRoute } from '../types';
import { ShieldCheck, Sparkles, Phone, Mail, Award, CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  hideHeader = false,
  isFullPage = false,
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <section
      id="team-section"
      className="section bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dedicated Tech Team</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight mb-4 font-display">
              Experience. Reliability. Customer Care.
            </h2>

            <p className="text-sm sm:text-base text-copy">
              Meet the dedicated technology specialists behind Brantford Wireless & Electronics committed to honest advice and meticulous service.
            </p>
          </div>
        )}


        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {TEAM_VALUES.map((member, idx) => (
            <div
              key={idx}
              id={`team-member-${idx}`}
              className="bg-white border border-brand-200 hover:border-brand-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover: hover:"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-line">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-700 font-display font-extrabold text-lg">
                    {member.title.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-ink mb-2 font-display">
                  {member.title}
                </h3>

                <p className="text-xs sm:text-sm text-copy leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-copy font-bold block">
                    Core Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-xs text-ink bg-mist border border-line px-3 py-1 rounded-xl flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-700" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {idx === 0 && (
                <div className="pt-4 border-t border-line flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-brand-700 hover:text-brand-700"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct: {BUSINESS_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-copy hover:text-ink"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-700" />
                    <span>Email Us</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Philosophy Pillars */}
        <div className="bg-frost border border-brand-200 rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-ink mb-3 font-display">
            Our Core Service Commitment
          </h3>
          <p className="text-xs sm:text-sm text-copy leading-relaxed max-w-2xl mx-auto mb-8">
            We treat every customer's device with the utmost care, prioritizing transparent diagnostic communication, privacy, and long-lasting solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-mist border border-line">
              <ShieldCheck className="w-5 h-5 text-brand-700 mb-2" />
              <h4 className="text-xs font-bold text-ink mb-1">Privacy & Care</h4>
              <p className="text-[11px] text-copy">Your personal data and media are treated with strict confidentiality.</p>
            </div>
            <div className="p-4 rounded-2xl bg-mist border border-line">
              <Award className="w-5 h-5 text-brand-700 mb-2" />
              <h4 className="text-xs font-bold text-ink mb-1">Quality Components</h4>
              <p className="text-[11px] text-copy">We source verified, premium replacement parts for optimal performance.</p>
            </div>
            <div className="p-4 rounded-2xl bg-mist border border-line">
              <HeartHandshake className="w-5 h-5 text-brand-700 mb-2" />
              <h4 className="text-xs font-bold text-ink mb-1">Honest Communication</h4>
              <p className="text-[11px] text-copy">Clear explanations of what is wrong before you approve any repairs.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
