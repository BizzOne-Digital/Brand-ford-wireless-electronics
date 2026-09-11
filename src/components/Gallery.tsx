import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { MediaRef } from '../data/media';
import { MediaFrame } from './MediaFrame';
import { Modal } from './Modal';

interface GalleryProps {
  items: MediaRef[];
  /** Names the set, used for the enlarged view's accessible title. */
  label: string;
  className?: string;
}

function captionOf(media: MediaRef): string {
  if (media.kind === 'image') return media.alt;
  if (media.kind === 'video') return media.label;
  return media.label;
}

/**
 * Large visual gallery. The first frame is wide and the rest follow beneath it,
 * so a set reads as photography rather than as a row of equal thumbnails.
 * Any frame opens full size in the site's modal.
 */
export const Gallery: React.FC<GalleryProps> = ({ items, label, className = '' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  if (items.length === 0) return null;

  const [lead, ...rest] = items;

  return (
    <div className={className}>
      <GalleryFrame
        media={lead}
        ratio="aspect-[16/9]"
        index={0}
        reduceMotion={Boolean(reduceMotion)}
        onOpen={() => setOpenIndex(0)}
      />

      {rest.length > 0 && (
        <div
          className={`mt-4 grid gap-4 ${
            rest.length === 1 ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {rest.map((media, i) => (
            <GalleryFrame
              key={`${captionOf(media)}-${i}`}
              media={media}
              ratio="aspect-[4/3]"
              index={i + 1}
              reduceMotion={Boolean(reduceMotion)}
              onOpen={() => setOpenIndex(i + 1)}
            />
          ))}
        </div>
      )}

      <Modal
        isOpen={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        title={openIndex !== null ? captionOf(items[openIndex]) : label}
        hideTitle
        size="lg"
      >
        {openIndex !== null && (
          <figure className="p-3 sm:p-4">
            <MediaFrame
              media={items[openIndex]}
              ratio="aspect-[16/10]"
              priority
              contain={items[openIndex].kind === 'image'}
              className="rounded-xl bg-ink/5"
            />
            <figcaption className="px-1 pt-3 text-sm text-copy">
              {captionOf(items[openIndex])}
            </figcaption>
          </figure>
        )}
      </Modal>
    </div>
  );
};

const GalleryFrame: React.FC<{
  media: MediaRef;
  ratio: string;
  index: number;
  reduceMotion: boolean;
  onOpen: () => void;
}> = ({ media, ratio, index, reduceMotion, onOpen }) => (
  <motion.button
    type="button"
    onClick={onOpen}
    initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.4, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
    aria-label={`Enlarge: ${captionOf(media)}`}
    className="group relative block w-full overflow-hidden rounded-2xl border border-line transition-colors hover:border-brand-300"
  >
    <MediaFrame media={media} ratio={ratio} zoomOnHover />
    <span
      aria-hidden="true"
      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
    >
      <Maximize2 className="h-4 w-4" />
    </span>
  </motion.button>
);
