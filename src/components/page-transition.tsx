import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouter, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const resolvedPath = useRouterState({
    select: (s) => s.resolvedLocation?.pathname ?? s.location.pathname,
  });
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const [isCovering, setIsCovering] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const shouldCoverNavigation = (event: MouseEvent | PointerEvent) => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) {
        return false;
      }

      const anchor = (event.target as Element | null)?.closest("a[href]");
      if (!anchor || anchor.getAttribute("target") || anchor.hasAttribute("download")) return false;

      const nextUrl = new URL(anchor.getAttribute("href") ?? "", window.location.href);
      const currentUrl = new URL(window.location.href);

      return (
        nextUrl.origin === currentUrl.origin &&
        (nextUrl.pathname !== currentUrl.pathname || nextUrl.search !== currentUrl.search)
      );
    };

    const startCover = (event: MouseEvent | PointerEvent) => {
      if (shouldCoverNavigation(event)) setIsCovering(true);
    };

    window.addEventListener("pointerdown", startCover, { capture: true });
    window.addEventListener("click", startCover, { capture: true });

    const unsubscribeBeforeNavigate = router.subscribe("onBeforeNavigate", (event) => {
      if (event.pathChanged || event.hrefChanged) setIsCovering(true);
    });

    const unsubscribeResolved = router.subscribe("onResolved", () => {
      window.setTimeout(() => setIsCovering(false), reduce ? 80 : 220);
    });

    return () => {
      window.removeEventListener("pointerdown", startCover, { capture: true });
      window.removeEventListener("click", startCover, { capture: true });
      unsubscribeBeforeNavigate();
      unsubscribeResolved();
    };
  }, [reduce, router]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  }, [resolvedPath, reduce]);

  const exiting = isLoading || isCovering;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={resolvedPath}
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          animate={
            exiting
              ? { opacity: 0, y: reduce ? 0 : -12 }
              : { opacity: 1, y: 0 }
          }
          exit={{ opacity: 0, y: reduce ? 0 : -12 }}
          transition={{
            duration: reduce ? 0.2 : exiting ? 0.45 : 0.9,
            ease: [0.12, 1, 0.28, 1],
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {isCovering && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[60] bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: reduce ? 1 : 0.96 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reduce ? 0.12 : 0.7,
              ease: [0.12, 1, 0.28, 1],
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}