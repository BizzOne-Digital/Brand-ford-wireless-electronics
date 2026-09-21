import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MediaFrame } from './MediaFrame';
import { MediaRef } from '../data/media';

interface AdBannerProps {
  media: MediaRef;
  /** Short label on the action bar. Says where the banner goes. */
  action: string;
  /** One supporting line under the label. The wide artwork is 2048x768 and
      dense to all four edges, so its frame cannot be made taller without
      cropping the logo and the corner text: the card gains its height here
      instead. */
  note?: string;
  /** A 4:3 cut of the same artwork, used below `lg`. When supplied the frame
      goes `aspect-[4/3] lg:aspect-[8/3]` and a `<picture>` serves the wide
      file only to desktop, so a phone never downloads the one it cannot use.
      Omit it and the wide art runs at every width. See `STORE_MEDIA_MOBILE`. */
  mobileSrc?: string;
  onActivate: () => void;
  /** Full-bleed edge to edge, or inside the content column. */
  bleed?: boolean;
  className?: string;
}

/**
 * A promotional banner built from the store's own designed artwork.
 *
 * The artwork already carries its headline and offer, so nothing is overlaid
 * on it. The slim bar underneath states the destination, gives the banner a
 * readable action at phone widths where the baked-in type is small, and makes
 * the whole banner unmistakably clickable.
 */
export const AdBanner: React.FC<AdBannerProps> = ({
  media,
  action,
  note,
  mobileSrc,
  onActivate,
  bleed = false,
  className = '',
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={className}
    >
      <button
        type="button"
        onClick={onActivate}
        className={`group block w-full overflow-hidden border border-line bg-white text-left transition-colors hover:border-brand-300 ${
          bleed ? 'rounded-none border-x-0' : 'rounded-2xl sm:rounded-3xl'
        }`}
      >
        {mobileSrc && media.kind === 'image' ? (
          <span
            className={`relative block overflow-hidden bg-mist aspect-[4/3] lg:aspect-[8/3] ${
              bleed ? '' : 'rounded-none'
            }`}
          >
            <picture>
              <source media="(min-width: 1024px)" srcSet={media.src} />
              <img
                src={mobileSrc}
                alt={media.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </picture>
          </span>
        ) : (
          <MediaFrame
            media={media}
            ratio="aspect-[8/3]"
            zoomOnHover
            className={bleed ? '' : 'rounded-none'}
          />
        )}

        <span className="flex min-h-[76px] items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
          <span className="min-w-0">
            <span className="block text-[15px] font-bold text-ink sm:text-base">{action}</span>
            {note && (
              <span className="mt-1.5 block text-[13px] leading-snug text-copy sm:text-sm">
                {note}
              </span>
            )}
          </span>
          <span className="flex shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-700">
            <span className="hidden sm:inline">View</span>
            <ArrowRight
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </span>
      </button>
    </motion.div>
  );
};
