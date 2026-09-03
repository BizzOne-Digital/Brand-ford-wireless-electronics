# Design Reference Library

Source: [voltagent/awesome-design-md](https://github.com/voltagent/awesome-design-md) (MIT).

These are **reference systems**, not the project's design system. The project's authoritative design system is [`/DESIGN.md`](../../../DESIGN.md) at the repo root. Nothing in this folder overrides it.

## What these are for

Use them to raise the *craft ceiling*, not to change the brand:

- how a mature system structures its type scale and spacing rhythm
- how it handles elevation, state, and motion consistently
- how it writes rules that a coding agent can actually follow
- concrete component and token patterns worth adapting

**Never copy their palettes, fonts, or visual theme into this project.** Brantford Wireless & Electronics has its own identity, documented in `/DESIGN.md`.

## Curated set

These five were selected because each solves a problem this project has:

| File | Why it is here |
|---|---|
| [`apple.md`](apple.md) | Premium consumer-electronics retail. Product-forward layout, restraint, hardware photography treated as the hero. Closest business analogue. |
| [`superhuman.md`](superhuman.md) | Dark-first premium UI with disciplined glow and elevation. The nearest analogue to the midnight-surface language. |
| [`linear.app.md`](linear.app.md) | Restraint and precision: single accent, tight type, no decoration. The benchmark for "every decision has a reason". |
| [`stripe.md`](stripe.md) | Trust and conversion on a commercial site. Useful for forms, pricing, and CTA hierarchy. |
| [`vercel.md`](vercel.md) | Typographic discipline and monochrome structure. Useful when a section is fighting for hierarchy. |

## Wider library

The `web-design` skill bundles ~60 additional (shorter) design-system summaries at
`.claude/skills/web-design/references/design-systems/`, with an `INDEX.md`.

If a brief calls for a system not covered here, pull the full version from
`https://github.com/voltagent/awesome-design-md/blob/main/design-md/<name>/DESIGN.md`
rather than adding a half-remembered approximation.
