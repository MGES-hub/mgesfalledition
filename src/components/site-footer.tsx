import { Link } from "@tanstack/react-router";
import { MgesLogo } from "@/components/mges-logo";
import { Instagram } from "lucide-react";

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
                Bratislava · September 25–27, 2026
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
            <li><a href="mailto:mges.organizers@gmail.com" className="hover:text-mges-gold transition-colors">mges.organizers@gmail.com</a></li>
            <li>Bratislava, Slovakia</li>
            <li><a href="https://mymun.com/conferences/mges-fall-edition-2026/apply" target="_blank" rel="noopener noreferrer" className="text-mges-gold hover:underline">Apply now →</a></li>
          </ul>
          <div className="mt-4">
            <a
              href="https://www.instagram.com/mgesummit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MGES on Instagram"
              className="inline-flex items-center gap-2 text-sm text-mges-beige/70 hover:text-mges-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
              <span>mgesummit</span>
            </a>
          </div>
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
