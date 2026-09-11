import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar, Menu, X, ChevronRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  onOpenBooking
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape closes the drawer; lock the page behind it.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  /* Five destinations. Pricing, Quote, Testimonials, FAQ and Our Team were
     removed as pages; their content sits on the pages that already had the
     context for it. Every entry here resolves to a real route. */
  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Store', route: 'products' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-3 left-3 right-3 z-50 rounded-2xl bg-ink/75 backdrop-blur-xl transition-shadow duration-300 ${
          isScrolled
            ? 'shadow-[0_2px_24px_-10px_rgba(0,0,0,0.6)] border-b border-white/10'
            : 'border-b border-white/[0.07]'
        }`}
      >
        <div className="shell-wide">
          <div className="flex items-center justify-between h-16">

            {/* Brand Identity / Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 py-2 text-left group shrink-0"
              aria-label="Brantford Wireless & Electronics Home"
            >
              <BrandLogo
                variant="full"
                size={44}
                className="!rounded-xl !p-1 transition-opacity group-hover:opacity-90"
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 mx-4 xl:mx-6" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive =
                  currentRoute === link.route ||
                  (link.route === 'services' && currentRoute === 'service');
                return (
                  <button
                    key={link.route}
                    id={`nav-link-${link.route}`}
                    onClick={() => handleNavClick(link.route)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive
                        ? 'text-white bg-white/12'
                        : 'text-brand-100 hover:text-white hover:bg-white/8'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action CTAs (Call & Book) */}
            {/* ml-auto pins this beside the drawer toggle below lg, where the
                inline nav is absent and justify-between would otherwise strand
                the button in the middle of the bar. */}
            <div className="hidden sm:flex items-center gap-2 shrink-0 ml-auto lg:ml-0">
              <a
                id="header-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 px-3 py-2 rounded-full text-[13px] font-semibold text-white whitespace-nowrap hover:bg-white/10 transition-colors"
              >
                <Phone aria-hidden="true" className="w-4 h-4 text-brand-300" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                id="header-book-btn"
                onClick={onOpenBooking}
                className="btn btn-primary !px-4 !py-2.5 !text-[13px]"
              >
                <Calendar aria-hidden="true" className="w-4 h-4" />
                {/* Shortened through the laptop range so the nav keeps its gap */}
                <span className="xl:hidden">Book Service</span>
                <span className="hidden xl:inline">Book a Service</span>
              </button>
            </div>

            {/* Drawer controls. These run to `lg`, where the inline nav takes
                over: the drawer is the only navigation in the tablet range, so
                hiding the toggle at `sm` left those widths with no nav at all. */}
            <div className="flex lg:hidden items-center gap-1.5 ml-2 sm:ml-1">
              <a
                id="mobile-header-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex sm:hidden items-center justify-center w-11 h-11 rounded-full text-brand-300 active:bg-white/10 transition-colors"
                aria-label={`Call ${BUSINESS_INFO.contactPerson} at ${BUSINESS_INFO.phone}`}
              >
                <Phone aria-hidden="true" className="w-5 h-5" />
              </a>

              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-11 h-11 rounded-full text-white active:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-drawer"
              >
                {mobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </header>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="lg:hidden fixed inset-x-3 top-[76px] bottom-3 z-50 rounded-2xl bg-ink px-4 py-5 flex flex-col gap-4 overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-[13px] text-brand-100">
                Contact <strong className="text-white font-semibold">{BUSINESS_INFO.contactPerson}</strong>
              </span>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-[13px] font-bold text-brand-300 flex min-h-[44px] items-center gap-1.5"
              >
                <Phone aria-hidden="true" className="w-3.5 h-3.5" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            <nav aria-label="Mobile navigation" className="flex flex-col gap-1.5">
              {navLinks.map((link) => {
                const isActive =
                  currentRoute === link.route ||
                  (link.route === 'services' && currentRoute === 'service');
                return (
                  <button
                    key={link.route}
                    id={`mobile-nav-${link.route}`}
                    onClick={() => handleNavClick(link.route)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center justify-between px-3 min-h-[52px] rounded-xl text-[15px] font-semibold text-left transition-colors ${
                      isActive ? 'bg-white/12 text-white' : 'text-brand-100 active:bg-white/8'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight aria-hidden="true" className="w-4 h-4 text-brand-300/70 shrink-0" />
                  </button>
                );
              })}
            </nav>

            <div className="mt-auto pt-4 flex flex-col gap-2.5">
              <button
                id="mobile-drawer-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="btn btn-primary w-full"
              >
                <Calendar aria-hidden="true" className="w-4 h-4" />
                Book a Service
              </button>
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="btn btn-onink w-full"
              >
                <Phone aria-hidden="true" className="w-4 h-4" />
                Call {BUSINESS_INFO.contactPerson}
              </a>
            </div>
          </div>
        )}
    </>
  );
};
