import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PageRoute } from '../types';
import { BUSINESS_INFO } from '../data/mockData';
import { Phone, Calendar } from 'lucide-react';
import heroVideo from '../vid/brat.mp4';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
  onOpenLeadModal?: () => void;
  onOpenLead?: () => void;
}

const HEADLINE = 'Premium technology. Expert service.';
const TYPE_SPEED_MS = 45;

/**
 * Reveals the headline one character at a time. Used on the home hero only:
 * it draws the eye to the value proposition on first load. Returns the full
 * length immediately when the visitor prefers reduced motion.
 */
function useTypedLength(text: string, enabled: boolean) {
  const [count, setCount] = useState(enabled ? 0 : text.length);

  useEffect(() => {
    if (!enabled) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) window.clearInterval(id);
    }, TYPE_SPEED_MS);
    return () => window.clearInterval(id);
  }, [text, enabled]);

  return count;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const reduceMotion = useReducedMotion();
  const typed = useTypedLength(HEADLINE, !reduceMotion);
  const isTyping = typed < HEADLINE.length;

  const rise = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="hero-section" className="relative isolate overflow-hidden bg-white">
      {/* Video backdrop. The scrim keeps the text readable over every frame. */}
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Keep the text side light while letting the video remain prominent. */}
        <div className="absolute inset-0 bg-white/30 lg:hidden" />
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white/75 via-white/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="shell relative z-10 pt-28 pb-14 lg:pt-32 lg:pb-24">
        <motion.div
          {...rise}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-xl lg:max-w-2xl"
        >
          <p className="eyebrow">Brantford &amp; surrounding communities</p>

          {/* The invisible copy reserves the final box so typing never shifts
              the layout, and the sr-only copy gives assistive tech the whole
              headline at once instead of one character at a time. */}
          <h1 className="relative mt-4 text-[2.1rem] leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-[3.4rem] lg:leading-[1.06] font-bold text-ink max-w-[15ch]">
            <span aria-hidden="true" className="invisible">
              {HEADLINE}
            </span>
            <span className="sr-only">{HEADLINE}</span>
            <span aria-hidden="true" className="absolute inset-0">
              {HEADLINE.slice(0, typed)}
              {isTyping && <span className="type-caret" />}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-ink font-medium leading-relaxed max-w-[48ch]">
            Phones, computers, accessories and reliable repairs, from a local team
            you can talk to in person.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              id="hero-book-btn"
              onClick={onOpenBooking}
              className="btn btn-primary"
            >
              <Calendar aria-hidden="true" className="w-4 h-4" />
              <span>Book a Service</span>
            </button>

            <a
              id="hero-call-btn"
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="btn btn-secondary"
            >
              <Phone aria-hidden="true" className="w-4 h-4" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
