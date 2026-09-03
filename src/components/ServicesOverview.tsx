import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem, PageRoute } from '../types';
import {
  Smartphone,
  Laptop,
  Wrench,
  LifeBuoy,
  Cpu,
  Headphones,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface ServicesOverviewProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  /** Full services page shows every service; the homepage shows the first four. */
  isFullPage?: boolean;
  onSelectService: (service: ServiceItem) => void;
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Laptop,
  Wrench,
  LifeBuoy,
  Cpu,
  Headphones,
};

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  hideHeader = false,
  isFullPage = false,
  onSelectService,
  onNavigate,
  onOpenBooking,
}) => {
  const reduceMotion = useReducedMotion();
  const services = isFullPage ? SERVICES_DATA : SERVICES_DATA.slice(0, 4);

  return (
    <section id="services-overview-section" className="section bg-white">
      <div className="shell">

        {/* Section header. Vertical stack, no split-header. */}
        {!hideHeader && (
  <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1] font-bold text-ink">
              Everything tech, under one roof
            </h2>
            <p className="mt-4 text-base sm:text-lg text-copy leading-relaxed">
              From everyday device needs to complex computer problems, we provide practical
              technology solutions you can rely on.
            </p>
          </div>
        )}

        <div className={`${hideHeader ? '' : 'mt-10 lg:mt-14'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6`}>
          {services.map((service, index) => {
            const Icon = ICONS[service.iconName] ?? Cpu;
            return (
              <motion.article
                key={service.id}
                id={`service-card-${service.id}`}
                initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
                className="card card-interactive p-6 flex flex-col"
              >
                <span className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
                  <Icon className="w-[22px] h-[22px]" />
                </span>

                <h3 className="mt-5 text-lg font-bold text-ink">{service.title}</h3>

                <p className="mt-2 text-sm text-copy leading-relaxed">{service.shortDesc}</p>

                <div className="mt-auto pt-5 border-t border-line flex items-center justify-between gap-3">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => onSelectService(service)}
                    className="text-sm font-semibold text-brand-700 inline-flex items-center gap-1 min-h-[44px] -my-3 hover:text-brand-800 transition-colors group/btn"
                  >
                    <span>Details</span>
                    <ChevronRight
                      aria-hidden="true"
                      className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
                    />
                  </button>

                  <button
                    id={`service-quick-book-${service.id}`}
                    onClick={onOpenBooking}
                    className="text-sm font-semibold text-copy min-h-[44px] -my-3 px-1 hover:text-ink transition-colors"
                  >
                    Book
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>

        {!isFullPage && (
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
            <button
              id="services-full-catalog-btn"
              onClick={() => onNavigate('services')}
              className="text-[15px] font-semibold text-brand-700 inline-flex min-h-[44px] items-center gap-1.5 hover:text-brand-800 transition-colors group"
            >
              <span>See all services</span>
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
            <button
              id="services-view-pricing-btn"
              onClick={() => onNavigate('pricing')}
              className="text-[15px] font-semibold text-copy inline-flex min-h-[44px] items-center hover:text-ink transition-colors"
            >
              Service pricing
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
