import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';
import { PROMO_SLIDES } from '../data/mockData';

interface PromoBannerProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

const ROTATE_MS = 7000;

export const PromoBanner: React.FC<PromoBannerProps> = ({ onNavigate, onOpenBooking }) => {
  const slides = PROMO_SLIDES;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const regionRef = useRef<HTMLElement | null>(null);

  const count = slides.length;
  const hasControls = count > 1;

  const go = useCallback(
    (next: number) => setIndex(((next % count) + count) % count),
    [count]
  );

  // Gentle autoplay. Off entirely for reduced-motion users and while interacting.
  useEffect(() => {
    if (!hasControls || paused || reduceMotion) return;
    const timer = window.setTimeout(() => go(index + 1), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduceMotion, hasControls, go]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!hasControls) return;
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      go(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      go(index - 1);
    }
  };

  if (count === 0) return null;

  const slide = slides[index];
  const fade = reduceMotion ? {} : { opacity: 0, y: 8 };

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Store promotions"
      className="bg-white pt-5 pb-2 lg:pt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={handleKeyDown}
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-frost border border-brand-100">
          <div className="grid lg:grid-cols-[1.05fr_1fr] items-stretch">
            {/* Copy. min-height reserves space so slide changes never shift layout. */}
            <div className="order-2 lg:order-1 px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-14 flex flex-col justify-center min-h-[248px] sm:min-h-[268px] lg:min-h-[340px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={fade}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? {} : { opacity: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                >
                  <span className="inline-flex items-center rounded-full bg-white border border-brand-200 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">
                    {slide.badge}
                  </span>

                  <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2.6rem] lg:leading-[1.08] font-bold text-ink max-w-[18ch]">
                    {slide.headline}
                  </h2>

                  <p className="mt-3 text-[0.95rem] sm:text-base text-copy leading-relaxed max-w-[46ch]">
                    {slide.body}
                  </p>

                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        slide.ctaRoute === 'booking' ? onOpenBooking() : onNavigate(slide.ctaRoute)
                      }
                      className="btn btn-primary group"
                    >
                      {slide.ctaLabel}
                      <ArrowRight
                        aria-hidden="true"
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators. In flow on mobile so they never sit under the
                  CTA; pinned to the panel corner from lg up. */}
              {hasControls && (
                <div className="mt-6 flex items-center gap-1 lg:absolute lg:bottom-6 lg:left-12 lg:mt-0">
                  {slides.map((s, i) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Show promotion ${i + 1} of ${count}: ${s.headline}`}
                      aria-current={i === index ? 'true' : undefined}
                      className="h-11 w-9 flex items-center justify-center"
                    >
                      <span
                        className={`block h-1.5 rounded-full transition-all duration-300 ${
                          i === index ? 'w-6 bg-brand-600' : 'w-1.5 bg-brand-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product image. Fixed aspect on mobile, fills the cell on desktop. */}
            <div className="order-1 lg:order-2 relative bg-brand-100/60 aspect-[16/9] sm:aspect-[21/9] lg:aspect-auto lg:min-h-[340px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.imageAlt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  initial={reduceMotion ? {} : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? {} : { opacity: 0 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              {/* Softens the image edge into the panel on desktop only */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-frost to-transparent"
              />
            </div>
          </div>

          {hasControls && (
            <div className="absolute top-3 right-3 lg:top-6 lg:right-6 flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous promotion"
                className="h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-line text-ink flex items-center justify-center hover:bg-white hover:border-brand-300 transition-colors"
              >
                <ChevronLeft aria-hidden="true" className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next promotion"
                className="h-11 w-11 rounded-full bg-white/90 backdrop-blur border border-line text-ink flex items-center justify-center hover:bg-white hover:border-brand-300 transition-colors"
              >
                <ChevronRight aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Announces slide changes to screen readers without moving focus */}
        <p className="sr-only" aria-live="polite">
          {`Promotion ${index + 1} of ${count}: ${slide.headline}`}
        </p>
      </div>
    </section>
  );
};
