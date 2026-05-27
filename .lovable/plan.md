# Fix late page transitions

## Problem
`PageTransition` keys its animation off `location.pathname`, which only updates **after** the next route's loader resolves. So during the loader wait, the old page stays fully visible — then the exit/enter animation runs. Result: "I see the whole page, then the transition starts."

## Fix
Start the exit animation as soon as navigation begins, and let the new page fade in once it's ready.

### Changes to `src/components/page-transition.tsx`
1. Read `isLoading` (or `status`) and `resolvedLocation` from `useRouterState` in addition to `location`.
2. While the router is navigating (`isLoading === true`), render the outgoing children inside a `motion.div` whose `animate` state is the exit state (opacity 0, slight y). This makes the old page begin fading the instant the user clicks.
3. Key the inner `motion.div` off `resolvedLocation.pathname` (the route actually rendered) so `AnimatePresence` swaps cleanly once the new route is ready.
4. Keep `mode="wait"` and the existing 0.8s ease curve, but shorten the *exit* duration (~0.35s) so the old page clears quickly and the new one isn't delayed by a long fade-out on top of the loader wait.
5. Remove `initial={false}` so the first page load also gets a gentle fade-in after hydration (optional — can keep if you prefer no entry animation on hard refresh).

### Optional polish
- In `src/router.tsx`, set `defaultPreload: "intent"` and `defaultPreloadStaleTime: 0` (if not already) so hovering a link warms the loader and the perceived wait shrinks.
- Add a tiny top progress bar (or just rely on the fade) for routes whose loaders take >300ms, so long waits don't feel frozen.

## Out of scope
- No changes to individual route loaders or data fetching.
- No design/layout changes.

## Technical notes
- `useRouterState({ select: s => s.isLoading })` re-renders only on nav state changes — cheap.
- `resolvedLocation` is TanStack Router's "currently rendered" location, distinct from `location` (the target). Keying off it ensures `AnimatePresence` swaps exactly when the new tree mounts.
