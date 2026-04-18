import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-ink text-bone">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-bone text-ink font-display font-semibold">
              M
            </div>
            <div>
              <div className="font-display text-lg font-medium">Model Global Economic Summit</div>
              <div className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-glow">
                Bratislava · Feb 21–23, 2026
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-bone/60 leading-relaxed">
            A three-day student simulation of international economic institutions. Organised by
            students, for students aged 14–22.
          </p>
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="text-bone/70 hover:text-emerald-glow">About</Link></li>
            <li><Link to="/committees" className="text-bone/70 hover:text-emerald-glow">Committees</Link></li>
            <li><Link to="/schedule" className="text-bone/70 hover:text-emerald-glow">Schedule</Link></li>
            <li><Link to="/delegates" className="text-bone/70 hover:text-emerald-glow">Delegates</Link></li>
            <li><Link to="/secretariat" className="text-bone/70 hover:text-emerald-glow">Secretariat</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-bone/70">
            <li>info@mges.sk</li>
            <li>Bratislava, Slovakia</li>
            <li><Link to="/apply" className="text-emerald-glow hover:underline">Apply now →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.15em] text-bone/40">
          <div>© 2026 MGES · Model Global Economic Summit</div>
          <div>A student-led initiative</div>
        </div>
      </div>
    </footer>
  );
}
