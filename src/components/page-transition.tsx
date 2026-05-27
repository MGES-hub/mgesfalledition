import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const resolvedPath = useRouterState({
    select: (s) => s.resolvedLocation?.pathname ?? s.location.pathname,
  });
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  }, [resolvedPath, reduce]);

  const exiting = isLoading;

  return (
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
          duration: reduce ? 0.2 : exiting ? 0.35 : 0.8,
          ease: [0.12, 1, 0.28, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}