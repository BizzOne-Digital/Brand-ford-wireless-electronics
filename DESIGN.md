# DESIGN.md

> Brantford Wireless & Electronics: a bright, blue and white technology store. White is the room, blue is the signage, and the products are the only things allowed to shout.

**Status:** Authoritative. This file describes the project's *existing, shipped* visual identity. Any UI work in this repository must conform to it. Changing this file is a deliberate brand decision and requires explicit user approval.

**Format reference:** [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md) · [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/)

**Revision note:** The site previously ran a dark "midnight showroom" theme. In the current revision the client asked for a brighter, blue and white identity and a shorter homepage. The blue accent and the Space Grotesk / Plus Jakarta Sans pairing carry over from that design; the surfaces inverted from near-black to white.

---

## 1. Visual Theme & Atmosphere

**Style:** Bright premium retail technology
**Keywords:** white, daylight, blue, precise, trustworthy, local, product-first, uncluttered
**Tone:** Confident and helpful — NOT dark tech, NOT cyberpunk, NOT startup-generic, NOT consumer-cheap
**Feel:** A clean, well-lit shop floor. The walls are white, the signage is blue, the products carry the colour.

**Business context:** Local Brantford retail and repair. The audience is walk-in customers and phone enquiries, not developers. Every screen must make **calling, booking, and finding the store** easy. Visual polish exists to build trust in a local business; it never competes with the conversion path.

**Interaction Tier:** L2 — fluid interaction. Scroll-reveal and hover states, no scroll hijacking.
**Motion dependency:** `motion` (Framer Motion v12, imported as `motion/react`). Do not add GSAP, Lenis, or a second animation library.

---

## 2. Color Palette & Roles

The palette is defined once, in `@theme` in `src/index.css`, and used only through the generated utilities (`bg-brand-600`, `text-ink`, `border-line`). Do not hand-write hex values in components.

```css
/* Brand blue: one controlled ramp, no ad-hoc blues */
--color-brand-50:  #F0F6FF;   /* tint behind icons, active nav */
--color-brand-100: #DDEAFE;
--color-brand-200: #BFD8FD;   /* borders on light blue surfaces */
--color-brand-300: #93BDFA;   /* inactive carousel dots */
--color-brand-400: #5E9AF6;
--color-brand-500: #3B82F6;
--color-brand-600: #1D6AE5;   /* primary action fill, icons */
--color-brand-700: #1553BE;   /* links and brand text on light */
--color-brand-800: #133F8F;   /* link hover */
--color-brand-900: #102F66;

/* Neutrals: cool and blue-leaning, never warm grey */
--color-ink:   #0A1B33;  /* headings, and the footer band */
--color-copy:  #4A5C74;  /* body text */
--color-faint: #5A6B80;  /* labels, meta, fine print */
--color-line:  #E4EAF3;  /* hairline borders */
--color-mist:  #F5F8FC;  /* soft grey surface */
--color-frost: #ECF3FF;  /* light blue surface */
```

**Surface rhythm.** Sections alternate `white` → `mist` → `frost`. The colour change is the divider; sections do not need top borders. The homepage runs photographic hero under a white scrim -> white (promotions) -> white (services) -> frost (showroom) -> white (testimonials) -> mist (contact) -> ink (footer). The hero leads and the promotional banner sits directly beneath it.

**Color rules**
- **One accent only.** Blue. Never introduce purple, teal, pink, or a second brand hue.
- **`brand-600` is a fill, `brand-700` is text.** `brand-600` as text on `frost` measures 4.44:1 and fails AA. Use `brand-700` (6.25:1 on frost) for any blue text or link.
- **Dark is chrome and the footer, never a page section.** The fixed header is `bg-ink/90` with `backdrop-blur-xl`; the footer is solid `bg-ink`. Both frame the page rather than interrupt it. No content section inverts.
- Emerald and amber are **semantic** only: emerald means verified or confirmed, amber means a star rating. Never decorative.
- Gradients are effectively banned. The exceptions are all scrims over photography, not decoration: the 96px edge fade on the promotional banner image at `lg` and up, and the white wash used by the home hero and every `PageHero` image.
- Every text colour in the palette passes WCAG AA on white, mist and frost. If you introduce a new colour, verify it before shipping.

---

## 3. Typography

**Loaded in `index.html` via Google Fonts. Do not add a third family.**

| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | Space Grotesk | `text-[2.1rem]` → `lg:text-[3.4rem]` | 700 | `-0.025em` |
| Section H2 | Space Grotesk | `text-2xl` → `lg:text-[2.5rem]` | 700 | `-0.025em` |
| Banner H2 | Space Grotesk | `text-2xl` → `lg:text-[2.6rem]` | 700 | `-0.025em` |
| Card title | Space Grotesk | `text-base` / `text-lg` | 700 | `-0.025em` |
| Body | Plus Jakarta Sans | `text-base` / `text-lg` | 400 | normal |
| Supporting | Plus Jakarta Sans | `text-sm` | 400 | normal |
| Eyebrow (`.eyebrow`) | Plus Jakarta Sans | `text-xs` | 700 | `0.12em`, uppercase |
| Button (`.btn`) | Plus Jakarta Sans | `text-[0.9375rem]` | 600 | normal |

**Typography rules**
- `h1`-`h4` inherit Space Grotesk and `color: var(--color-ink)` from `src/index.css`. Do not restate them.
- Negative tracking on display type is part of the brand. Keep it.
- **Never use an em dash in UI copy.** Use a comma, a period, or restructure the sentence.
- Headline widths are capped in characters (`max-w-[15ch]`, `max-w-[18ch]`) so they break where intended rather than filling the column.
- Body measure is capped at `max-w-[46ch]` to `max-w-[52ch]`.
- Section headers are a plain vertical stack: H2, then one supporting line. No eyebrow above every section, no headline-left/paragraph-right split.
- Eyebrows are rationed. At most one per two or three sections; the homepage uses exactly one, in the hero.

---

## 4. Layout & Spacing

- **Content container:** `.shell` — `max-w-7xl` (1280px) with `px-4 / sm:px-6 / lg:px-8`.
- **Header container:** `.shell-wide` — `max-w-[90rem]` (1440px). The header is deliberately wider than the content column so the eight-item nav keeps real gaps at every desktop width.
- **Section rhythm:** `.section` — `padding-block: 3.5rem`, `5.5rem` from `lg`.
- **Header offset:** the header is a single `h-16` (64px) row at every width, and `<main>` clears it once with `pt-16` in `App.tsx`. These two must stay in step. Sections must not add their own top offset.
- **Spacing scale:** Tailwind's 4px scale. Use `2 / 3 / 4 / 5 / 6 / 8 / 10 / 12`. Do not introduce arbitrary pixel gaps.
- **Grid:** 1 column mobile → 2 tablet → 4 desktop for card rows; 3 across for testimonials.
- **Fixed chrome:** the header (`z-40`) and `MobileQuickBar` (`z-40`, `lg:hidden`). `<main>` carries `pb-20 lg:pb-0` so the quick bar never covers content.

---

## 5. Components

Defined once in `src/index.css`. Reach for these before writing new classes.

**`.card`** — white, 1px `line` border, `rounded-2xl`, no shadow at rest. Add `.card-interactive` for the hover state: border shifts to `brand-200`, a soft shadow appears, and the card lifts 2px. Cards are for grouping information, not for decorating a section. When spacing alone can separate content, use spacing (see `WhyChooseUs`, which uses hairlines instead of cards).

**`.btn`** with `.btn-primary` (blue fill, white text), `.btn-secondary` (white fill, `brand-700` text, `brand-200` border) or `.btn-onink` (white fill, for the footer). Pill radius, 44px minimum height. **One primary button per viewport.**

**`.field`** — white input, `line` border, `rounded-xl`, `brand-500` border and a `brand-100` ring on focus. Every input, select and textarea uses it. Never set `focus:outline-none` without a replacement; the global `:focus-visible` rule in `src/index.css` supplies the ring.

**`.eyebrow`** - small uppercase `brand-700` label. Rationed, see section 3.

**`BrandLogo`** - the only place the logo is rendered. The supplied `src/Logo/logo.png` is a transparent PNG whose monogram and wordmark contain white and silver elements, so it vanishes on white. Both variants therefore sit on a near-black `#05070D` plate:
- `variant="mark"` crops to the BW monogram for the header. The plate pads a window sized exactly to the monogram, so the wordmark below it cannot leak into the frame. Crop bounds live in one constant against the 500x500 source; if the artwork is replaced, retune `MARK` there and nowhere else.
- `variant="full"` shows the complete lockup, used in the footer where there is room.
Never place the raw PNG on a light surface without the plate, and never recreate the mark as inline SVG.

**Radius scale:** `rounded-lg` (chips) · `rounded-xl` (inputs, icon tiles) · `rounded-2xl` (cards, modals, banner) · `rounded-3xl` (banner at `sm` and up) · `rounded-full` (buttons, pills, dots). Pick from this list.

**Icons:** `lucide-react` only, default stroke, `w-4`/`w-5`/`w-6`. Decorative icons carry `aria-hidden="true"`.

**Modals:** `ink/50` backdrop with a light blur, white `rounded-2xl` panel, close control top-right at 40px or larger, Escape to close, body scroll locked. `TestimonialsSection` and `Header` show the pattern.

**`PageHero`:** the top band of every interior page, and the page's `<h1>`. It mirrors the home hero: photograph behind a white scrim, left-aligned title plus one supporting line. Any component rendered beneath it takes `hideHeader` so the same title is never stated twice, which also keeps exactly one `h1` per page. The image-less variant (a plain `frost` band) still exists in the component but is currently unused.

**Header chrome.** The bar is `bg-ink/90` with `backdrop-blur-xl` so page content ghosts through as it scrolls under. On it: the wordmark in white, `WIRELESS & ELECTRONICS` and icons in `brand-300`, nav links in `brand-100` rising to white, and the active link on a `bg-white/12` pill. Worst case, meaning the translucent bar over a pure-white page, those measure 13.0, 6.8, 10.7 and 8.9 to 1. The mobile drawer is solid `bg-ink` so the whole navigation reads as one dark piece.

**Do not nest a `position: fixed` panel inside the header.** `backdrop-filter` makes the header a containing block for fixed descendants, which collapses a full-height drawer to the header's own box. The mobile drawer is therefore a sibling of `<header>`, at `z-50`.

**`BrandLogo`** in the header is a circular badge (`variant="mark"`), cropped to the BW monogram on a `#05070D` plate with a `ring-white/15` edge so the circle reads against the dark bar. The wordmark beside it is HTML text, not part of the image.

**Interior hero imagery.** Every page carries one distinct photograph, declared in the single `PAGE_IMAGES` map in `App.tsx`. Choose photographs that show the actual business: devices, accessories, a service counter, a workbench, a desk phone. Generic open-plan-office stock is banned, and so is anything whose dominant colour fights the blue and white palette. Look at a candidate on screen before committing to it; two images shipped here were replaced after they turned out to be a clothing store and a hair salon.

**`PromoBanner`:** the homepage's loudest element. Content lives in `PROMO_SLIDES` in `src/data/mockData.ts` and is meant to be edited by hand. The component adapts to any slide count and hides its controls when only one slide exists.

---

## 6. Depth & Elevation

Depth comes from **surface colour and hairlines**, not from shadows.

1. **Flat** — page sections. No border, no shadow. The background colour separates them.
2. **Hairline** — `.card`, inputs, the header when scrolled. 1px `line` border.
3. **Lifted** — `.card-interactive:hover` only. `0 12px 28px -18px rgba(10,27,51,0.35)` plus a 2px rise.
4. **Product** — `.product-shadow` for a product image resting on a surface. This is the only shadow allowed on imagery.
5. **Overlay** — modals and the mobile quick bar. `backdrop-blur` over a translucent white or ink scrim.

No shadow on buttons. No shadow on text. No glow anywhere; the glow utilities from the dark theme were removed.

---

## 7. Motion

- Library: `motion/react`. Ambient float and pulse animations from the dark theme were removed; nothing on the page loops forever.
- Entrances: fade plus a 14px rise, 400ms, `easeOut`, `viewport={{ once: true }}`, staggered 60ms and capped at 6 items.
- Hover: 150-250ms on border, colour and a 2px translate. Image scale on card hover stays at `1.03`.
- Banner: 350ms crossfade on copy, 450ms on the image. Autoplay is 7 seconds, pauses on hover and on focus, and is **off entirely** under `prefers-reduced-motion`.
- Every animated component reads `useReducedMotion()` and drops its `initial`/`animate` props, and `src/index.css` additionally collapses all animation and transition durations under `prefers-reduced-motion`.
- Motion clarifies hierarchy or a state change. Motion that exists to look busy gets removed.

---

## 8. Responsive Behaviour

Breakpoints: `sm:640` · `md:768` · `lg:1024` · `xl:1280` · `2xl:1536`. Mobile-first.

Verified behaviour that must not regress:
- **No horizontal overflow at any breakpoint on any route.** `overflow-x: hidden` on body is a safety net, not a fix; find the offending element. Decorative absolutely-positioned blobs were the previous cause and have been removed.
- **Header fits on one line from 1024px up**, at 64px tall. It sheds parts as it narrows: the logo's second line and the wider nav tracking return at `2xl`, the phone number appears at `2xl`, and the CTA reads "Book Service" below `2xl` and "Book a Service" above. Below `lg` it becomes a full-height drawer.
- **The home hero headline types itself in** one character at a time on first load, at 45ms per character. The final text is rendered invisibly underneath to reserve the box, so there is zero layout shift, and the full string sits in a `sr-only` span so assistive tech reads it at once. Under `prefers-reduced-motion` the headline appears immediately with no caret. This is the home hero only; no other headline animates.
- **Hero photography** is washed to 92% white below `lg` and clears to 50% on the right from `lg` up, so headline contrast is identical at every width.
- **The promotional banner** stacks image-over-copy below `lg` and reserves a `min-h` on the copy column so slide changes never shift layout. Its indicator dots sit in normal flow on mobile, so they never land under the CTA.
- Product and service grids collapse 4 → 2 → 1.
- Category filter rows scroll horizontally inside their own container.
- **Touch targets are 44x44px minimum** on mobile. Desktop nav links sit at 35px, which is a deliberate precision-pointer exception; the mobile drawer uses 52px rows.

---

## 9. Accessibility

Verified across all eight routes at 375px and 1280px, and to be re-verified after any UI change.

- **Contrast: zero AA failures.** Body text at 4.5:1 or better, large text at 3:1 or better, on every surface. `--color-faint` was darkened to `#5A6B80` specifically to clear 4.5:1 on white, mist and frost.
- **Every form control has an associated `<label>`** via `htmlFor`/`id`, or an `aria-label`. Placeholder text is not a label.
- **Focus is always visible.** `src/index.css` sets a `brand-600` outline on `:focus-visible` for every interactive element. Nothing sets `focus:outline-none`.
- Semantic HTML: real `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<figure>`/`<blockquote>` for testimonials. `<button>` for actions, `<a>` for navigation.
- Modals: `role="dialog"`, `aria-modal`, `aria-labelledby`, Escape to close, scroll locked behind.
- The carousel is a labelled region with `aria-roledescription="carousel"`, arrow-key support, per-slide control labels, and an `aria-live` announcement.
- Icon-only controls carry `aria-label`; decorative icons carry `aria-hidden`. Every `<img>` has meaningful `alt`.
- `prefers-reduced-motion` is honoured (see section 7).
- `tel:` and `mailto:` are real links.

---

## 10. Do's and Don'ts

**Do**
- Reuse `.section`, `.shell`, `.card`, `.btn` and `.field` before writing new CSS.
- Let sections breathe. Whitespace is the main tool for making this feel premium.
- Keep the conversion path (call Ernest, book a repair, ask about a product) visible on every screen.
- Link to the interior page instead of putting the whole thing on the homepage.
- Give every visual decision a reason you could state out loud.

**Don't**
- Purple, violet, or any second accent.
- Decorative blurred blobs, mesh or aurora backgrounds, or ambient glows. These were removed; do not reintroduce them.
- Gradients as decoration.
- A shadow on every card, or any shadow on a button.
- Glassmorphism beyond the two blurred overlays named in section 6.
- Turning every section into a grid of identical cards.
- Inverting a mid-page section to a dark theme. The footer is the only dark band.
- New fonts, new icon sets, new animation libraries.
- Em dashes in UI copy.
- Animation added because a section "felt empty". Fix the content instead.

---

## 11. Agent Guidance

When implementing UI in this repository:

1. **Read this file first**, then read the closest existing component in `src/components/` and match it.
2. Preserve the identity above. If a brief seems to require breaking it, say so and ask before deviating.
3. Reference material for *depth of craft*, not for palette or theme, lives in `.claude/design/references/`. Those files describe other companies' systems. Borrow their rigour; never borrow their colours.
4. Before declaring UI work finished, run the pre-flight in `CLAUDE.md`: desktop, tablet, mobile, accessibility, anti-slop. Re-check horizontal overflow, contrast and touch targets specifically, since those are the three that have regressed here before.
