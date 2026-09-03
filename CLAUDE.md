# Brantford Wireless & Electronics

Marketing and lead-capture site for a local Brantford technology retail and repair business.

## Stack

- **React 19** + **TypeScript** (strict), **Vite 6**
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js`; theme lives in `src/index.css`)
- **motion** v12 (Framer Motion), imported as `motion/react`
- **lucide-react** for icons
- Express + `@google/genai` for the lead/booking backend
- Single-page app with client-side routing via `PageRoute` state in `src/App.tsx` (no router library)

```bash
npm run dev     # vite dev server on :3000
npm run build   # production build
npm run lint    # tsc --noEmit
```

Content and business data live in `src/data/mockData.ts`. Types live in `src/types.ts`.

---

# Design Workflow

This project uses three design resources. They are complementary, not interchangeable. **Consult them before doing significant UI/UX work** — new pages, redesigns, "make it more premium", responsive fixes, animation, typography, dashboards, or component work.

| Resource | Location | Owns |
|---|---|---|
| **`/DESIGN.md`** | repo root | **Authoritative.** This project's actual visual identity: palette, type, components, depth, motion, responsive and accessibility rules. |
| **Taste Skill** (`design-taste-frontend`) | `.claude/skills/design-taste-frontend/` | Visual taste, art direction, anti-slop enforcement, composition, hierarchy, spacing, motion quality, redesign audits, pre-flight checks. |
| **Web Design Skill** (`web-design`) | `.claude/skills/web-design/` | Spec-first process, web UX, layout, responsive design, accessibility, interaction patterns, quality checklist. |
| **Design references** | `.claude/design/references/` | Curated [Awesome DESIGN.md](https://github.com/voltagent/awesome-design-md) systems used as craft references only. |

## Precedence

When these disagree, the order is:

1. **`/DESIGN.md`** — the project's own identity always wins.
2. **Explicit user instruction for the task at hand.**
3. **Taste Skill** — for art direction and quality judgement.
4. **Web Design Skill** — for layout, UX, and accessibility mechanics.
5. **`.claude/design/references/`** — inspiration and rigour only; never a source of palette, fonts, or theme.

The reference systems in `.claude/design/references/` describe *other companies*. Borrow their discipline, never their colours.

## Process for any UI task

```
Understand the brief
  ↓ Read /DESIGN.md
  ↓ Inspect the existing components this touches (src/components/)
  ↓ Consult the applicable skill(s)
  ↓ Decide the visual direction, within the existing identity
  ↓ Implement the minimum necessary change
  ↓ Verify: desktop → tablet → mobile → accessibility → anti-slop pre-flight
```

**New UI** — consult the design resources *before* writing the interface, not after.

**Existing UI** — audit before changing. Read the component, identify the actual defect, and fix that. Do not rewrite working markup to impose a preference.

**Redesigns** — preserve the established brand identity unless the user explicitly asks for a new visual direction. "Make this more premium" means refine within the identity; it does not authorise a new palette, new fonts, or a new theme.

**Components** — match the nearest existing component. Consistency with `src/components/` outranks novelty.

**Scope** — do not change routes, API, backend, data, content, or business logic as a side effect of visual work.

## Anti-AI-slop rules

Never produce these by default. Each one requires an explicit reason tied to the brief:

purple or arbitrary gradients · excessive glassmorphism · floating blobs or mesh/aurora backgrounds · everything rounded · a shadow on every surface · generic dashboard layouts · repetitive three-card grids · animation with no purpose · oversized headings carrying no information · decorative badges and pills · template hero sections · inconsistent spacing · trendy patterns applied without context.

**Every design decision must have a stated reason.** If you cannot say why an element exists, remove it.

## Responsive checklist

Check mobile, tablet, laptop, desktop, and large screens for: horizontal overflow · broken navigation and the mobile menu · text wrapping · oversized display type · spacing that collapses or balloons · broken grids · images and video overflowing containers · unusable buttons · touch targets under 44x44px · the fixed `MobileQuickBar` covering content.

## Accessibility checklist

Semantic HTML · full keyboard navigation · visible focus states · contrast at 4.5:1 for body text and 3:1 for large text · labelled form controls · correct button vs link semantics · `aria-label` on icon-only controls · screen-reader-sensible order · `prefers-reduced-motion` honoured (the hero video and ambient animations especially).

---

## Invoking the skills

Both skills are installed at project level and auto-discovered. Invoke explicitly when a task warrants it:

- `design-taste-frontend` — art direction, visual quality, redesign audits, pre-flight.
- `web-design` — when a page needs a written spec before code, or a systematic responsive/accessibility pass.

The `web-design` skill's default behaviour is to generate a new `DESIGN.md`. **This project already has one and it is authoritative** — use the skill's process and checklists against the existing `/DESIGN.md`; do not let it overwrite the file. Updating `/DESIGN.md` requires explicit user approval.

Skills are pinned in `skills-lock.json`. Update with:

```bash
npx skills update
```
