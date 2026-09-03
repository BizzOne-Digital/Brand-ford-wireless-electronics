import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const TYPE_SPEED_MS = 45;

function useTypedLength(text: string, enabled: boolean) {
  const [count, setCount] = useState(enabled ? 0 : text.length);

  useEffect(() => {
    if (!enabled) {
      setCount(text.length);
      return;
    }

    setCount(0);
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setCount(index);
      if (index >= text.length) window.clearInterval(id);
    }, TYPE_SPEED_MS);

    return () => window.clearInterval(id);
  }, [text, enabled]);

  return count;
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  /** Omit for a plain light band. The photo is decorative, so it carries alt="". */
  image?: string;
  children?: React.ReactNode;
}

/**
 * The top band of every interior page. It mirrors the home hero: photograph
 * behind a white scrim that keeps the copy on near-white, so contrast never
 * depends on which part of the image sits behind the text.
 *
 * This is the page's <h1>. Components rendered below it pass `hideHeader`
 * so the same title is not stated twice.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  image,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const typed = useTypedLength(title, !reduceMotion);
  const isTyping = typed < title.length;
  const rise = reduceMotion
    ? {}
    : { initial: { opacity: 0 }, animate: { opacity: 1 } };

  return (
    <section
      className={`relative isolate overflow-hidden ${image ? 'bg-white' : 'bg-frost'}`}
    >
      {image && (
        <div aria-hidden="true" className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-white/30 lg:hidden" />
          <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-white/75 via-white/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        </div>
      )}

      <div className="shell relative z-10 pt-28 pb-12 lg:pt-32 lg:pb-16">
        <motion.div
          {...rise}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-xl lg:max-w-2xl"
        >
          <h1 className="relative text-[1.9rem] leading-[1.12] sm:text-4xl sm:leading-[1.1] lg:text-[3rem] lg:leading-[1.08] font-bold text-ink max-w-[18ch]">
            <span aria-hidden="true" className="invisible">
              {title}
            </span>
            <span className="sr-only">{title}</span>
            <span aria-hidden="true" className="absolute inset-0">
              {title.slice(0, typed)}
              {isTyping && <span className="type-caret" />}
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-ink font-medium leading-relaxed max-w-[52ch]">
            {subtitle}
          </p>

          {children && <div className="mt-7 flex flex-col sm:flex-row gap-3">{children}</div>}
        </motion.div>
      </div>
    </section>
  );
};
