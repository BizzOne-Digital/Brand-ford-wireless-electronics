import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { MediaFrame } from './MediaFrame';
import { MediaRef } from '../data/media';

interface AdBannerProps {
  media: MediaRef;
  /** Short label on the action bar. Says where the banner goes. */
  action: string;
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
        <MediaFrame
          media={media}
          ratio="aspect-[8/3]"
          zoomOnHover
          className={bleed ? '' : 'rounded-none'}
        />

        <span className="flex min-h-[56px] items-center justify-between gap-3 px-4 py-3 sm:px-6">
          <span className="text-sm font-bold text-ink sm:text-base">{action}</span>
          <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-700">
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
