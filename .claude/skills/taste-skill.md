# TASTE-SKILL — Anti-Slop Frontend Design System
# Source: github.com/Leonxlnx/taste-skill

---

## 1. ACTIVE BASELINE CONFIGURATION

```
DESIGN_VARIANCE: 8
MOTION_INTENSITY: 6
VISUAL_DENSITY: 4
```

These are global design dials — not static settings. Adjust dynamically based on user requests and context.

---

## 2. DEFAULT ARCHITECTURE & CONVENTIONS

- **Framework**: React / Next.js with Server Components by default
- **Styling**: Tailwind CSS (check v3 vs v4 before using)
- **Icons**: `@phosphor-icons/react` or `@radix-ui/react-icons` — standardize, never mix
- **Layout**: Prefer CSS Grid over complex flexbox math
- **Mobile safety**: Always use `min-h-[100dvh]` — never `h-screen` (causes layout jump on mobile)
- **Emojis**: Banned entirely in UI
- **Dependencies**: Verify existence before importing any library

---

## 3. DESIGN ENGINEERING DIRECTIVES (Bias Correction)

### Typography
- Ban **Inter** for premium designs — use Geist, Satoshi, or similar
- Deterministic font selection based on brand context

### Color
- Max **one accent color** per design
- **Purple ban**: avoid purple for AI-generic aesthetics
- No oversaturated accents, no neon glows, no pure `#000000`
- No gradient text fills

### Layout
- **Forbid centered hero sections** — diversify layout structure
- No generic 3-column card grids as default
- Eliminate card overuse in dense UIs — use materiality constraints

### Forms
- Labels always **above** inputs
- Complete UI states mandatory: loading, empty, error

### Forbidden AI Tells
- No custom mouse cursors
- No oversized H1s
- No serif fonts on dashboards
- No fake placeholder data ("Jane Doe", predictable percentages)
- No broken Unsplash links
- Always customize `shadcn/ui` beyond defaults

---

## 4. CREATIVE PROACTIVITY (Anti-Slop Implementation)

### Liquid Glass Effect
Use `border-white/10` with inner shadows for refraction effects — no generic glassmorphism.

### Magnetic Micro-Physics
Use Framer Motion's `useMotionValue` — **never** React `useState` for motion values.

### Perpetual Micro-Interactions
Spring physics on all interactive elements. Always animating, never static.

### Layout Transitions
Use `layout` and `layoutId` props from Framer Motion for smooth reflows.

### Staggered Orchestration
Use `staggerChildren` within unified Client Component trees — not scattered across components.

---

## 5. PERFORMANCE GUARDRAILS

- Grain/noise filters: fixed pseudo-elements only (no JS-driven filters)
- Hardware acceleration: always animate `transform` and `opacity`
- **Never** animate `top`, `left`, `width`, `height` — causes layout thrash
- Z-index: apply only to systemic layers (sticky nav, modals) — restraint required
- GSAP / ThreeJS: isolate in dedicated Client Components, separate from Framer Motion

---

## 6. TECHNICAL REFERENCE — Dial Definitions

### DESIGN_VARIANCE (1–10)
- 1–3: Symmetric, traditional layouts
- 4–6: Balanced asymmetry, intentional whitespace
- 7–10: Asymmetric masonry, unconventional grid

*Mobile override*: Single-column fallback mandatory for asymmetric designs below `md:` breakpoint.

### MOTION_INTENSITY (1–10)
- 1–3: Static CSS transitions only
- 4–6: Framer Motion entrance animations
- 7–10: Advanced Framer choreography, GSAP, full scroll-driven sequences

### VISUAL_DENSITY (1–10)
- 1–3: Art gallery spacing — generous whitespace
- 4–6: Balanced information hierarchy
- 7–10: Cockpit mode — monospace numbers, maximum data density

---

## 7. THE CREATIVE ARSENAL — High-End Interaction Patterns

### Navigation
- Mac OS dock magnification
- Magnetic buttons
- Gooey menus

### Layouts
- Bento grids
- Masonry layouts
- Split-screen scroll

### Cards
- Parallax tilt
- Spotlight borders
- Glassmorphism (refined, not generic)

### Scroll Animations
- Sticky stacks
- Horizontal scroll hijack
- Liquid swipe transitions

### Galleries
- Dome gallery
- Coverflow
- Drag-to-pan

### Micro-Interactions
- Particle explosions on click
- Shimmer effects
- Ripple clicks

---

## 8. THE "MOTION-ENGINE" BENTO PARADIGM

**Base aesthetic**:
- Background: `#f9fafb`
- Cards: white with `border-slate-200/50`
- Border radius: `rounded-[2.5rem]`
- Shadows: diffusion shadows (not hard drop shadows)
- Typography: `Geist` or `Satoshi`

**Spring physics standard**:
```js
{ stiffness: 100, damping: 20 }
```

**Five mandatory micro-animation archetypes**:
1. Intelligent lists (items that reorder with spring physics)
2. Command inputs with typewriter effects
3. Breathing status indicators (pulse animations)
4. Infinite carousels (momentum-based)
5. Contextual UI focus modes (blur/reveal surrounding elements)

---

## 9. FINAL PRE-FLIGHT CHECKLIST

Before delivering any frontend output, verify:

- [ ] Global dial values are appropriate for the context
- [ ] Mobile layout collapses correctly at `md:` breakpoint
- [ ] `min-h-[100dvh]` used — not `h-screen`
- [ ] `useEffect` includes cleanup functions
- [ ] All UI states handled: empty, loading, error
- [ ] Cards eliminated where possible — replaced with richer materiality
- [ ] CPU-heavy animations isolated in dedicated Client Components
- [ ] No forbidden AI tells present
- [ ] Fonts, colors, and icons follow conventions above
