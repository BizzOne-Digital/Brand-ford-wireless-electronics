import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Cpu, Phone, Mail, Instagram, ArrowUp, Calendar } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenPrivacyTerms: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenPrivacyTerms,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#02040a] border-t border-blue-950 text-slate-300 pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => handleLink('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600/30 to-slate-900 border border-blue-500/40 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-extrabold tracking-[0.18em] text-white uppercase leading-none">
                  BRANTFORD
                </span>
                <span className="text-[10px] tracking-[0.22em] text-blue-400 font-semibold uppercase leading-tight mt-0.5">
                  WIRELESS & ELECTRONICS
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your trusted one-stop technology destination for premium devices, accessories, computer solutions, and reliable technical services in Brantford.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div>Primary Contact: <strong className="text-slate-200">{BUSINESS_INFO.contactPerson}</strong></div>
              <div>Domain: <span className="text-blue-400">{BUSINESS_INFO.website}</span></div>
            </div>
          </div>

          {/* Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-display">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLink('home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('services')} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('products')} className="hover:text-blue-400 transition-colors">
                  Products & Shop
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('pricing')} className="hover:text-blue-400 transition-colors">
                  Pricing & Quotes
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('testimonials')} className="hover:text-blue-400 transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('faq')} className="hover:text-blue-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('team')} className="hover:text-blue-400 transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => handleLink('contact')} className="hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services Category (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-display">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Mobile Devices & Protection</li>
              <li>Computer Hardware & Sales</li>
              <li>Diagnostics & Component Repairs</li>
              <li>Device Setup & Data Transfer</li>
              <li>Fast Charging & GaN Adapters</li>
              <li>Custom PC Builds & Consultations</li>
            </ul>

            <div className="pt-2">
              <button
                id="footer-book-btn"
                onClick={onOpenBooking}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600/90 hover:bg-blue-500 transition-all flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Service Appointment</span>
              </button>
            </div>
          </div>

          {/* Direct Contact & Social (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-white font-bold font-display">
              Get In Touch
            </h4>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors truncate"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <Instagram className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Instagram: <strong className="text-blue-300">{BUSINESS_INFO.social}</strong></span>
              </div>
            </div>

            {/* Social Media CTA */}
            <div className="p-3.5 rounded-2xl bg-[#070d1e] border border-blue-900/30">
              <span className="text-[11px] font-bold text-white block mb-0.5">
                Follow Brantford Wireless & Electronics
              </span>
              <p className="text-[11px] text-slate-400 leading-tight">
                Follow <strong className="text-blue-300">@branntfordwirelss</strong> for products, offers, technology updates & new arrivals.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Brantford Wireless & Electronics. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenPrivacyTerms('privacy')}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPrivacyTerms('terms')}
              className="hover:text-slate-200 transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
