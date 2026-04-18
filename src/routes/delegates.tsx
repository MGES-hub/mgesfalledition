import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Check, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/delegates")({
  head: () => ({
    meta: [
      { title: "For Delegates — MGES 2026" },
      { name: "description", content: "Everything delegates need: timeline, fees, position papers, dress code, prep materials." },
      { property: "og:title", content: "MGES 2026 — Delegate Information" },
      { property: "og:description", content: "Application timeline, fees, prep materials and conference policies for MGES delegates." },
    ],
  }),
  component: DelegatesPage,
});

function DelegatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For delegates"
        title="Everything you need to arrive prepared."
        intro="A practical guide to applying, preparing, and showing up ready to debate."
      />

      <section className="container-prose py-20">
        <div className="eyebrow">Timeline</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium">Key dates</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-px bg-border">
          {[
            { d: "01 Nov 25", t: "Applications open" },
            { d: "15 Dec 25", t: "Application deadline" },
            { d: "10 Jan 26", t: "Country & topic assignment" },
            { d: "10 Feb 26", t: "Position papers due" },
          ].map((s, i) => (
            <div key={s.d} className="bg-background p-6">
              <div className="font-mono text-xs text-emerald-accent">PHASE 0{i + 1}</div>
              <div className="mt-3 font-display text-xl">{s.d}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.t}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container-prose py-20 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow">Fees</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium">
              Transparent and accessible.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              The delegate fee covers all conference materials, three days of catering, and the
              welcome reception. Need-based waivers are available and reviewed confidentially.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { t: "Standard delegate", p: "€85", d: "All sessions, materials, lunches, reception." },
              { t: "Delegation (5+ from one school)", p: "€70", d: "Per delegate. Includes faculty advisor seat." },
              { t: "Need-based waiver", p: "€0", d: "Apply confidentially. ~15% of seats reserved." },
            ].map((f) => (
              <div
                key={f.t}
                className="flex items-baseline justify-between gap-6 p-6 bg-background rounded-sm border border-border"
              >
                <div>
                  <div className="font-medium">{f.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
                </div>
                <div className="font-display text-3xl font-medium text-emerald-accent">{f.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow">What to prepare</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium">Before you arrive</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Read your committee's background guide cover to cover",
              "Submit a 1-page position paper (strict deadline)",
              "Research your country's actual position on the topic",
              "Draft 2–3 working clauses you'd like to see in the resolution",
              "Bring a laptop or notepad — and a printed flag",
            ].map((i) => (
              <li key={i} className="flex gap-3 items-start">
                <Check className="h-5 w-5 text-emerald-accent shrink-0 mt-0.5" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="eyebrow">Conference policies</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium">House rules</h2>
          <dl className="mt-6 space-y-5">
            {[
              ["Dress code", "Western business attire. National dress welcomed."],
              ["Language", "All proceedings in English."],
              ["Devices", "Laptops permitted. No phones during formal session."],
              ["Code of conduct", "Zero tolerance for harassment. Independent reporting channel."],
            ].map(([t, d]) => (
              <div key={t} className="border-l-2 border-emerald-accent pl-4">
                <dt className="font-medium">{t}</dt>
                <dd className="text-muted-foreground mt-1">{d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-prose pb-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-ink text-bone rounded-sm">
          <div>
            <div className="eyebrow text-emerald-glow">Ready?</div>
            <h3 className="mt-2 font-display text-2xl">Submit your application in 3 minutes.</h3>
          </div>
          <Link
            to="/apply"
            className="inline-flex items-center gap-2 rounded-sm bg-emerald-accent px-6 py-3.5 text-sm font-medium text-ink hover:bg-emerald-glow transition-colors whitespace-nowrap"
          >
            Apply now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
