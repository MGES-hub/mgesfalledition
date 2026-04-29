import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MgesLogo } from "@/components/mges-logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/committees", label: "Committees" },
  { to: "/schedule", label: "Schedule" },
  { to: "/delegates", label: "Delegates" },
  { to: "/secretariat", label: "Secretariat" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-mges-gold/25 bg-mges-navy/85 backdrop-blur-md">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <MgesLogo className="h-12 w-12 md:h-14 md:w-14" />
          <div className="leading-tight hidden sm:block">
            <div className="font-display text-lg md:text-xl font-bold tracking-tight text-mges-gold">MGES</div>
            <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-mges-beige/60">
              Bratislava · 2026
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-mges-beige/70 hover:text-mges-gold transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-mges-gold" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/apply"
          className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-5 py-2.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
          >
            Apply
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-mges-gold text-2xl leading-none font-mono"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-mges-gold/20 transition-all duration-300",
          open ? "max-h-[700px]" : "max-h-0",
        )}
      >
        <nav className="container-prose flex flex-col py-4 gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              onClick={() => setOpen(false)}
              className="py-2.5 text-sm text-mges-beige/75"
              activeProps={{ className: "py-2.5 text-sm text-mges-gold font-semibold" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-4 py-3 text-sm font-semibold text-mges-beige"
          >
            Apply as Delegate
          </Link>
        </nav>
      </div>
    </header>
  );
}
