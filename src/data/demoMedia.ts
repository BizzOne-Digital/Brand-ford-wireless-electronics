/* --------------------------------------------------------------------------
   TEMPORARY DEMO MEDIA.

   Every asset in this file is stand-in photography used to preview layout,
   image sizing and visual flow while the store collects its own photographs
   and video. None of it shows this store, its staff, its customers or its
   work.

   Each entry carries `demo: true`, which makes `MediaFrame` stamp a visible
   "DEMO" chip on the frame. Nothing here can be mistaken for verified work.

   HOW TO HAND OVER TO REAL ASSETS
   -------------------------------
   1. Drop the real file into `src/Img/` (or `src/vid/`) and import it here.
   2. Point the matching `demo*` export at it and drop `demo: true`.
   3. Nothing else changes: `src/data/media.ts` and every component read these
      exports by name, so no page or component needs editing.

   To check what is still stand-in, search this file for `demo: true`, or look
   for the DEMO chips in the running site.
   -------------------------------------------------------------------------- */

import type { MediaRef } from './media';

/** Marks an asset as stand-in. MediaFrame reads this to stamp the frame. */
const demo = (src: string, alt: string, focus?: string): MediaRef => ({
  kind: 'image',
  src,
  alt,
  focus,
  demo: true,
});

/**
 * Source photographs. Kept in one list so a repeated frame is obvious and a
 * replacement only has to be made once.
 */
const SRC = {
  phoneTeardown: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?q=80&w=1800&auto=format&fit=crop',
  benchTools: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1800&auto=format&fit=crop',
  laptopOpen: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1800&auto=format&fit=crop',
  laptopDesk: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1800&auto=format&fit=crop',
  texturedPhone: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1800&auto=format&fit=crop',
  phonesBright: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1800&auto=format&fit=crop',
  phoneInHand: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1800&auto=format&fit=crop',
  phoneDark: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=1800&auto=format&fit=crop',
  securityCamera: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1800&auto=format&fit=crop',
  console: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=1800&auto=format&fit=crop',
  tablet: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1800&auto=format&fit=crop',
  businessTech: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1800&auto=format&fit=crop',
  supportDesk: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1800&auto=format&fit=crop',
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1800&auto=format&fit=crop',
  accessoriesFlatlay: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1800&auto=format&fit=crop',
  electronicsDesk: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1800&auto=format&fit=crop',
  workspace: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1800&auto=format&fit=crop',
  deskPhone: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=1800&auto=format&fit=crop',

  /* Product photography, one per shelf. Every URL below was opened and looked
     at before it was added: several plausible-looking Unsplash ids turned out
     to be a bowl of noodles, a Ferrari and a terminal window. */
  cameraInstall: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=1800&auto=format&fit=crop',
  dashCam: 'https://images.unsplash.com/photo-1553260188-75a8d6205b6c?q=80&w=1800&auto=format&fit=crop',
  smartHome: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1800&auto=format&fit=crop',
  keyboardWhite: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?q=80&w=1800&auto=format&fit=crop',
  mouse: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1800&auto=format&fit=crop',
  gamepad: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?q=80&w=1800&auto=format&fit=crop',
  earbuds: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?q=80&w=1800&auto=format&fit=crop',
  phoneOnDesk: 'https://images.unsplash.com/photo-1512054502232-10a0a035d672?q=80&w=1800&auto=format&fit=crop',
  phoneWithKeyboard: 'https://images.unsplash.com/photo-1546027658-7aa750153465?q=80&w=1800&auto=format&fit=crop',
  charger: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1800&auto=format&fit=crop',
  laptopAngled: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1800&auto=format&fit=crop',
  desktopSetup: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=1800&auto=format&fit=crop',
};

/**
 * The same stand-in photographs as raw URLs, for the two places that store a
 * plain `image: string` rather than a `MediaRef`: product records and promo
 * slides. Those carry their own `isDemo` flag for the DEMO chip.
 */
export const DEMO_IMAGE = SRC;

/* -- Wrapping ------------------------------------------------------------ */

export const demoWrappingHero = demo(
  SRC.texturedPhone,
  'a smartphone in a coloured, textured finish'
);

export const demoWrappingProcess = demo(
  SRC.benchTools,
  'a device being worked on at a bench'
);

export const demoWrappingResult = demo(
  SRC.phoneDark,
  'a finished device on a dark surface'
);

export const demoWrappingRange = demo(
  SRC.phonesBright,
  'several devices side by side'
);

/* -- Repair -------------------------------------------------------------- */

export const demoPhoneRepair = demo(
  SRC.phoneTeardown,
  'a smartphone opened for screen replacement'
);

export const demoRepair = demo(
  SRC.benchTools,
  'a technician working on a device at a repair bench'
);

export const demoComputerRepair = demo(
  SRC.laptopOpen,
  'a laptop opened on a repair bench'
);

export const demoComputerResult = demo(
  SRC.laptopDesk,
  'a laptop set up and running on a desk'
);

export const demoConsoleRepair = demo(
  SRC.console,
  'a games console and controller'
);

export const demoTabletRepair = demo(
  SRC.tablet,
  'a tablet on a desk'
);

/* -- Cameras, business, support ------------------------------------------ */

export const demoCamera = demo(
  SRC.securityCamera,
  'a security camera mounted outdoors'
);

export const demoCameraViewing = demo(
  SRC.deskPhone,
  'a desk setup'
);

export const demoBusiness = demo(
  SRC.businessTech,
  'computers and network equipment on a work surface'
);

export const demoSupport = demo(
  SRC.supportDesk,
  'a service desk with a device being set up'
);

/* -- Sales, buy back, product -------------------------------------------- */

export const demoBuyBack = demo(
  SRC.phoneInHand,
  'a pre-owned phone held in one hand'
);

export const demoShowroom = demo(
  SRC.workspace,
  'devices and accessories arranged on a surface'
);

export const demoProduct = demo(
  SRC.accessoriesFlatlay,
  'electronics and accessories arranged flat'
);

export const demoAccessories = demo(
  SRC.headphones,
  'headphones and charging accessories'
);

export const demoElectronics = demo(
  SRC.electronicsDesk,
  'electronics on a desk'
);

/* -- Before and after ----------------------------------------------------
   Two unrelated stand-in photographs shown side by side to exercise the
   comparison slider. They are not the same device and are not a result.
   ------------------------------------------------------------------------ */

export const demoBefore = demo(
  SRC.phoneTeardown,
  'A device before work'
);

export const demoAfter = demo(
  SRC.phonesBright,
  'A device after work'
);

export const demoBeforeComputer = demo(
  SRC.laptopOpen,
  'A computer before work'
);

export const demoAfterComputer = demo(
  SRC.laptopDesk,
  'A computer after work'
);

export const demoBeforeWrap = demo(
  SRC.phoneInHand,
  'A device before wrapping'
);

export const demoAfterWrap = demo(
  SRC.texturedPhone,
  'A device after wrapping'
);

export const demoBeforeTablet = demo(
  SRC.tablet,
  'A tablet before work'
);

export const demoAfterTablet = demo(
  SRC.electronicsDesk,
  'A tablet after work'
);

/* -- Team ----------------------------------------------------------------
   Deliberately not portraits. A stand-in headshot of an unrelated person on a
   real shop's team page reads as that shop's staff, which is exactly the kind
   of thing the client must not ship by accident. These show the workspace
   instead, and carry the DEMO chip.
   ------------------------------------------------------------------------ */

export const demoTeam = demo(
  SRC.workspace,
  'a technology workspace'
);

export const demoTeamAlt = demo(
  SRC.supportDesk,
  'a service desk'
);
