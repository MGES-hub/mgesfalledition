## Goal
Add smooth page transitions when navigating between routes (/, /committees, /delegates, /schedule, /secretariat), plus subtle on-scroll reveal polish so subpages feel less abrupt.

## Approach
Use `framer-motion` (already common in the stack) for a single shared transition wrapper driven by the current route pathname.

## Changes

1. **Install dependency**
   - `bun add framer-motion`

2. **New component `src/components/page-transition.tsx`**
   - Wraps `children` in `AnimatePresence mode="wait"`.
   - Uses `useRouterState()` to get current `location.pathname` as the motion key.
   - Animation: fade + 8px upward slide, ~280ms, easeOut. Exit: fade out ~180ms.
   - Respects `prefers-reduced-motion` (skips transform, keeps instant fade).

3. **`src/routes/__root.tsx`**
   - Wrap `<Outlet />` inside `<main>` with `<PageTransition>`.
   - Also scroll to top on route change (small effect inside the wrapper) so long subpages don't open mid-scroll.

4. **Optional polish (light touch, no per-route refactor)**
   - Add a global CSS rule in `src/styles.css` for `html { scroll-behavior: smooth }` so in-page hash links also feel smoother.

## Out of scope
- No per-section scroll-reveal animations on every subpage (would require touching each route). Can be added later if desired.
- No changes to header/footer.

## Files touched
- `package.json` (via bun add)
- `src/components/page-transition.tsx` (new)
- `src/routes/__root.tsx` (wrap Outlet)
- `src/styles.css` (one line)
