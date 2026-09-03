import React from 'react';
import logoUrl from '../Logo/logo.png';

/**
 * The supplied logo is a transparent PNG whose monogram and wordmark contain
 * white and silver elements, so it disappears on the site's white surfaces.
 * Both variants below sit on a near-black plate so the full lockup stays legible.
 *
 * "mark"  is a circular badge cropped to the BW monogram, used in the header.
 * "full"  shows the complete lockup, for places with room such as the footer.
 *
 * The crop is expressed against the 500x500 source. The plate supplies its own
 * padding around a window sized exactly to the monogram, so no neighbouring
 * artwork (the wordmark below it) can leak into the frame.
 */

const SRC = 500;
const MARK = { x: 85, y: 24, w: 360, h: 216 };
const MARK_RATIO = MARK.w / MARK.h;

interface BrandLogoProps {
  variant?: 'mark' | 'full';
  /** Plate size in px. The "mark" variant is a circle of this diameter. */
  size?: number;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'mark',
  size = 40,
  className = '',
}) => {
  if (variant === 'full') {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-2xl bg-[#05070D] p-4 ${className}`}
      >
        <img
          src={logoUrl}
          alt="Brantford Wireless &amp; Electronics"
          style={{ width: size, height: size }}
          className="block object-contain"
        />
      </span>
    );
  }

  // Circular badge. The monogram is fitted by width and centred, so the plate
  // stays a true circle and nothing is clipped by the rounded edge.
  const pad = size * 0.085;
  const windowW = size - pad * 2;
  const windowH = windowW / MARK_RATIO;
  const imgSize = windowW / (MARK.w / SRC);

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-[#05070D] ring-1 ring-white/15 ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        className="relative block overflow-hidden"
        style={{ width: windowW, height: windowH }}
      >
        <img
          src={logoUrl}
          alt="Brantford Wireless &amp; Electronics"
          style={{
            position: 'absolute',
            width: imgSize,
            height: imgSize,
            maxWidth: 'none',
            left: -(MARK.x / SRC) * imgSize,
            top: -(MARK.y / SRC) * imgSize,
          }}
          className="block"
        />
      </span>
    </span>
  );
};
