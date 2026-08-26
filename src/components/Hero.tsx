import React from 'react';
import { motion } from 'motion/react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar, ArrowRight, ShieldCheck, Sparkles, Cpu, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenLeadModal?: () => void;
  onOpenLead?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onNavigate, 
  onOpenBooking, 
  onOpenLeadModal,
  onOpenLead 
}) => {
  const handleOpenLead = onOpenLeadModal || onOpenLead || onOpenBooking;
  return (
    <section 
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden bg-midnight-radial"
    >
      {/* Background High-Tech Video Loop */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-25 filter contrast-125 brightness-95 mix-blend-screen scale-105"
          poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-circuit-board-details-and-components-41559-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-technology-network-connections-background-loop-42866-large.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark overlays to maintain pristine text legibility & contrast */}
        <div className="absolute inset-0 bg-[#030612]/75 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030612]/90 via-[#030612]/50 to-[#030612]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-[#030612]/80" />
      </div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Decorative grid pattern in background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Brantford's Premier Tech Destination</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 font-display">
              Premium Technology.{' '}
              <span className="text-gradient-blue block sm:inline">
                Expert Service.
              </span>{' '}
              All in One Place.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              {BUSINESS_INFO.heroDescription}
            </p>

            {/* Quick Key Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8 w-full max-w-xl text-xs sm:text-sm text-slate-200">
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">Smartphones & Sales</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">Computer Repairs</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-2 rounded-xl col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">Expert Tech Support</span>
              </div>
            </div>

            {/* Primary, Secondary, & Direct Phone CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                id="hero-explore-btn"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 border border-blue-400/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/70 hover:border-blue-500/50 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-blue-400" />
                <span>Book a Service</span>
              </button>

              <a
                id="hero-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-sm font-semibold text-blue-300 bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/40 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Contact Person & Assurance Note */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-3 text-xs text-slate-400">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Contact Person: <strong className="text-slate-200">{BUSINESS_INFO.contactPerson}</strong> • Direct consultations & quote inquiries welcomed</span>
            </div>
          </motion.div>

          {/* Right Column: Premium Interactive Showroom Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Showroom Visual Card Container */}
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-900/90 via-[#070e20]/90 to-[#040711] border border-blue-500/20 rounded-3xl p-5 sm:p-6 shadow-2xl shadow-blue-950/40 backdrop-blur-md overflow-hidden group">
              
              {/* Top Card Badge */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-sm shadow-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300 font-display">
                    Luxury Technology Retail
                  </span>
                </div>
                <span className="text-[11px] font-medium text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded-full border border-blue-800/40">
                  Brantford, ON
                </span>
              </div>

              {/* Central Layered Imagery */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-5 bg-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                  alt="High-end technology showroom devices and precision components"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-transparent to-black/30" />
                
                {/* Floating Badges over Image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-slate-950/85 backdrop-blur-md border border-slate-800/90 px-3.5 py-2 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-blue-400" />
                    <span className="font-semibold text-white">Hardware & Diagnostics</span>
                  </div>
                  <span className="text-blue-400 font-medium text-[11px]">Certified Parts</span>
                </div>
              </div>

              {/* Mini Interactive Category Quick Selector */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <button
                  id="hero-quick-mobile-btn"
                  onClick={() => onNavigate('products')}
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-blue-950/50 border border-slate-800 hover:border-blue-500/40 text-left transition-all group/item"
                >
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Retail Store</span>
                  <span className="text-white text-xs font-semibold group-hover/item:text-blue-300">Shop Devices & Accessories</span>
                </button>
                <button
                  id="hero-quick-repairs-btn"
                  onClick={() => onNavigate('pricing')}
                  className="p-3 rounded-xl bg-slate-900/80 hover:bg-blue-950/50 border border-slate-800 hover:border-blue-500/40 text-left transition-all group/item"
                >
                  <span className="text-slate-400 text-[10px] uppercase tracking-wider block">Technical Service</span>
                  <span className="text-white text-xs font-semibold group-hover/item:text-blue-300">Get a Repair Quote</span>
                </button>
              </div>

              {/* Bottom Quick Action */}
              <button
                id="hero-lead-quick-btn"
                onClick={handleOpenLead}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-900/50 to-slate-900 border border-blue-600/30 hover:border-blue-500 text-xs font-semibold text-blue-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Need immediate advice? Request assistance</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
