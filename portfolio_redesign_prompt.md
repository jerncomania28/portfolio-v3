# Claude Prompt: Premium Portfolio Redesign for Jeremiah Okon

---

## CONTEXT & MISSION

You are redesigning the personal portfolio website of **Jeremiah Okon**, a Frontend Engineer specializing in React and Next.js. The live site is at https://jeremiahokon.vercel.app/ — built with Next.js and currently has the following sections: Hero, About (Hello), Recent Works, and Footer.

Your job is to **extend and elevate** this website — not rebuild it from scratch. You must:

- Preserve the existing design language, color palette, typography, and tone
- Add new sections in the correct order
- Make every section feel premium, smooth, and deliberately crafted
- Ensure animations are purposeful — they guide attention, not distract
- Hook the visitor at every scroll point so they never want to leave

This is a **client-facing portfolio** for a developer who sells to businesses. Every design decision should reinforce trust, creativity, and technical excellence simultaneously.

---

## REFERENCE WEBSITES — STUDY THESE FOR INSPIRATION

Before writing a single line of code, study how the following world-class portfolios and creative sites handle layout, animation, scroll behavior, and project showcasing. Extract specific patterns from each:

### Portfolio References

- **Bruno Simon** (https://bruno-simon.com) — gamified 3D portfolio, shows personality can be a feature
- **Stripe.com** — study how they use gradient meshes, subtle motion, and section transitions
- **Linear.app** — obsessively clean, dark UI, micro-interactions on every element
- **Vercel.com** — glassmorphism, blur effects, dark premium feel
- **Lusion.co** — Awwwards winner, fluid scroll, immersive transitions
- **Active Theory** (https://activetheory.net) — creative agency, study their project reveal animations
- **Locomotive Scroll demos** — study how scroll-linked animations create depth
- **Rauno Freiberg** (https://rauno.me) — minimal but deeply refined, every detail intentional

### Specific Patterns to Extract and Apply:

1. From **Linear/Vercel**: Glowing gradient orbs in dark backgrounds, glass cards with border highlights
2. From **Stripe**: Animated gradient text, section-entrance animations that feel organic not robotic
3. From **Lusion**: Horizontal scroll or card-flip reveals for project showcases
4. From **Bruno Simon**: Personality-first approach — the site feels like the person
5. From **Active Theory**: Project cards with full-bleed hover previews that expand on cursor hover

---

## CURRENT SITE STRUCTURE (DO NOT REMOVE ANYTHING)

```
[Nav] — JO logo, location, email, Home/About/Work links
[Hero] — "Your website could work better — if I developed it." + Book a Free Call CTA
[About/Hello] — Profile photo, name, short bio paragraph
[Recent Works] — 6 project links (text-based list currently)
[Footer] — Email, LinkedIn, GitHub, copyright
```

---

## NEW PAGE STRUCTURE (IMPLEMENT IN THIS EXACT ORDER)

```
[Nav] ← keep exactly as-is
[Hero] ← keep, but enhance with animation improvements (see below)
[YouTube Video Section] ← NEW
[About/Hello] ← keep, minor animation enhancement only
[Skills & Technologies] ← NEW
[What I Build / Services] ← NEW
[Recent Works] ← REDESIGN this section completely
[Results / Stats] ← NEW
[Testimonials] ← NEW
[Contact / CTA] ← NEW (replace the scattered "Book a Free Call" buttons)
[Footer] ← keep exactly as-is
```

---

## SECTION-BY-SECTION IMPLEMENTATION GUIDE

---

### SECTION 1: HERO (Enhancement Only)

**Current state:** Large heading text, CTA button, "Scroll to be saved" label.

**Enhancements:**

- Add a **cursor-following gradient orb** — a soft glowing blob (purple/blue or match existing palette) that follows the mouse with a spring/lerp effect, staying 200–300ms behind the cursor. Opacity: 15–25%. This creates depth without distraction.
- Add **staggered text entrance animation** on page load — each word of the headline animates in with a slight upward translate + fade, staggered by 80ms per word. Use Framer Motion `motion.span` with `variants`.
- Add a **subtle animated noise/grain texture overlay** on the hero background — CSS-based, very low opacity (3–5%). This gives premium print-like texture.
- The "Scroll to be saved" label should have a **gentle bounce animation** on the arrow/icon to guide scroll behavior.
- Keep all existing copy and CTAs unchanged.

**Animation library:** Framer Motion for all hero animations.

---

### SECTION 2: YOUTUBE VIDEO — "See How I Work"

**Placement:** Immediately after the Hero, before the About section. This is the highest-visibility spot on the page.

**Design:**

- Full-width section with a **dark background** (slightly different shade from hero to create visual rhythm)
- Centered layout: small eyebrow label above (e.g., `[ MEET JEREMIAH ]` in spaced uppercase monospace), then a bold heading: _"See how I work before you hire me."_
- The YouTube embed should be in a **16:9 container with rounded corners** (16–24px radius), a **subtle glowing border** (1px, semi-transparent white or brand color), and a **glass-morphism card wrapper** (backdrop-filter blur, translucent background)
- On load, the video card should **animate in from below** with a slight scale (0.95 → 1) and fade — triggered by scroll intersection observer
- Add a **soft gradient halo** behind the video card — a radial gradient blob in the brand color at ~20% opacity, blurred heavily (blur: 80–120px). This creates the "glow behind card" effect seen on Linear and Vercel.
- Below the video, one short line: _"4+ years. Real teams. Real results."_ in a muted color.

**YouTube Embed:** Use `<iframe>` with `loading="lazy"` and replace `[VIDEO_ID]` with the actual YouTube video ID:

```jsx
<iframe
  src="https://www.youtube.com/embed/[VIDEO_ID]?rel=0&modestbranding=1"
  title="Meet Jeremiah Okon"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  loading="lazy"
/>
```

---

### SECTION 3: ABOUT/HELLO (Minor Enhancement)

**Keep existing content and layout entirely.** Only add:

- A **scroll-triggered fade + slide-up** entrance animation on the text block and image (use Framer Motion `whileInView` with `once: true`)
- On the profile image, add a **subtle rotating gradient border** — a conic-gradient animated with CSS `@keyframes` that rotates the hue slowly. Very subtle (low opacity). This is a widely admired effect on Awwwards portfolios.

---

### SECTION 4: SKILLS & TECHNOLOGIES

**Design Inspiration:** Linear.app's feature grid, but warmer and more personal.

**Layout:** Full-width dark section. Eyebrow label: `[ STACK ]`. Heading: _"Tools I use to build things that perform."_

**Implementation:**
Organize skills into **5 category rows**, each with a horizontal scrolling marquee (infinite scroll, paused on hover):

```
Row 1 (Frameworks):     React · Next.js · TypeScript · JavaScript
Row 2 (Styling):        Tailwind CSS · Framer Motion · SCSS · CSS Animations
Row 3 (State/Data):     Zustand · Redux · React Query · SWR · Apollo · GraphQL · REST
Row 4 (Backend/Tools):  Supabase · Firebase · Vercel · Git · GitHub Actions · Figma
Row 5 (Testing):        Jest · React Testing Library · Cypress · Playwright
```

- Odd rows scroll **left**, even rows scroll **right** — this creates a visually engaging depth effect
- Each skill is a **pill/chip** — rounded full, subtle border, icon from Devicons on the left, tech name on the right
- On hover of any pill: **slight scale up (1.05), glow border** in brand color, background lightens slightly
- The whole section should have a **grid noise texture** overlay (very subtle) and the rows should **stagger their entrance** as the section scrolls into view — rows animate in from left/right alternately

**CSS for infinite marquee:**

```css
@keyframes marquee-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes marquee-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}
.marquee-track {
  animation: marquee-left 30s linear infinite;
}
.marquee-track:hover {
  animation-play-state: paused;
}
```

Duplicate each row's content so the loop is seamless.

---

### SECTION 5: WHAT I BUILD / SERVICES

**Design Inspiration:** Stripe's product grid meets a dark agency site.

**Layout:** Dark section. Eyebrow: `[ SERVICES ]`. Heading: _"Whatever stage you're at — I've built it."_

**Cards (8 total):**

1. React & Next.js Web Apps
2. SaaS Dashboards & Admin Panels
3. E-commerce Frontends
4. Landing Pages & Marketing Sites
5. Fintech & Data UIs
6. MVPs for Startups
7. Legacy Modernization
8. Performance Optimization

**Card Design:**

- **Bento grid layout** — 4 columns on desktop, 2 on tablet, 1 on mobile. Cards vary in size (some span 2 columns) for visual hierarchy. The most important services (SaaS, E-commerce, Web Apps) get larger cards.
- Each card has: a **minimal line-art icon** (top left), service name (bold), one punchy sentence description, and a subtle **hover state** where the card border lights up with a gradient and a small arrow icon slides in from the right
- Cards should have a **glassmorphism style**: semi-transparent dark background, 1px border with subtle white/brand color tint, backdrop blur
- On scroll into view: cards **stagger in** with Framer Motion — each card animates from opacity 0, y: 30 to opacity 1, y: 0, staggered by 60ms

**Framer Motion stagger pattern:**

```jsx
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};
```

---

### SECTION 6: RECENT WORKS (Full Redesign)

**Current state:** Plain text list of 6 project links. This is the weakest section on the site and needs the most work.

**Design Inspiration:** Active Theory project reveals + Awwwards project showcases.

**Recommended approach — Horizontal Scroll Cards with Preview:**

Replace the text list with a **horizontally scrollable project showcase**. On desktop, cards sit in a row and the user scrolls horizontally through them (use `overflow-x: scroll` with `scroll-snap-type: x mandatory`). On mobile, it stacks vertically.

**Each project card contains:**

- **Full-bleed screenshot** of the live site (use a screenshot service or manual captures at 1200×800px) as the card background image
- A **dark gradient overlay** from bottom (so text is readable)
- Project name (large, bold)
- A 1-line description of what was built
- Live site link with an arrow icon
- **On hover:** The background image **slowly zooms in** (scale 1 → 1.08, transition 600ms ease), the overlay darkens slightly, and a "View Project →" label slides up from the bottom with a translate + fade

**Alternative approach (if horizontal scroll doesn't fit the existing site feel) — Accordion/Expand List:**

Keep the list structure but make it dramatically better:

- Each project is a **full-width row** with the project name on the left and a subtle number on the right
- On hover: the row **expands** to reveal a preview image on the right side (slides in from the right, 400ms ease), the row background subtly highlights
- A thin **bottom border animates in width** from 0% to 100% on hover (left to right)
- This is the pattern used on many Awwwards-winning agency sites and feels incredibly premium with minimal markup

**Recommended: use the Accordion/Expand pattern** as it better matches the current minimal site aesthetic.

**Project data to use:**

```js
const projects = [
  {
    name: 'Hypetag',
    url: 'https://hypetag.com/',
    description: 'Brand collaboration platform',
  },
  {
    name: 'Bitsin Travels',
    url: 'https://www.bitsintravelsandtours.com/',
    description: 'Travel & tours booking experience',
  },
  {
    name: 'Gaming Website',
    url: 'https://gaming.centryos.xyz/',
    description: 'Immersive gaming landing page',
  },
  {
    name: 'Torrista',
    url: 'https://torrista.com.ng/',
    description: 'Nigerian e-commerce platform',
  },
  {
    name: 'Medicovestor',
    url: 'https://medicovestor.com/',
    description: 'Healthcare investment platform',
  },
  {
    name: 'CentryOS',
    url: 'https://centryos.xyz/',
    description: 'SaaS product landing page',
  },
];
```

---

### SECTION 7: RESULTS / STATS

**Design:** A single bold **stats bar** — dark background, 3–4 large numbers centered horizontally.

```
35%          50%          98           4+
Conversion   Faster       Core Web     Years
Increase     Interactions Vitals       Experience
```

**Animation:** Each number should **count up** from 0 to its final value when the section scrolls into view. Use a `useCountUp` hook triggered by Framer Motion's `useInView`.

**Visual treatment:** Numbers are very large (clamp(3rem, 8vw, 7rem)), bold, in brand color or white. Labels are small, muted, uppercase spaced. A thin horizontal rule or gradient divider above and below the section creates clean separation.

---

### SECTION 8: TESTIMONIALS

**Layout:** Dark section. Eyebrow: `[ KIND WORDS ]`. Heading: _"What clients say."_

- Display as **horizontally scrollable cards** (same pattern as projects, but smaller cards)
- Each card: quote text, client name, company/project name, optional avatar initial
- If no testimonials exist yet: **add placeholder cards** with `[Client Name]` and `[Company]` so the section structure is built and ready to be filled in
- Cards should have the **glassmorphism** treatment consistent with services cards
- Auto-scroll the carousel slowly (pausable on hover) — use CSS scroll animation or a simple JS interval

---

### SECTION 9: CONTACT / CTA

**Design Inspiration:** The "big closing statement" pattern used by agencies like Locomotive, BASIC/DEPT, and Fantasy Interactive.

**Layout:**

- Very large centered heading — something like: _"Got a project in mind?"_ — in massive display type that fills the viewport width (use `clamp` or `vw` units)
- Below it: a short subline — _"Let's build something worth remembering."_
- Two buttons side by side: **"Book a Free Call"** (primary, filled) and **"Send an Email"** (secondary, outlined)
- Behind the heading: a **slow-moving gradient mesh** animation — 3–4 radial gradient blobs animating their position/opacity with a 10–15s CSS keyframe loop. Very subtle, low opacity.
- The heading text itself should have a **gradient fill** (CSS `background-clip: text`) that slowly shifts hue — a gentle animated gradient text effect

**Remove** all "Book a Free Call" and "Let's Create Magic!" buttons from the hero and about sections — consolidate the CTA entirely into this section.

---

## ANIMATION PRINCIPLES — APPLY GLOBALLY

1. **No animation on page load except Hero** — everything else triggers on `whileInView` with `once: true` and a `viewport: { margin: "-100px" }` threshold
2. **Easing:** Always use custom cubic-bezier for premium feel: `[0.25, 0.1, 0.25, 1]` for entrances, `[0.4, 0, 0.2, 1]` for exits
3. **Duration sweet spot:** 400–600ms for most transitions. Never go above 800ms except for background/ambient animations
4. **Stagger pattern:** Always stagger child elements — never animate a group all at once
5. **No layout shift:** All animated elements should have their final dimensions set before animation starts (use `opacity` and `transform` only — never animate `height`, `width`, or `margin`)
6. **Scroll smoothness:** Implement `locomotive-scroll` or CSS `scroll-behavior: smooth` with `scroll-snap` on the projects section
7. **Reduced motion:** Wrap all Framer Motion animations with `useReducedMotion()` and provide static fallbacks for accessibility

---

## TECHNICAL REQUIREMENTS

- **Framework:** Next.js (App Router or Pages — match existing codebase)
- **Animation:** Framer Motion (already likely installed, if not: `npm install framer-motion`)
- **Icons:** Lucide React for UI icons, Devicons CDN for tech stack logos
- **Fonts:** Match existing fonts exactly — do not change typography
- **Colors:** Extract exact colors from the existing site before adding anything new — maintain the palette strictly
- **Performance:** All new images must use Next.js `<Image />` component. YouTube embed must have `loading="lazy"`. New sections must not increase LCP.
- **Responsive:** Every new section must be fully responsive — mobile-first. Test at 375px, 768px, 1280px, 1440px.
- **No external CSS libraries** (no Bootstrap, no Chakra) — use Tailwind CSS (or match existing styling approach)

---

## WHAT NOT TO DO

- Do not change the nav
- Do not change the footer
- Do not change the hero copy
- Do not change the about section copy
- Do not introduce a new color palette — extend what exists
- Do not add loading screens or page transitions that block content
- Do not use stock photos or generic illustrations
- Do not add any section that doesn't have a clear purpose for converting a client
- Do not make animations so complex they hurt performance — run Lighthouse after implementation and maintain 90+ score

---

## FINAL CHECKLIST BEFORE SUBMITTING

- [ ] All 9 new/enhanced sections implemented in correct order
- [ ] YouTube video embedded and visible without scrolling past the fold on most screens
- [ ] Skills marquee rows scrolling in alternating directions
- [ ] Projects section redesigned with hover preview (accordion or horizontal scroll)
- [ ] Stats counting up on scroll
- [ ] All animations use `whileInView` + `once: true`
- [ ] `useReducedMotion()` respected
- [ ] Lighthouse performance score ≥ 90
- [ ] Mobile responsive at 375px confirmed
- [ ] No existing content removed or modified
