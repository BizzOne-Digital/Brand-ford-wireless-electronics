import React, { useId, useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { MediaRef } from '../data/media';
import { MediaFrame } from './MediaFrame';

interface BeforeAfterProps {
  before: MediaRef;
  after: MediaRef;
  /** Names what is being compared, for the slider's accessible label. */
  label: string;
  className?: string;
}

/**
 * Before and after comparison.
 *
 * The divider is a native range input stretched over the frame at zero opacity.
 * Dragging, tapping and the arrow keys all work with no custom pointer code,
 * and the control is announced correctly without extra ARIA. The visible
 * divider and handle are decorative and track its value.
 *
 * Below `sm` the two frames stack instead: a 40px sliver of a photograph on a
 * phone shows nothing, two full-width images show the work.
 */
export const BeforeAfter: React.FC<BeforeAfterProps> = ({
  before,
  after,
  label,
  className = '',
}) => {
  const [position, setPosition] = useState(50);
  const inputId = useId();

  return (
    <div className={className}>
      {/* Stacked pair. The only layout below sm. */}
      <div className="grid gap-3 sm:hidden">
        <figure className="relative overflow-hidden rounded-2xl border border-line">
          <MediaFrame media={before} ratio="aspect-[4/3]" />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
            Before
          </figcaption>
        </figure>
        <figure className="relative overflow-hidden rounded-2xl border border-line">
          <MediaFrame media={after} ratio="aspect-[4/3]" />
          <figcaption className="absolute bottom-3 left-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
            After
          </figcaption>
        </figure>
      </div>

      {/* Comparison slider, sm and up. The height is capped so a wide screen
          does not turn one comparison into a full page of image. */}
      <div className="relative hidden aspect-[16/9] max-h-[30rem] select-none overflow-hidden rounded-2xl border border-line has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600 sm:block">
        <MediaFrame media={after} className="!absolute !inset-0" />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <MediaFrame media={before} className="!absolute !inset-0" />
        </div>

        {/* Bottom corners, not top: MediaFrame stamps stand-in photography
            with a DEMO chip in the top-left, and the two collided there. */}
        <span className="pointer-events-none absolute bottom-4 left-4 rounded-full bg-ink/85 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
          Before
        </span>
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
          After
        </span>

        {/* Divider and handle. Decorative; the input below drives the value. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(10,27,51,0.25)]"
          style={{ left: `${position}%` }}
        >
          <span className="product-shadow absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-brand-700">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>

        <label htmlFor={inputId} className="sr-only">
          {`Slide to compare ${label} before and after`}
        </label>
        <input
          id={inputId}
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(position)}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-valuetext={`${Math.round(position)} percent before`}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>
    </div>
  );
};
