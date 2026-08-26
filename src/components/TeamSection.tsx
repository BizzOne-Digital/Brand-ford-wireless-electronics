import React from 'react';
import { BUSINESS_INFO, TEAM_VALUES } from '../data/mockData';
import { PageRoute } from '../types';
import { ShieldCheck, Sparkles, Phone, Mail, Award, CheckCircle2, HeartHandshake, ArrowRight } from 'lucide-react';

interface TeamSectionProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  isFullPage = false,
  onNavigate,
  onOpenBooking,
}) => {
  return (
    <section 
      id="team-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#040711]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dedicated Tech Team</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Experience. Reliability. Customer Care.
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Meet the dedicated technology specialists behind Brantford Wireless & Electronics committed to honest advice and meticulous service.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {TEAM_VALUES.map((member, idx) => (
            <div
              key={idx}
              id={`team-member-${idx}`}
              className="bg-[#070d1e] border border-blue-900/20 hover:border-blue-500/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-blue-950/30"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 font-display font-extrabold text-lg">
                    {member.title.charAt(0)}
                  </div>
                  <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-3 py-1 rounded-full border border-blue-800/30">
                    {member.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">
                  {member.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {member.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                    Core Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {member.highlights.map((item, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-xs text-slate-200 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-xl flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {idx === 0 && (
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Direct: {BUSINESS_INFO.phone}</span>
                  </a>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-blue-400" />
                    <span>Email Ernest</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Team Philosophy Pillars */}
        <div className="bg-gradient-to-r from-blue-950/40 via-[#0a142c] to-slate-900/50 border border-blue-800/30 rounded-3xl p-6 sm:p-10 text-center max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3 font-display">
            Our Core Service Commitment
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            We treat every customer's device with the utmost care, prioritizing transparent diagnostic communication, privacy, and long-lasting solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <ShieldCheck className="w-5 h-5 text-blue-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Privacy & Care</h4>
              <p className="text-[11px] text-slate-400">Your personal data and media are treated with strict confidentiality.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <Award className="w-5 h-5 text-blue-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Quality Components</h4>
              <p className="text-[11px] text-slate-400">We source verified, premium replacement parts for optimal performance.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
              <HeartHandshake className="w-5 h-5 text-blue-400 mb-2" />
              <h4 className="text-xs font-bold text-white mb-1">Honest Communication</h4>
              <p className="text-[11px] text-slate-400">Clear explanations of what is wrong before you approve any repairs.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
