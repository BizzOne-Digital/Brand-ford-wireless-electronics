import React, { useState } from 'react';
import { PRICING_CATEGORIES, BUSINESS_INFO } from '../data/mockData';
import { PageRoute } from '../types';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Phone, 
  Send, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Wrench, 
  Cpu 
} from 'lucide-react';

interface PricingSectionProps {
  isFullPage?: boolean;
  onNavigate?: (route: PageRoute) => void;
  onNotify?: (msg: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  isFullPage = false,
  onNavigate,
  onNotify = (_msg: string) => {},
}) => {
  const [quoteForm, setQuoteForm] = useState({
    name: '',
    phone: '',
    email: '',
    deviceCategory: 'Smartphone (iPhone / Android)',
    issueType: 'Screen & Display Replacement',
    deviceModel: '',
    notes: '',
  });
  const [submittingQuote, setSubmittingQuote] = useState(false);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone':
        return Smartphone;
      case 'Laptop':
        return Laptop;
      case 'Wrench':
        return Wrench;
      case 'Cpu':
        return Cpu;
      default:
        return Wrench;
    }
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quoteForm.name || !quoteForm.phone) return;

    setSubmittingQuote(true);
    setTimeout(() => {
      setSubmittingQuote(false);
      onNotify(
        `Thank you ${quoteForm.name}! Your quote request for ${quoteForm.deviceCategory} (${quoteForm.issueType}) has been received. Ernest will review and call you at ${quoteForm.phone} with clear pricing details.`
      );
      setQuoteForm({
        name: '',
        phone: '',
        email: '',
        deviceCategory: 'Smartphone (iPhone / Android)',
        issueType: 'Screen & Display Replacement',
        deviceModel: '',
        notes: '',
      });
    }, 600);
  };

  return (
    <section 
      id="pricing-section"
      className={`relative ${isFullPage ? 'pt-32 pb-24' : 'py-20 lg:py-28'} bg-[#040711]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Transparent Estimates</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Service Pricing & Quote Requests
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Every device and repair is unique. We provide upfront, transparent quote assessments based on your exact device model, required replacement components, and labor complexity.
          </p>
        </div>

        {/* Pricing Factors Explanation Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-4 rounded-2xl bg-[#070d1e] border border-blue-900/20 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              01. Device Make & Model
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Components vary by model and generation. We tailor parts to match OEM tolerances.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#070d1e] border border-blue-900/20 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              02. Diagnostic Depth
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Hardware tests pinpoint whether an issue is isolated to a connector, battery, or board.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#070d1e] border border-blue-900/20 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              03. Certified Parts
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              We source high-grade replacement screens, batteries, and SSDs for lasting reliability.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-[#070d1e] border border-blue-900/20 text-left">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
              04. No Hidden Fees
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Quotes are communicated and approved by you before any repair work commences.
            </p>
          </div>
        </div>

        {/* Interactive Quote Calculator & Form + Pricing Framework Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Interactive Instant Quote Request Tool */}
          <div className="lg:col-span-5 bg-[#070d1e] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                  Request a Custom Quote
                </h3>
                <span className="text-xs text-slate-400">Fast response directly from Ernest</span>
              </div>
            </div>

            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Device Type *
                </label>
                <select
                  value={quoteForm.deviceCategory}
                  onChange={(e) => setQuoteForm({ ...quoteForm, deviceCategory: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Smartphone (iPhone / Android)">Smartphone (iPhone / Android / Pixel / Galaxy)</option>
                  <option value="Laptop (MacBook / Windows / Chromebook)">Laptop (MacBook / Windows / Dell / HP / Lenovo)</option>
                  <option value="Desktop PC & Workstation">Desktop PC & Custom Workstation</option>
                  <option value="Tablet (iPad / Galaxy Tab)">Tablet (iPad / Android Tablet)</option>
                  <option value="Accessories & Power Products">Accessories & Peripheral Equipment</option>
                  <option value="Other Technology Issue">Other Electronics / Tech Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Service / Issue Description *
                </label>
                <select
                  value={quoteForm.issueType}
                  onChange={(e) => setQuoteForm({ ...quoteForm, issueType: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="Screen & Display Replacement">Screen / Digitizer / Cracked Glass</option>
                  <option value="Battery Health & Rapid Drain">Battery Replacement & Power Drain</option>
                  <option value="No Power / Does Not Turn On">No Power / Black Screen / Charging Port</option>
                  <option value="System Speed & SSD Upgrade">Slow Performance & SSD / RAM Upgrade</option>
                  <option value="Virus / Malware Removal & OS Clean">OS Crash / Virus & Malware Removal</option>
                  <option value="Data Backup & Transfer">Data Transfer to New Device / Backup</option>
                  <option value="Custom PC Build Consultation">Custom PC Build & Parts Consultation</option>
                  <option value="General Diagnostics">General Diagnostic Inspection</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Device Model / Specifics (Optional)
                </label>
                <input
                  type="text"
                  value={quoteForm.deviceModel}
                  onChange={(e) => setQuoteForm({ ...quoteForm, deviceModel: e.target.value })}
                  placeholder="e.g. iPhone 14 Pro, ThinkPad T14, MacBook Air M2..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="(416) 000-0000"
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={quoteForm.notes}
                  onChange={(e) => setQuoteForm({ ...quoteForm, notes: e.target.value })}
                  placeholder="Describe symptoms, when it happened, or special urgency..."
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button
                id="submit-quote-calculator-btn"
                type="submit"
                disabled={submittingQuote}
                className="w-full py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {submittingQuote ? (
                  <span>Evaluating Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Get Upfront Quote</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                No obligation estimate
              </span>
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-blue-400 hover:underline">
                Or Call {BUSINESS_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Structured Service Categories & Details */}
          <div className="lg:col-span-7 space-y-6">
            {PRICING_CATEGORIES.map((category) => {
              const Icon = getCategoryIcon(category.iconName);
              return (
                <div
                  key={category.id}
                  id={`pricing-cat-${category.id}`}
                  className="bg-[#070d1e] border border-blue-900/20 rounded-3xl p-6 sm:p-7 transition-all hover:border-blue-500/30"
                >
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800">
                    <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/50 flex items-center justify-center text-blue-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white font-display">
                        {category.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              {item.name}
                            </span>
                            {item.popular && (
                              <span className="text-[10px] uppercase font-bold text-blue-300 bg-blue-950/90 px-2 py-0.5 rounded-full border border-blue-800/50">
                                Common
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400">
                            {item.description}
                          </p>
                          <div className="flex items-center gap-2 text-[11px] text-slate-500">
                            <Clock className="w-3 h-3 text-blue-400" />
                            <span>{item.turnaroundGuide}</span>
                          </div>
                        </div>

                        <div className="sm:text-right shrink-0">
                          <span className="text-xs font-semibold text-blue-400 bg-blue-950/60 px-3 py-1.5 rounded-xl border border-blue-800/40 inline-block">
                            {item.pricingNote}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
