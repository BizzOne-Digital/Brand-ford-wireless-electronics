import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Cpu, ShieldCheck, Store, Users } from 'lucide-react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { WORKBENCH } from '../data/media';
import { MediaFrame } from './MediaFrame';

interface AboutSectionProps {
  onNavigate?: (route: PageRoute) => void;
  onOpenBooking?: () => void;
}

const POINTS = [
  { icon: Store, title: 'One stop', body: 'Sales, repairs, wraps and cameras in one place.' },
  { icon: ShieldCheck, title: 'Reliable', body: 'Diagnosed and tested before it goes back to you.' },
  { icon: Cpu, title: 'Repair or replace', body: 'We say when a repair is not worth the money.' },
  { icon: Users, title: 'Local', body: 'A Brantford business, built on repeat customers.' },
];

/**
 * Who the store is, in a photograph and four short lines. The long version of
 * this ran to three paragraphs; the brief is that nobody reads them.
 */
export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenBooking }) => {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
      };

  return (
    <section id="about-brand-section" className="section bg-white">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            {...rise}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="overflow-hidden rounded-2xl border border-line">
              <MediaFrame media={WORKBENCH} ratio="aspect-[4/3]" />
            </div>
          </motion.div>

          <motion.div
            {...rise}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <p className="eyebrow">About the store</p>

            <h2 className="mt-3 text-2xl font-bold leading-[1.1] text-ink sm:text-3xl lg:text-[2.5rem]">
              One local store. More technology solutions.
            </h2>

            <p className="mt-4 max-w-[46ch] text-base leading-relaxed text-copy">
              Phones, computers, gaming systems, wraps and security cameras, all handled at{' '}
              {BUSINESS_INFO.addressFull}, instead of four separate trips.
            </p>

            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title}>
                    <Icon aria-hidden="true" className="h-5 w-5 text-brand-600" />
                    <h3 className="mt-2.5 text-base font-bold text-ink">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-copy">{point.body}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              {onOpenBooking && (
                <button
                  type="button"
                  id="about-book-btn"
                  onClick={onOpenBooking}
                  className="btn btn-primary"
                >
                  Mailed in Service
                </button>
              )}
              {onNavigate && (
                <button
                  type="button"
                  id="about-services-btn"
                  onClick={() => onNavigate('services')}
                  className="btn btn-secondary group"
                >
                  <span>See the work</span>
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
