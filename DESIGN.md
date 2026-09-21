# DESIGN.md

> Brantford Wireless & Electronics: a bright, blue and white technology store. White is the room, blue is the signage, and the products are the only things allowed to shout.

**Status:** Authoritative. This file describes the project's *existing, shipped* visual identity. Any UI work in this repository must conform to it. Changing this file is a deliberate brand decision and requires explicit user approval.

**Format reference:** [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md) · [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/)

**Revision note:** The site previously ran a dark "midnight showroom" theme. In the current revision the client asked for a brighter, blue and white identity and a shorter homepage. The blue accent and the Space Grotesk / Plus Jakarta Sans pairing carry over from that design; the surfaces inverted from near-black to white.

**Homepage revision.** The homepage was later restructured against a retail-commerce information architecture, then progressively cut back at the client's request. It is now four blocks: the full-bleed promotional hero, the phone-only category tiles, the paired store banners, and customer testimonials. It deliberately carries no contact band; the footer holds the address, phone, email and social, and the contact page holds the form. In the same pass the header stopped being fixed, the separate `Hero` component was removed, and the showroom, inside-the-store, team and testimonial blocks were taken off the homepage. `TestimonialsSection` was later restored at the client's request and closes the page on `white`; the before-and-after and services blocks came off the homepage too and now run on the services page alone; `ProductCatalog` and `TeamSection` still serve the store and about pages. `Hero`, `TrustStrip`, `MobileQuickBar`, `FeaturedWork` and `FAQSection` were deleted outright and are recoverable from git history.

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

**Surface rhythm.** Sections alternate `white` → `mist` → `frost`. The colour change is the divider; sections do not need top borders. Two sections of the same surface must never sit next to each other. The homepage runs photograph (hero) -> white (category tiles, phone only) -> mist (paired banners) -> white (testimonials) -> ink (footer).

**Color rules**
- **One accent only.** Blue. Never introduce purple, teal, pink, or a second brand hue.
- **`brand-600` is a fill, `brand-700` is text.** `brand-600` as text on `frost` measures 4.44:1 and fails AA. Use `brand-700` (6.25:1 on frost) for any blue text or link.
- **Dark is chrome and the footer, never a page section.** The fixed header is `bg-ink/90` with `backdrop-blur-xl`; the footer is solid `bg-ink`. Both frame the page rather than interrupt it. No content section inverts.
- Emerald, amber and red are **semantic** only: emerald means verified or confirmed, amber means a star rating, red means a field failed validation. Red appears in exactly one place, the contact form's error state (`text-red-600`, `border-red-400`, `bg-red-50/60`, and the required asterisk). Never decorative, and never a second brand hue.
- Gradients are effectively banned. The exceptions are all scrims that carry text over photography, never decoration: the ink scrim behind every `PageHero` title, and the scrim under each service tile's caption. The home hero's was removed at the client's request, see section 5. The 96px edge fade that blended the promotional banner's photograph into its panel is not one of these, and survives only on the store page's carded variant.
- Every text colour in the palette passes WCAG AA on white, mist and frost. If you introduce a new colour, verify it before shipping.

---

## 3. Typography

**Loaded in `index.html` via Google Fonts. Do not add a third family.**

| Role | Family | Size | Weight | Tracking |
|---|---|---|---|---|
| Hero H1 | Space Grotesk | `text-[2rem]` → `lg:text-[3.4rem]` | 700 | `-0.025em` |
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
- Eyebrows are rationed. At most one per two or three sections. The hero's slide badge is a pill, not an `.eyebrow`, so the homepage's eyebrows are the two on services and before-and-after.

---

## 4. Layout & Spacing

- **Content container:** `.shell` — `max-w-7xl` (1280px) with `px-4 / sm:px-6 / lg:px-8`.
- **Header container:** `.shell-wide` — `max-w-[90rem]` (1440px). The header is deliberately wider than the content column so the eight-item nav keeps real gaps at every desktop width.
- **Section rhythm:** `.section` — `padding-block: 3.5rem`, `5.5rem` from `lg`.
- **Header offset: none.** The header is a single `h-16` (64px) row in normal flow with a 12px inset (`mx-3 mt-3`), so it occupies real space and needs no offset anywhere. It scrolls up and out of view with the page. Sections must not add a top offset to compensate for it.
- **Spacing scale:** Tailwind's 4px scale. Use `2 / 3 / 4 / 5 / 6 / 8 / 10 / 12`. Do not introduce arbitrary pixel gaps.
- **Grid:** 1 column mobile → 2 tablet → 4 desktop for card rows; 3 across for testimonials.
- **Pinned chrome:** `CategoryRail` in its `bar` form only, at `sticky top-0 z-40`, rendered once between `<Header>` and `<main>` so it holds on every route. It is the sole element that stays on screen while the page scrolls. Its `sticky` works only because no ancestor is a scroll container, which is why `body` uses `overflow-x: clip` and never `hidden`.

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

**`ContactSection`:** the contact page, and only the contact page. The whole route is two blocks: the image-less `PageHero` band, then one bordered card holding both halves. Ways in on the left at 5 of 12, message form on the right at 7 of 12. Below `lg` they stack, ways in first, because calling is the fastest answer.

The left half is an accent bar beside "Get in touch", then address, email and phone, then a dashed rule, then the Instagram badge, then a second dashed rule. **There is no opening-hours row: the store publishes no hours.** Do not add one until real hours exist in `BUSINESS_INFO`, and never fill it with a plausible guess.

The page deliberately carries no map, no booking CTA and no FAQ. Those were removed at the client's request to leave the address and the form alone on the page; `FAQSection` had no other caller and was deleted.

The form is a local flow with no backend: on submit it checks the three required fields, shows "This is a required field." under each one that is empty, moves focus to the first, and also raises the toast. A field's error clears as soon as it has a value. Valid submits wait 600ms, then swap the form for a confirmation panel with a "Send another message" reset. `noValidate` is set on purpose so the native bubbles do not pre-empt this and name only one field at a time. Layout work must not touch any of it.

**`PageHero`:** the top band of every interior page, and the page's `<h1>`. Photograph behind an ink scrim, left-aligned title plus one supporting line. Any component rendered beneath it takes `hideHeader` so the same title is never stated twice, which also keeps exactly one `h1` per page.

Omit `image` for the plain `frost` band, which the contact page uses: a form and an address do not benefit from a full-bleed photograph above them, it only pushes both further down the screen. Neither variant carries a top offset any more, since the header sits in normal flow.

**Header chrome.** The bar is `bg-ink/75` with `backdrop-blur-xl`, a rounded pill inset 12px from the top and sides. It is **not** fixed: it scrolls away with the page and does not come back. `CategoryRail` is what stays pinned. On it: the wordmark in white, `WIRELESS & ELECTRONICS` and icons in `brand-300`, nav links in `brand-100` rising to white, and the active link on a `bg-white/12` pill. Worst case, meaning the translucent bar over a pure-white page, those measure 13.0, 6.8, 10.7 and 8.9 to 1. The mobile drawer is solid `bg-ink` so the whole navigation reads as one dark piece.

**Do not nest a `position: fixed` panel inside the header.** `backdrop-filter` makes the header a containing block for fixed descendants, which collapses a full-height drawer to the header's own box. The mobile drawer is therefore a sibling of `<header>`, at `z-50`.

**`BrandLogo`** in the header is a circular badge (`variant="mark"`), cropped to the BW monogram on a `#05070D` plate with a `ring-white/15` edge so the circle reads against the dark bar. The wordmark beside it is HTML text, not part of the image.

**Interior hero imagery.** Every page carries one distinct photograph, declared in the single `PAGE_IMAGES` map in `App.tsx`. Choose photographs that show the actual business: devices, accessories, a service counter, a workbench, a desk phone. Generic open-plan-office stock is banned, and so is anything whose dominant colour fights the blue and white palette. Look at a candidate on screen before committing to it; two images shipped here were replaced after they turned out to be a clothing store and a hair salon.

**`PromoBanner`:** the homepage's loudest element, and on the homepage it **is** the hero. Content lives in `PROMO_SLIDES` in `src/data/mockData.ts` and is meant to be edited by hand. The component adapts to any slide count and hides its controls when only one slide exists.

It has two modes. With `asHero` it is a rounded card with gutters on phone and tablet and runs **full bleed from `lg`**, with **the photograph covering the whole frame**, an ink scrim over it, white copy laid on the left, and its slide headline as the page's `<h1>`. There is no coloured panel beside the image: an earlier revision split the banner into a `frost` copy column and an image column, and it read as two pieces rather than one banner. Without `asHero`, on the store page, it stays that split card inside `.shell` with an `h2`, because `PageHero` above it already holds the `h1`. Exactly one instance may carry `asHero` per page.

**The hero has no scrim, by client decision, and this is a known AA failure.** It previously carried `from-ink/92 via-ink/88 to-ink/70`; the client asked for the artwork to show unobstructed and the overlay was removed. Its copy now relies on `.on-photo`, a text-shadow defined in `src/index.css`. A shadow is a perceptual aid and earns no WCAG credit, so on the pale slides, the bedsheet phone photograph above all, white body copy does not reach 4.5:1.

Three things would fix it without putting a wash back: darker slide photography, copy placed over a dark region of each image, or a per-slide overlay opacity set alongside the image in `PROMO_SLIDES`. Until one of those happens, treat this as an accepted exception rather than a pattern to copy: **do not remove scrims from `PageHero` or the service tiles on the strength of it.**

**`CategoryRail`:** the category navigation, in two forms selected by `variant`.

`bar` is the desktop one and it is **site chrome, not a homepage section**: a single instance sits between `<Header>` and `<main>` in `App.tsx`, so it appears on every route. A thin white strip, one line of icon-and-label links, hairline foot, `sticky top-0 z-40`. Since the header scrolls away, this is the only navigation that survives scrolling anywhere on the site. Render it once and only once; a second instance duplicates its ids.

`tiles` is the phone and tablet one, and it stays on the **homepage only**, below the hero, so the banner is the first thing on screen. A three-across icon grid where "All services" takes the ninth cell, so the eight categories fill a clean 3x3 instead of leaving a ragged row. Tiles measure 108x104 at 375px; four across made them 80x78, which was too small for a 13px label.

Each form is hidden at the other's widths (`hidden lg:block` / `lg:hidden`), so a phone on an interior page has no category navigation at all: the header drawer and the footer carry it there. They are not one reordered element on purpose, for two reasons. On the homepage they sit on opposite sides of the hero, and an ordered flex wrapper would become the sticky containing block and unpin the bar the moment the hero scrolled past. Site-wide, the bar has to live outside `<main>` while the tiles live inside one route's fragment.

Entries in both are real service ids routed through the same handler as every other service link, so neither can point somewhere the rest of the site cannot.

**`AdBanner`:** the store's own designed artwork. The artwork already carries its own headline and offer, so nothing is ever overlaid on it; a slim bar beneath states the destination. `bleed` drops the radius and side borders for full-width use. On the homepage the two banners sit side by side from `lg`, in `.shell-wide` rather than `.shell`, with `gap-5 lg:gap-6`: roughly 670x251 each at desktop. The wider container is what buys them size without costing the gap or the gutters either side. Below `lg` they run one per row, because half of a tablet column is no wider than a phone.

**Below `lg` they become a swipe rail.** Each banner takes 86% of the width and snaps, so roughly 80px of the next one always shows: that overhang is the only affordance saying the row scrolls, so do not widen the items to 100%. It replaced a two-across phone grid that left each banner 166px wide, too small to read the artwork. Measured 302x228 at 375px with a 73px peek.

**An 8:3 banner's height follows its width, so width is the only size control.** The services page's single banner is capped at `max-w-3xl`: at the full 1216px column it stood 533px tall, taller than anything else on that page, and 768px brings it to 365 which sits with the 295px tiles.

**The banner frame cannot be made taller.** The artwork is 2048x768 and packed to all four edges: the logo, the `GAMING | WORK | SCHOOL | HOME` line and the corner location pin all sit within 3% of the border, so any ratio taller than `8/3` clips them. Height is added through the card's footer instead, via the optional `note` prop, which takes the matching service's existing `shortDesc` from `SERVICES_DATA` rather than new copy. It shows at every width and the footer holds `min-h-[76px]`, which is where the cards get their presence: 671x361 at desktop, 302x228 on a phone.

**On a phone the wide image tops out around 129px** and nothing in CSS changes that: an 8:3 frame at the full 343px of a 375px screen is 129px tall, and the artwork cannot be cropped taller without losing the logo and the corner text. The supported fix is a **second cut of each banner at 4:3**, registered in `STORE_MEDIA_MOBILE` in `src/data/media.ts`. `AdBanner` takes it as `mobileSrc`: the frame becomes `aspect-[4/3] lg:aspect-[8/3]` and a `<picture>` serves the wide file only from 1024px, so a phone never downloads artwork it cannot use. With no entry the wide art runs at every width and nothing changes. Do not reach for a crop instead.

---

## 6. Depth & Elevation

Depth comes from **surface colour and hairlines**, not from shadows.

1. **Flat** — page sections. No border, no shadow. The background colour separates them.
2. **Hairline** — `.card`, inputs, the header when scrolled. 1px `line` border.
3. **Lifted** — `.card-interactive:hover` only. `0 12px 28px -18px rgba(10,27,51,0.35)` plus a 2px rise.
4. **Product** — `.product-shadow` for a product image resting on a surface. This is the only shadow allowed on imagery.
5. **Overlay** — modals and the mobile quick bar. `backdrop-blur` over a translucent white or ink scrim.

No shadow on buttons. No glow anywhere; the glow utilities from the dark theme were removed. The one text shadow in the system is `.on-photo`, which exists only because the home hero's scrim was removed; see section 5.

---

## 7. Motion

- Library: `motion/react`. Ambient float and pulse animations from the dark theme were removed, as was the trust-strip marquee that replaced them; **nothing on the page loops forever**. The hero carousel advances on a timer, which is not a loop in this sense: it pauses on hover and focus and stops entirely under `prefers-reduced-motion`.
- Entrances: fade plus a 14px rise, 400ms, `easeOut`, `viewport={{ once: true }}`, staggered 60ms and capped at 6 items.
- Hover: 150-250ms on border, colour and a 2px translate. Image scale on card hover stays at `1.03`.
- Banner: 350ms crossfade on copy, 450ms on the image. Autoplay is 7 seconds, pauses on hover and on focus, and is **off entirely** under `prefers-reduced-motion`.
- Every animated component reads `useReducedMotion()` and drops its `initial`/`animate` props, and `src/index.css` additionally collapses all animation and transition durations under `prefers-reduced-motion`.
- Motion clarifies hierarchy or a state change. Motion that exists to look busy gets removed.

---

## 8. Responsive Behaviour

Breakpoints: `sm:640` · `md:768` · `lg:1024` · `xl:1280` · `2xl:1536`. Mobile-first.

Verified behaviour that must not regress:
- **No horizontal overflow at any breakpoint on any route.** `overflow-x: clip` on body is a safety net, not a fix; find the offending element. Verify with `document.documentElement.scrollWidth === window.innerWidth`, not by eye.
- **Header fits on one line from 1024px up**, at 64px tall. It sheds parts as it narrows: the phone number appears at `xl`, and the mail-in CTA shortens to "Mail-In" below `xl`. Below `lg` it becomes a full-height drawer. Because the header is not fixed, the drawer is only reachable at the top of the page; the footer carries the same navigation for anyone already scrolled down.
- **`CategoryRail` stays one line at every width.** Below `xl` it scrolls sideways inside its own container with the scrollbar hidden; the last chip clipping mid-label is the affordance that says so.
- **The hero never stacks.** The photograph is absolutely positioned behind the copy at every width, so its height is the copy column's `min-h` alone: 440 / 460 / 520. This is also what fixed the old stacked layout, where the image and copy heights added up to 750px at 768px wide.
- **The hero's indicator dots wrap** below `lg`. Twelve 36px dots are 432px wide, which is wider than a phone, and the card's `overflow-hidden` silently clipped the last four until they were allowed to wrap.
- Product grids collapse 4 → 2 → 1. **Service tiles are one uniform size at every width**, three across from `lg` and two below it: 392x295 desktop, 347x261 tablet, 166x166 phone. There is no wide lead tile and no larger full-page variant; both were removed after the services page shipped with a 1216x522 lead above eleven 596x398 tiles, which put that one grid at 3229px of a 5746px page. At 166px the tile drops its tagline, because a square frame there has room for a title and nothing else.
- Category filter rows scroll horizontally inside their own container.
- **The homepage banners** are a snapping swipe rail below `lg` and a two-across grid from `lg`. Measured: 295x168 each at 375 with an 80px peek, 671x343 at desktop.
- **The category navigation swaps form at `lg`**, from the homepage's three-across tile grid under the hero to the site-wide pinned bar above the page. Below `lg` on any route other than the homepage there is no category strip; the drawer and the footer carry navigation there.
- **The hero is a rounded card below `lg`** with the page gutters either side, and goes edge to edge with square corners from `lg`.
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
- **Exactly one `h1` per route.** On the homepage it is the active hero slide's headline; everywhere else it is the `PageHero` title. A carousel whose headline is the `h1` must announce slide changes through the existing `aria-live` region, which it does.
- **The header is not pinned**, so nothing in it is reachable mid-page. Any navigation that must stay available has to live in `CategoryRail` or the footer.

---

## 10. Do's and Don'ts

**Do**
- Reuse `.section`, `.shell`, `.card`, `.btn` and `.field` before writing new CSS.
- Let sections breathe. Whitespace is the main tool for making this feel premium.
- Keep the conversion path (call the store, book a service, ask about a product) reachable from every screen.
- Link to the interior page instead of putting the whole thing on the homepage.
- Give every visual decision a reason you could state out loud.

**Don't**
- Pin the header. It scrolls away by design; `CategoryRail` is the pinned chrome.
- Put two sections of the same surface colour next to each other.
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
