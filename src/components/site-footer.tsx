import { Link } from "@tanstack/react-router";
import { MgesLogo } from "@/components/mges-logo";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-mges-gold/25 bg-mges-charcoal text-mges-beige">
      <div className="container-prose py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4">
            <MgesLogo className="h-16 w-16" />
            <div>
              <div className="font-display text-xl font-bold text-mges-gold">Model Global Economic Summit</div>
              <div className="text-xs font-mono uppercase tracking-[0.22em] text-mges-gold/70 mt-1">
                Bratislava · Feb 21–23, 2026
              </div>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm text-mges-beige/65 leading-relaxed">
            A three-day student simulation of international economic institutions. Convened by
            students, for students aged 14–22 — with the rigour the subject deserves.
          </p>
        </div>

        <div>
          <div className="eyebrow">Navigate</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/committees" className="text-mges-beige/70 hover:text-mges-gold transition-colors">Committees</Link></li>
            <li><Link to="/schedule" className="text-mges-beige/70 hover:text-mges-gold transition-colors">Schedule</Link></li>
            <li><Link to="/delegates" className="text-mges-beige/70 hover:text-mges-gold transition-colors">Delegates</Link></li>
            <li><Link to="/secretariat" className="text-mges-beige/70 hover:text-mges-gold transition-colors">Secretariat</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-mges-beige/70">
            <li className="flex items-center gap-2"><span>✉️</span> info@mges.sk</li>
            <li className="flex items-center gap-2"><span>📍</span> Bratislava, Slovakia</li>
            <li><Link to="/apply" className="text-mges-gold hover:underline">Apply now →</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-mges-gold/15">
        <div className="container-prose py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono uppercase tracking-[0.18em] text-mges-beige/45">
          <div>© 2026 MGES · Model Global Economic Summit</div>
          <div>A student-led initiative</div>
        </div>
      </div>
    </footer>
  );
}
