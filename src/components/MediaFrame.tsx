import React from 'react';
import { ImagePlus, Play } from 'lucide-react';
import { MediaRef } from '../data/media';

interface MediaFrameProps {
  media: MediaRef;
  /** Tailwind aspect utility, e.g. "aspect-[4/3]". Omit to fill the parent. */
  ratio?: string;
  className?: string;
  /** First image on a page. Loads eagerly and skips lazy decoding. */
  priority?: boolean;
  /** Scale the image slightly on hover of the nearest `.group` ancestor. */
  zoomOnHover?: boolean;
  /** Position the subject, e.g. "object-top". Overrides the asset's own
      `focus`; both default to centre. */
  objectPosition?: string;
  /** Fit the whole frame in view rather than cropping it. For designed banners. */
  contain?: boolean;
}

/**
 * One frame for every photograph, video and missing photograph on the site.
 *
 * A `placeholder` entry renders a labelled empty frame rather than a stock
 * photo. That is deliberate: the store's before/after and process shots are
 * its own work, and a filler image would misrepresent it. Replace the entry in
 * `src/data/media.ts` and the frame fills itself in.
 */
export const MediaFrame: React.FC<MediaFrameProps> = ({
  media,
  ratio,
  className = '',
  priority = false,
  zoomOnHover = false,
  objectPosition,
  contain = false,
}) => {
  const frame = `relative overflow-hidden bg-mist ${ratio ?? 'h-full w-full'} ${className}`;
  const fit = contain ? 'object-contain' : 'object-cover';
  const zoom = zoomOnHover
    ? 'transition-transform duration-700 ease-out group-hover:scale-[1.04]'
    : '';

  if (media.kind === 'image') {
    const position = objectPosition ?? media.focus ?? 'object-center';
    return (
      <div className={frame}>
        <img
          src={media.src}
          alt={media.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          className={`absolute inset-0 h-full w-full ${fit} ${position} ${zoom}`}
        />
      </div>
    );
  }

  if (media.kind === 'video') {
    return (
      <div className={frame}>
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
          aria-label={media.label}
          className={`absolute inset-0 h-full w-full ${fit} ${objectPosition ?? 'object-center'}`}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <div
      className={`${frame} border border-dashed border-brand-200 bg-frost`}
      role="img"
      aria-label={`Photograph to be supplied: ${media.label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <ImagePlus aria-hidden="true" className="h-6 w-6 text-brand-400" />
        <p className="text-[13px] font-semibold text-ink">{media.label}</p>
        {media.note && <p className="text-xs text-faint">{media.note} to be added</p>}
      </div>
    </div>
  );
};

/** Small play affordance laid over a video frame. Decorative only. */
export const PlayGlyph: React.FC<{ className?: string }> = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`pointer-events-none flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink ${className}`}
  >
    <Play className="ml-0.5 h-5 w-5 fill-current" />
  </span>
);
