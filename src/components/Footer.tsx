import React from 'react';
import { PageRoute } from '../types';
import { BUSINESS_INFO, SERVICES_DATA } from '../data/mockData';
import { Phone, Mail, Instagram, MapPin, ArrowUp, Calendar } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
  onOpenService: (serviceId: string) => void;
  onOpenBooking: () => void;
  onOpenPrivacyTerms: (type: 'privacy' | 'terms') => void;
}

/**
 * The one dark band on the site. It sits at the end of the page as a base,
 * not as a mid-page theme flip, and it keeps the navy from the original brand.
 */
export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenService,
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

  /* Mirrors the header exactly. Nothing here points at a page that no longer
     exists, and the book flow is the button above rather than a nav row. */
  const navItems: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'Services', route: 'services' },
    { label: 'Store', route: 'products' },
    { label: 'About', route: 'about' },
    { label: 'Contact', route: 'contact' },
  ];

  return (
    <footer id="main-footer" className="bg-ink text-brand-100 pt-14 pb-24 lg:pb-14">
      <div className="shell">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-4">
            <button
              onClick={() => handleLink('home')}
              className="flex min-h-[44px] items-center gap-2.5 text-left group"
              aria-label="Brantford Wireless & Electronics Home"
            >
              <BrandLogo variant="full" size={136} className="transition-opacity group-hover:opacity-90" />
            </button>

            <p className="mt-5 text-sm text-brand-200/80 leading-relaxed max-w-sm">
              Sales, repairs, buy and sell, custom wraps, computers, gaming, electronics and
              security cameras. Brantford's local destination for wireless and electronics.
            </p>

            <button
              id="footer-book-btn"
              onClick={onOpenBooking}
              className="btn btn-onink mt-6"
            >
              <Calendar aria-hidden="true" className="w-4 h-4" />
              <span>Mailed in Service</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="lg:col-span-2" aria-label="Footer navigation">
            <h2 className="text-xs uppercase tracking-[0.12em] text-white font-bold">
              Navigation
            </h2>
            <ul className="mt-2 text-sm">
              {navItems.map((item) => (
                <li key={item.route}>
                  <button
                    onClick={() => handleLink(item.route)}
                    className="flex min-h-[40px] items-center text-brand-200/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services. Every entry opens that service's own page. */}
          <nav className="lg:col-span-3" aria-label="Services navigation">
            <h2 className="text-xs uppercase tracking-[0.12em] text-white font-bold">
              Services
            </h2>
            <ul className="mt-2 text-sm">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => onOpenService(service.id)}
                    className="flex min-h-[40px] items-center text-left text-brand-200/80 hover:text-white transition-colors"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleLink('services')}
                  className="flex min-h-[40px] items-center font-semibold text-brand-300 hover:text-white transition-colors"
                >
                  All services
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.12em] text-white font-bold">
              Get in touch
            </h2>

            <div className="mt-4 text-sm">
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[40px] items-start gap-2.5 py-1 text-brand-200/90 hover:text-white transition-colors"
              >
                <MapPin aria-hidden="true" className="w-4 h-4 text-brand-300 shrink-0 mt-[3px]" />
                <span>
                  <span className="block text-white font-semibold">{BUSINESS_INFO.addressLine}</span>
                  <span className="block">{BUSINESS_INFO.addressCity}</span>
                </span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex min-h-[40px] items-center gap-2.5 text-brand-200/90 hover:text-white transition-colors"
              >
                <Phone aria-hidden="true" className="w-4 h-4 text-brand-300 shrink-0" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex min-h-[40px] items-center gap-2.5 text-brand-200/90 hover:text-white transition-colors min-w-0"
              >
                <Mail aria-hidden="true" className="w-4 h-4 text-brand-300 shrink-0" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </a>

              <a
                href={BUSINESS_INFO.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[40px] items-center gap-2.5 text-brand-200/90 hover:text-white transition-colors"
              >
                <Instagram aria-hidden="true" className="w-4 h-4 text-brand-300 shrink-0" />
                <span>{BUSINESS_INFO.social}</span>
              </a>
            </div>

            <p className="mt-4 text-sm text-brand-200/70">
              Serving Brantford and the surrounding communities.
            </p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-200/70">
          <p>© 2026 Brantford Wireless &amp; Electronics. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <button
              onClick={() => onOpenPrivacyTerms('privacy')}
              className="inline-flex min-h-[44px] items-center hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenPrivacyTerms('terms')}
              className="inline-flex min-h-[44px] items-center hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp aria-hidden="true" className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
