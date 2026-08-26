import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar, Menu, X, Cpu, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenLeadModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  currentRoute, 
  onNavigate, 
  onOpenBooking,
  onOpenLeadModal 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Showroom & Products', route: 'products' },
    { label: 'Pricing & Quotes', route: 'pricing' },
    { label: 'Testimonials', route: 'testimonials' },
    { label: 'FAQ', route: 'faq' },
    { label: 'Our Team', route: 'team' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#030612]/92 backdrop-blur-xl border-b border-blue-900/30 shadow-2xl shadow-black/60 py-3'
          : 'bg-[#030612]/60 backdrop-blur-md border-b border-white/[0.04] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Brantford Wireless & Electronics Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 via-slate-900 to-slate-950 border border-blue-500/40 flex items-center justify-center group-hover:border-blue-400 transition-all shadow-lg shadow-blue-950/50">
              <Cpu className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xs sm:text-sm font-extrabold tracking-[0.2em] text-white uppercase leading-none">
                BRANTFORD
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.24em] text-blue-400 font-bold uppercase leading-tight mt-1">
                WIRELESS & ELECTRONICS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  id={`nav-link-${link.route}`}
                  onClick={() => handleNavClick(link.route)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-blue-400 bg-blue-950/60 border border-blue-500/30 shadow-sm shadow-blue-950/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action CTAs (Call & Book) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs xl:text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/40 transition-all group"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="hidden xl:inline text-slate-400">Call:</span>
              <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>
            </a>

            <button
              id="header-book-btn"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/25 border border-blue-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Service</span>
            </button>
          </div>

          {/* Mobile Right Controls: Direct Phone Icon Link + Hamburger Menu */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-header-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 active:scale-95 transition-all shadow-sm"
              aria-label={`Call ${BUSINESS_INFO.contactPerson} at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer"
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#030612]/98 border-b border-blue-900/30 shadow-2xl px-5 py-6 flex flex-col gap-4 backdrop-blur-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
            <div className="text-xs text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Contact: <strong className="text-white">{BUSINESS_INFO.contactPerson}</strong></span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="text-xs font-bold text-blue-400 hover:underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => {
              const isActive = currentRoute === link.route;
              return (
                <button
                  key={link.route}
                  id={`mobile-nav-${link.route}`}
                  onClick={() => handleNavClick(link.route)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-blue-600/20 text-blue-300 border border-blue-500/40 shadow-sm'
                      : 'bg-slate-900/70 text-slate-300 hover:bg-slate-800 border border-slate-800/60'
                  }`}
                >
                  <span className="truncate">{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-xl text-center text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 border border-blue-400/30 active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              Book a Service Appointment
            </button>
            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-3 rounded-xl text-center text-xs font-semibold text-slate-200 bg-slate-900/90 border border-slate-800 hover:bg-slate-800 flex items-center justify-center gap-2 active:scale-[0.98] transition-all"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              Call Ernest directly ({BUSINESS_INFO.phone})
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

