import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/committees", label: "Committees" },
  { to: "/schedule", label: "Schedule" },
  { to: "/delegates", label: "Delegates" },
  { to: "/secretariat", label: "Secretariat" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-prose flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-bone font-display font-semibold">
            M
          </div>
          <div className="leading-none">
            <div className="font-display text-base font-semibold tracking-tight">MGES</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              2026
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-sm bg-ink px-4 py-2.5 text-sm font-medium text-bone hover:bg-emerald-accent transition-colors"
          >
            Apply
            <span className="text-emerald-glow">→</span>
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-border/60 transition-all duration-300",
          open ? "max-h-[600px]" : "max-h-0",
        )}
      >
        <nav className="container-prose flex flex-col py-4 gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-muted-foreground"
              activeProps={{ className: "py-2.5 text-sm text-foreground font-medium" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-sm bg-ink px-4 py-3 text-sm font-medium text-bone"
          >
            Apply as Delegate →
          </Link>
        </nav>
      </div>
    </header>
  );
}
