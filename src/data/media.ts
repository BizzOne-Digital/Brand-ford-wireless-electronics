/* --------------------------------------------------------------------------
   Media registry.

   Every photograph, video and promotional banner used on the site is declared
   here, once. Two reasons:

   1. The client replaces artwork by editing this file, not by hunting through
      components.
   2. Where a real photograph of the store's own work does not exist yet, the
      entry is a `placeholder`. MediaFrame renders those as a clearly labelled
      empty frame, so nobody ever ships a stock photo pretending to be this
      shop's work. Swap a placeholder for an `image` entry and the page picks
      it up with no other change.
   -------------------------------------------------------------------------- */

import {
  demoAccessories,
  demoAfter,
  demoAfterComputer,
  demoAfterWrap,
  demoBefore,
  demoBeforeWrap,
  demoBusiness,
  demoBuyBack,
  demoCamera,
  demoCameraViewing,
  demoConsoleRepair,
  demoElectronics,
  demoPhoneRepair,
  demoProduct,
  demoRepair,
  demoShowroom,
  demoSupport,
  demoTabletRepair,
  demoWrappingHero,
  demoWrappingProcess,
  demoWrappingRange,
  demoWrappingResult,
} from './demoMedia';
import pcBuildsBanner from '../Img/brandford1.jpeg';
import wrappingBanner from '../Img/brandford2.jpeg';
import workbenchPhoto from '../Img/brandford3.jpeg';

const wrappingCustomerPhoto: MediaRef = {
  kind: 'image',
  src: 'https://wrapnation.com.pk/cdn/shop/files/70f9c52aa2c86f85a8f730ee974f865d614ba468-1200x848_1170x.jpg?v=1769943673',
  alt: 'Custom device wrapping finish applied to a smartphone',
};

const wrappingBeforePhoto: MediaRef = {
  kind: 'image',
  src: 'https://cdn.mos.cms.futurecdn.net/dxKjW8pVyKJteCzGM9y72H-1280-80.jpg',
  alt: 'Device before custom wrapping',
};

const wrappingAfterPhoto: MediaRef = {
  kind: 'image',
  src: 'https://wrapnation.com.pk/cdn/shop/files/1_d9199215-b2f0-438f-9cb6-6e90828af419.png?v=1769861143',
  alt: 'Device after custom wrapping',
};

const phoneRepairToolsPhoto: MediaRef = {
  kind: 'image',
  src: 'https://www.prizminstitute.com/blog/wp-content/uploads/2025/12/mobile-phone-repairing-tools.jpg',
  alt: 'Mobile phone repair tools arranged for a repair service',
};

const phoneRepairBeforePhoto: MediaRef = {
  kind: 'image',
  src: 'https://i.redd.it/6o26u5fy42841.jpg',
  alt: 'Phone before repair',
};

const phoneRepairAfterPhoto: MediaRef = {
  kind: 'image',
  src: 'https://images.olx.com.pk/thumbnails/535428858-800x600.jpeg',
  alt: 'Phone after repair',
};

const computerRepairBeforePhoto: MediaRef = {
  kind: 'image',
  src: 'https://tse1.mm.bing.net/th/id/OIP.gnIglVGArQbNX9k6ybSwqQHaFF?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  alt: 'Computer repair technician working on a desktop computer',
};

const computerRepairGalleryPhoto: MediaRef = {
  kind: 'image',
  src: 'https://media.istockphoto.com/id/1454780871/photo/computer-repair-technician-repairing-a-laptop.jpg?s=170667a&w=0&k=20&c=Or0Kpc8AO4PcEpPTPVa70q0wfJVv69wJuLLVUTt1qlQ=',
  alt: 'Computer repair technician repairing a laptop',
};

const consoleRepairGalleryPhoto: MediaRef = {
  kind: 'image',
  src: 'https://tse2.mm.bing.net/th/id/OIP.g3QgvzE2N-v1AU4U1lLtSQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  alt: 'Gaming console repair example',
};

const consoleRepairBeforePhoto: MediaRef = {
  kind: 'image',
  src: 'https://tse2.mm.bing.net/th/id/OIP.xBK_NKVRxjXohIVuy4enrwHaHa?r=0&w=1400&h=1400&rs=1&pid=ImgDetMain&o=7&rm=3',
  alt: 'Gaming console before repair',
};

const consoleRepairAfterPhoto: MediaRef = {
  kind: 'image',
  src: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/PS5-DualSense-Controllers-vs-Xbox-Series-X.jpg',
  alt: 'Gaming controller after repair',
};

const tabletRepairGalleryAfterPhoto: MediaRef = {
  kind: 'image',
  src: 'https://tse1.mm.bing.net/th/id/OIP.blF5NMjHFZd4WVxOao9B_AHaFj?r=0&w=1024&h=768&rs=1&pid=ImgDetMain&o=7&rm=3',
  alt: 'Tablet after repair',
};

const tabletRepairBeforePhoto: MediaRef = {
  kind: 'image',
  src: 'https://tse4.mm.bing.net/th/id/OIP.dnlARSpTyRqHU7DAxP6qWAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  alt: 'Tablet before repair',
};

const tabletRepairAfterPhoto: MediaRef = {
  kind: 'image',
  src: 'https://cdn.mos.cms.futurecdn.net/sVCJUxy8wHnKtdF84yf2NK.jpg',
  alt: 'Tablet after repair result',
};

export type MediaRef =
  /** `focus` is an object-position utility, for artwork whose subject is off
      centre and would be cropped out of a narrow frame.
      `demo` marks temporary stand-in photography from `demoMedia.ts`, which
      MediaFrame stamps with a visible DEMO chip. Real assets omit it. */
  | { kind: 'image'; src: string; alt: string; focus?: string; demo?: boolean }
  | { kind: 'video'; src: string; poster?: string; label: string }
  | { kind: 'placeholder'; label: string; note?: string };

/** Store-supplied artwork. These are the client's own assets. */
export const STORE_MEDIA = {
  /** Designed promotional banner, 2048x768. Custom PC builds. */
  pcBuildsBanner,
  /** Designed promotional banner, 2048x768. Custom device wrapping. */
  wrappingBanner,
  /** In-store photograph: a technician opening a phone at the bench. */
  workbenchPhoto,
};

/**
 * Mobile cuts of the two wide store banners.
 *
 * The wide artwork is 2048x768 (8:3) and packed to all four edges, so on a
 * phone it can only ever be about 129px tall and cannot be cropped taller
 * without losing the logo and the corner text. A second cut at 4:3 or 1:1,
 * with the same content relaid out for a tall box, is the only way to a
 * full-size mobile banner.
 *
 * To switch them on:
 *   1. Drop the files in `src/Img/`.
 *   2. Add the two imports at the top of this file.
 *   3. Fill the two entries below.
 * Nothing else changes: `AdBanner` already swaps source and aspect ratio at
 * `lg` whenever a mobile entry exists, and falls back to the wide art when
 * it does not.
 */
export const STORE_MEDIA_MOBILE: {
  pcBuildsBanner?: string;
  wrappingBanner?: string;
} = {
  // pcBuildsBanner: pcBuildsBannerMobile,
  // wrappingBanner: wrappingBannerMobile,
};

export const WORKBENCH: MediaRef = {
  kind: 'image',
  src: workbenchPhoto,
  alt: 'Brantford Wireless technician opening a smartphone at the repair bench',
};

/* --------------------------------------------------------------------------
   Per-service media.

   `hero`    the first thing a visitor sees on the service page.
   `gallery` large supporting visuals, shown before any long explanation.
   `before` / `after` real customer work. Left as placeholders until the store
            supplies its own photographs; we do not stage or imply results.
   -------------------------------------------------------------------------- */

export interface ServiceMedia {
  hero: MediaRef;
  gallery: MediaRef[];
  before?: MediaRef;
  after?: MediaRef;
  /** One short line under the service page title. Replaces a paragraph. */
  tagline: string;
}

/**
 * A stand-in service hero. These are stock photographs, not this store's work,
 * so they carry `demo` for the same reason everything in `demoMedia.ts` does:
 * the rule the client can rely on while reviewing is that anything without a
 * DEMO chip came out of `src/Img` or `src/vid` and is genuinely theirs.
 */
const photo = (src: string, alt: string): MediaRef => ({
  kind: 'image',
  src,
  alt,
  demo: true,
});

/**
 * A frame with nothing behind it yet. Nothing in this file uses it while the
 * demo set is in place; it stays exported so a slot can be emptied back out
 * without rewriting the component that reads it.
 */
export const photoNeeded = (label: string, note?: string): MediaRef => ({
  kind: 'placeholder',
  label,
  note,
});

export const SERVICE_MEDIA: Record<string, ServiceMedia> = {
  'cell-phone-repair': {
    tagline: 'Screens, batteries and charging ports. Many done the same day.',
    hero: WORKBENCH,
    gallery: [
      phoneRepairToolsPhoto,
    ],
    before: phoneRepairBeforePhoto,
    after: phoneRepairAfterPhoto,
  },
  'computer-repairs': {
    tagline: 'Diagnosed first, quoted second. We say when it is not worth fixing.',
    hero: photo(
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1800&auto=format&fit=crop',
      'Laptop opened on a repair bench with tools beside it'
    ),
    gallery: [
      {
        kind: 'image',
        src: pcBuildsBanner,
        focus: 'object-right',
        alt: 'Custom PC builds by Brantford Wireless, for gaming, work, school and home',
      },
      computerRepairBeforePhoto,
      computerRepairGalleryPhoto,
    ],
    before: computerRepairBeforePhoto,
    after: demoAfterComputer,
  },
  'device-wrapping': {
    tagline: 'Same device. Bigger personality. Fitted in store.',
    /* A photograph, like every other service page. This page used to open
       with the designed banner and put its title underneath, which was the
       one service page that did not match the rest. The banner now sits in
       the gallery, where it is still shown whole. */
    hero: wrappingCustomerPhoto,
    gallery: [
      wrappingAfterPhoto,
      demoWrappingRange,
      {
        kind: 'image',
        src: wrappingBanner,
        alt: 'Custom device wrapping: phones, laptops, consoles and controllers in marble, carbon and abstract finishes',
      },
    ],
    before: wrappingBeforePhoto,
    after: wrappingAfterPhoto,
  },
  'security-cameras': {
    tagline: 'See your property from your phone, from anywhere.',
    hero: photo(
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1800&auto=format&fit=crop',
      'Security camera mounted on a building exterior'
    ),
    gallery: [
      demoCamera,
      demoBusiness,
      demoCameraViewing,
    ],
  },
  'gaming-console-repair': {
    tagline: 'HDMI ports, power faults and overheating. Assessed before any work.',
    hero: photo(
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1800&auto=format&fit=crop',
      'Games console and controller on a dark surface'
    ),
    gallery: [
      demoConsoleRepair,
      consoleRepairGalleryPhoto,
      consoleRepairBeforePhoto,
    ],
    before: consoleRepairBeforePhoto,
    after: consoleRepairAfterPhoto,
  },
  'tablet-repair': {
    tagline: 'Cracked glass does not always mean a new tablet.',
    hero: photo(
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1800&auto=format&fit=crop',
      'Tablet resting on a desk beside a keyboard'
    ),
    gallery: [
      demoTabletRepair,
      tabletRepairGalleryAfterPhoto,
      tabletRepairBeforePhoto,
    ],
    before: tabletRepairBeforePhoto,
    after: tabletRepairAfterPhoto,
  },
  'device-sales': {
    tagline: 'Phones, laptops, consoles and accessories. Stock changes weekly.',
    hero: photo(
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1800&auto=format&fit=crop',
      'Smartphones displayed on a bright surface'
    ),
    gallery: [
      demoShowroom,
      demoProduct,
      demoSupport,
    ],
  },
  'used-refurbished-phones': {
    tagline: 'An upgrade that fits your budget, set up before you leave.',
    hero: photo(
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1800&auto=format&fit=crop',
      'Pre-owned smartphone held in one hand'
    ),
    gallery: [
      demoBuyBack,
      demoSupport,
    ],
  },
  'we-buy-devices': {
    tagline: 'Working, damaged or broken. Bring it in for an offer.',
    hero: photo(
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1800&auto=format&fit=crop',
      'Used smartphone resting on a dark surface, ready for evaluation'
    ),
    gallery: [
      demoBuyBack,
      demoElectronics,
    ],
  },
  'business-tech-solutions': {
    tagline: 'One local supplier for the technology your business runs on.',
    hero: photo(
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop',
      'Computers and network equipment set up on a work surface'
    ),
    gallery: [
      demoBusiness,
      demoCamera,
    ],
  },
  'device-support': {
    tagline: 'Hands-on help with the technology you already own.',
    hero: photo(
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1800&auto=format&fit=crop',
      'Technician helping a customer with a phone at a service desk'
    ),
    gallery: [demoSupport, demoElectronics],
  },
  'accessories-peripherals': {
    tagline: 'Cases, glass, chargers, cables and audio. Fitted in store.',
    hero: photo(
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1800&auto=format&fit=crop',
      'Headphones and charging accessories arranged on a surface'
    ),
    gallery: [
      demoAccessories,
      demoProduct,
    ],
  },
};

/** Fallback so a newly added service never renders an empty page. */
export const DEFAULT_SERVICE_MEDIA: ServiceMedia = {
  tagline: 'Ask us in store or over the phone.',
  hero: demoRepair,
  gallery: [demoRepair],
};

export function getServiceMedia(serviceId: string): ServiceMedia {
  return SERVICE_MEDIA[serviceId] ?? DEFAULT_SERVICE_MEDIA;
}
