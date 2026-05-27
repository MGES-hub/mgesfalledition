import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  }, [pathname, reduce]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: reduce ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduce ? 0 : -8 }}
        transition={{
          duration: reduce ? 0.2 : 0.55,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}