import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MediaFrame } from './MediaFrame';

interface PageHeroProps {
  title: string;
  subtitle: string;
  /** Omit for a plain light band. The photo is decorative, so it carries alt="". */
  image?: string;
  children?: React.ReactNode;
}

/**
 * The top band of every interior page, and the page's `<h1>`.
 *
 * It uses the same treatment as a service page banner: the photograph runs
 * full bleed, an ink gradient carries the copy, and the title sits on the
 * image in white. It is deliberately shorter than the service banner, since
 * an interior page is a signpost rather than the thing being sold.
 *
 * Any component rendered beneath it takes `hideHeader` so the same title is
 * never stated twice, which also keeps exactly one `h1` per page.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  title,
  subtitle,
  image,
  children,
}) => {
  const reduceMotion = useReducedMotion();
  const rise = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  /* No photograph: a plain frost band, still carrying the page title. */
  if (!image) {
    return (
      <section className="relative isolate overflow-hidden bg-frost">
        {/* The header sits in normal flow, so this band carries no offset
            for it. It was `pt-28` back when the header was fixed. */}
        <div className="shell relative z-10 py-12 lg:py-16">
          <motion.div
            {...rise}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-[1.9rem] font-bold leading-[1.08] text-ink sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            <p className="mt-3 max-w-[46ch] text-base font-medium leading-relaxed text-copy sm:text-lg">
              {subtitle}
            </p>
            {children && <div className="mt-6 flex flex-col gap-3 sm:flex-row">{children}</div>}
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative isolate">
      {/* Shorter than the service banner at every width: square on phones
          against its 4/5, 16/9 from sm, 3/1 from lg against its 21/9. An
          interior page is a signpost, so it should not open with a full
          screen of photograph before any content. */}
      <MediaFrame
        media={{ kind: 'image', src: image, alt: '' }}
        ratio="aspect-square sm:aspect-[16/9] lg:aspect-[3/1]"
        priority
        className="min-h-[18rem] sm:min-h-0"
      />

      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25 lg:bg-gradient-to-r lg:from-ink lg:via-ink/70 lg:to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="shell pb-7 lg:pb-11">
          <motion.div
            {...rise}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-display text-[1.9rem] font-bold leading-[1.08] text-white sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            <p className="mt-3 max-w-[46ch] text-base font-medium text-white/90 sm:text-lg">
              {subtitle}
            </p>

            {children && <div className="mt-6 flex flex-col gap-3 sm:flex-row">{children}</div>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
