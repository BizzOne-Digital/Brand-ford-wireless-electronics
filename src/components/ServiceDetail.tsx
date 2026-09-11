import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, Check, Phone } from 'lucide-react';
import { ServiceItem, PageRoute } from '../types';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/mockData';
import { getServiceMedia } from '../data/media';
import { MediaFrame } from './MediaFrame';
import { Gallery } from './Gallery';
import { BeforeAfter } from './BeforeAfter';

interface ServiceDetailProps {
  service: ServiceItem;
  onOpenService: (serviceId: string) => void;
  onNavigate: (route: PageRoute) => void;
  onBookService: (serviceId: string) => void;
}

/**
 * One service, told in pictures first.
 *
 * Order: large visual, one line of what it is, the work itself, what is
 * covered, gallery, before and after, related services, CTA. The long
 * description sits under the visuals, not above them, because a customer
 * decides from the photograph.
 */
export const ServiceDetail: React.FC<ServiceDetailProps> = ({
  service,
  onOpenService,
  onNavigate,
  onBookService,
}) => {
  const reduceMotion = useReducedMotion();
  const media = getServiceMedia(service.id);
  const related = SERVICES_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  const rise = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  const backLink = (onDark: boolean) => (
    <button
      type="button"
      onClick={() => onNavigate('services')}
      className={`inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold transition-colors ${
        onDark ? 'text-brand-200 hover:text-white' : 'text-brand-700 hover:text-brand-800'
      }`}
    >
      <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      <span>All services</span>
    </button>
  );

  const actions = (onDark: boolean) => (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        id={`service-book-${service.id}`}
        onClick={() => onBookService(service.id)}
        className="btn btn-primary"
      >
        <Calendar aria-hidden="true" className="h-4 w-4" />
        <span>Book this service</span>
      </button>
      <a
        href={`tel:${BUSINESS_INFO.phoneRaw}`}
        className={onDark ? 'btn btn-onink' : 'btn btn-secondary'}
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        <span>{BUSINESS_INFO.phone}</span>
      </a>
    </div>
  );

  return (
    <>
      {/* 1. Large visual. The artwork or photograph is the first thing here. */}
      {media.heroIsBanner ? (
        /* Designed artwork carries its own headline, so it runs whole and the
           page title sits beneath it rather than on top of it. */
        <section className="bg-white pt-20 lg:pt-24">
          <div className="shell">
            <MediaFrame
              media={media.hero}
              ratio="aspect-[8/3]"
              priority
              className="rounded-2xl border border-line sm:rounded-3xl"
            />

            <motion.div
              {...rise}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="max-w-2xl pt-7 pb-4 lg:pt-10"
            >
              {backLink(false)}

              <h1 className="mt-1 font-display text-[2rem] font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[3.2rem]">
                {service.title}
              </h1>

              <p className="mt-3 max-w-[42ch] text-base font-medium text-copy sm:text-lg">
                {media.tagline}
              </p>

              {actions(false)}
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="relative isolate">
          <MediaFrame
            media={media.hero}
            ratio="aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9]"
            priority
            className="min-h-[28rem] sm:min-h-0"
          />

          <span
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25 lg:bg-gradient-to-r lg:from-ink lg:via-ink/70 lg:to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0">
            <div className="shell pb-8 lg:pb-14">
              <motion.div
                {...rise}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="max-w-2xl"
              >
                {backLink(true)}

                <h1 className="mt-1 font-display text-[2rem] font-bold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
                  {service.title}
                </h1>

                <p className="mt-3 max-w-[42ch] text-base font-medium text-white/90 sm:text-lg">
                  {media.tagline}
                </p>

                {actions(true)}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* 2 + 3. One line of context, then the work itself, large. */}
      <section className="section bg-white">
        <div className="shell">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-[1.15] text-ink sm:text-3xl">
                {service.shortDesc}
              </h2>

              <ul className="mt-7 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-[15px] text-copy">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-sm leading-relaxed text-copy">{service.fullDesc}</p>
            </div>

            <div className="lg:col-span-7">
              <Gallery items={media.gallery} label={`${service.title} gallery`} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Before and after, where the work has a visible result. */}
      {media.before && media.after && (
        <section className="section bg-mist">
          <div className="shell">
            <div className="max-w-2xl">
              <p className="eyebrow">Before and after</p>
              <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl lg:text-[2.25rem]">
                Drag to see the difference
              </h2>
            </div>

            <BeforeAfter
              before={media.before}
              after={media.after}
              label={service.title}
              className="mt-8"
            />
          </div>
        </section>
      )}

      {/* 5. Where to go next. */}
      <section className="section bg-white">
        <div className="shell">
          <h2 className="text-xl font-bold text-ink sm:text-2xl">More from the store</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((item) => {
              const itemMedia = getServiceMedia(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onOpenService(item.id)}
                  className="group relative block overflow-hidden rounded-2xl border border-line text-left transition-colors hover:border-brand-300"
                >
                  <MediaFrame media={itemMedia.hero} ratio="aspect-[4/3]" zoomOnHover />
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/65 to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4">
                    <span className="font-display text-base font-bold leading-tight text-white">
                      {item.title}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-white transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
            <p className="text-base text-copy">
              Bring the device in, or book a time that suits you.
            </p>
            <button
              type="button"
              onClick={() => onBookService(service.id)}
              className="btn btn-primary group sm:ml-auto"
            >
              <span>Book {service.title}</span>
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
