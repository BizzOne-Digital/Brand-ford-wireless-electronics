import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/mockData';
import { getServiceMedia } from '../data/media';
import { ServiceItem } from '../types';
import { MediaFrame } from './MediaFrame';

interface ServicesOverviewProps {
  /** Suppress the in-section title when a PageHero already states it. */
  hideHeader?: boolean;
  /** The services page shows every service; the homepage shows the lead five. */
  isFullPage?: boolean;
  /** Opens that service's own page. */
  onOpenService: (serviceId: string) => void;
  onSeeAll?: () => void;
}

/** The five the store leads with. Order is deliberate, not the data order. */
const HOME_ORDER = [
  'cell-phone-repair',
  'device-wrapping',
  'computer-repairs',
  'security-cameras',
  'gaming-console-repair',
];

/**
 * Services as photography, not paragraphs. Each tile is one image, one title
 * and one line. A visitor should know what a service is before reading it, and
 * the whole tile is the link to that service's page.
 */
export const ServicesOverview: React.FC<ServicesOverviewProps> = ({
  hideHeader = false,
  isFullPage = false,
  onOpenService,
  onSeeAll,
}) => {
  const services = isFullPage
    ? SERVICES_DATA
    : (HOME_ORDER.map((id) => SERVICES_DATA.find((s) => s.id === id)).filter(
        (s): s is ServiceItem => Boolean(s)
      ));

  return (
    <section id="services-overview-section" className="section bg-white">
      <div className="shell">
        {!hideHeader && (
          <div className="max-w-2xl">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.5rem] lg:leading-[1.1]">
              Everything tech, under one roof
            </h2>
          </div>
        )}

        {/* The services page runs two across so each photograph is roughly
            620px wide rather than 400px. The homepage keeps three, because it
            is a summary of five and sits above a long page. */}
        <div
          className={`${hideHeader ? '' : 'mt-8 lg:mt-12'} grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 ${
            isFullPage ? 'lg:grid-cols-2' : 'lg:grid-cols-3 lg:gap-5'
          }`}
        >
          {services.map((service, index) => (
            <ServiceTile
              key={service.id}
              service={service}
              index={index}
              /* The lead tile runs full width so the grid is not twelve
                 identical rectangles. */
              wide={index === 0}
              large={isFullPage}
              onOpen={() => onOpenService(service.id)}
            />
          ))}
        </div>

        {!isFullPage && onSeeAll && (
          <div className="mt-8">
            <button
              type="button"
              id="services-see-all-btn"
              onClick={onSeeAll}
              className="btn btn-secondary group"
            >
              <span>All services</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ServiceTile: React.FC<{
  service: ServiceItem;
  index: number;
  wide: boolean;
  large: boolean;
  onOpen: () => void;
}> = ({ service, index, wide, large, onOpen }) => {
  const reduceMotion = useReducedMotion();
  const media = getServiceMedia(service.id);

  return (
    <motion.button
      type="button"
      id={`service-tile-${service.id}`}
      onClick={onOpen}
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
      className={`group relative block overflow-hidden rounded-2xl border border-line text-left transition-colors hover:border-brand-300 ${
        wide ? (large ? 'col-span-2' : 'col-span-2 lg:col-span-3') : ''
      }`}
    >
      <MediaFrame
        media={media.hero}
        ratio={
          wide
            ? 'aspect-[16/10] sm:aspect-[21/9]'
            : large
              ? 'aspect-square sm:aspect-[3/2]'
              : 'aspect-square sm:aspect-[4/3]'
        }
        zoomOnHover
        priority={index === 0}
      />

      {/* Scrim. It exists so the title clears contrast over any frame of the
          photograph, not as decoration. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-ink via-ink/70 to-transparent"
      />

      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:gap-4 sm:p-5">
        <span className="min-w-0">
          {service.badge && (
            <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-brand-300">
              {service.badge}
            </span>
          )}
          <span
            className={`mt-1 block font-display font-bold leading-tight text-white ${
              wide
                ? 'text-xl sm:text-2xl lg:text-3xl'
                : large
                  ? 'text-[15px] sm:text-xl md:text-2xl'
                  : 'text-[15px] sm:text-lg'
            }`}
          >
            {service.title}
          </span>
          <span
            className={`mt-1 leading-snug text-white/85 ${
              wide ? 'block text-sm' : 'hidden text-[13px] sm:block sm:text-sm'
            }`}
          >
            {media.tagline}
          </span>

          {/* Says where the tile goes. An arrow glyph alone left the tile
              looking decorative rather than like the link it is. */}
          <span className="mt-3 hidden items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white sm:inline-flex">
            <span>View service</span>
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </span>

        <span
          aria-hidden="true"
          className={`h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 group-hover:translate-x-0.5 sm:hidden ${
            wide ? 'flex' : 'hidden'
          }`}
        >
          <ArrowRight className="h-4 w-4" />
        </span>
      </span>
    </motion.button>
  );
};
