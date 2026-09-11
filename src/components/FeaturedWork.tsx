import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STORE_FILM, WORKBENCH } from '../data/media';
import { MediaFrame } from './MediaFrame';

interface FeaturedWorkProps {
  onOpenService: (serviceId: string) => void;
  onNavigate: (route: 'about' | 'contact' | 'products' | 'services') => void;
}

/**
 * The store itself, at full size.
 *
 * An editorial pair rather than a card row: one tall photograph of the bench,
 * one short loop of the shop, and three words of copy between them. This is
 * the section that answers "what does this place actually look like".
 */
export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpenService, onNavigate }) => {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
      };

  return (
    <section id="featured-work-section" className="section bg-mist">
      <div className="shell">
        <div className="grid items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <motion.div {...rise} transition={{ duration: 0.45, ease: 'easeOut' }} className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
              Inside the store
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
              Real benches. Real technicians. On King Street.
            </h2>
            <p className="mt-4 max-w-[38ch] text-base leading-relaxed text-copy">
              Every repair is done here, in front of you if you want to watch.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => onOpenService('cell-phone-repair')}
                className="btn btn-primary group"
              >
                <span>See phone repair</span>
                <ArrowRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="btn btn-secondary"
              >
                About the store
              </button>
            </div>
          </motion.div>

          <motion.div
            {...rise}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="grid gap-4 sm:grid-cols-5">
              <button
                type="button"
                onClick={() => onOpenService('cell-phone-repair')}
                aria-label="Phone repair: see the service"
                className="group relative block overflow-hidden rounded-2xl sm:col-span-3"
              >
                <MediaFrame media={WORKBENCH} ratio="aspect-[4/5] sm:aspect-[3/4]" zoomOnHover />
              </button>

              <div className="relative overflow-hidden rounded-2xl sm:col-span-2">
                <MediaFrame media={STORE_FILM} ratio="aspect-[4/3] sm:aspect-[3/4]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
