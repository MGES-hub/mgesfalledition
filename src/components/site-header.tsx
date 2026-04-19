import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MgesLogo } from "@/components/mges-logo";

const links = [
  { to: "/", label: "Home", icon: "🏛️" },
  { to: "/committees", label: "Committees", icon: "🌍" },
  { to: "/schedule", label: "Schedule", icon: "🗓️" },
  { to: "/delegates", label: "Delegates", icon: "🎓" },
  { to: "/secretariat", label: "Secretariat", icon: "👔" },
  { to: "/sponsors", label: "Sponsors", icon: "🤝" },
  { to: "/gallery", label: "Gallery", icon: "📸" },
  { to: "/contact", label: "Contact", icon: "✉️" },
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
            className="inline-flex items-center gap-2 rounded-sm bg-mges-royal px-5 py-2.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
          >
            <span>🎯</span>
            Apply
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-mges-gold text-2xl leading-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
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
              className="py-2.5 text-sm text-mges-beige/75 flex items-center gap-3"
              activeProps={{ className: "py-2.5 text-sm text-mges-gold font-semibold flex items-center gap-3" }}
            >
              <span>{l.icon}</span>
              {l.label}
            </Link>
          ))}
          <Link
            to="/apply"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-mges-royal px-4 py-3 text-sm font-semibold text-mges-beige"
          >
            <span>🎯</span> Apply as Delegate
          </Link>
        </nav>
      </div>
    </header>
  );
}
