import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/delegates")({
  head: () => ({
    meta: [
      { title: "For Delegates — MGES 2026" },
      { name: "description", content: "Conference fees, application deadlines and registration details for MGES 2026 delegates, head delegates, faculty advisors and observers." },
      { property: "og:title", content: "MGES 2026 — Delegate Information" },
      { property: "og:description", content: "Transparent fees and clear deadlines for delegates, delegations, faculty advisors and observers." },
    ],
  }),
  component: DelegatesPage,
});

type FeeRow = { label: string; price: string; note?: string };
type FeeGroup = { title: string; rows: FeeRow[] };

const feeGroups: FeeGroup[] = [
  {
    title: "Individual Delegates",
    rows: [{ label: "Delegate Fee", price: "€45.00" }],
  },
  {
    title: "Delegations",
    rows: [
      { label: "Head Delegate Fee", price: "€45.00" },
      { label: "Delegation Fee", price: "€30.00", note: "per delegate" },
      { label: "Faculty Advisor Fee", price: "€45.00" },
    ],
  },
  {
    title: "Observers",
    rows: [{ label: "Observer Fee", price: "€45.00" }],
  },
];

const deadlines = [
  {
    role: "Delegates & Observers",
    window: "April 2, 2026 – September 23, 2026",
  },
  {
    role: "Head Delegates & Faculty Advisors",
    window: "April 2, 2026 – September 18, 2026",
  },
];

function DelegatesPage() {
  return (
    <>
      <PageHeader
        eyebrow="For delegates"
        title="Conference fees & application deadlines."
        intro="Transparent pricing and clear timelines for every role at MGES 2026 — from individual delegates to full delegations, faculty advisors and observers."
      />

      {/* Conference Fees */}
      <section className="container-prose py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="eyebrow">01 / Pricing</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-mges-gold">
              Conference Fees
            </h2>
          </div>
          <p className="max-w-md text-mges-beige/75 leading-relaxed">
            All fees are listed in EUR and cover the full three-day program, materials and catering.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-mges-gold/20 border border-mges-gold/25 lg:grid-cols-3">
          {feeGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col bg-mges-steel p-8 md:p-10"
            >
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-mges-gold/80">
                Category
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-mges-gold">
                {group.title}
              </h3>
              <div className="mt-6 h-px w-full bg-mges-gold/30" />
              <ul className="mt-6 space-y-5 flex-1">
                {group.rows.map((r) => (
                  <li
                    key={r.label}
                    className="flex items-baseline justify-between gap-4 border-b border-mges-gold/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div>
                      <div className="font-medium text-mges-beige">{r.label}</div>
                      {r.note && (
                        <div className="text-xs text-mges-beige/60 mt-1">{r.note}</div>
                      )}
                    </div>
                    <div className="font-display text-2xl font-bold text-mges-gold whitespace-nowrap">
                      {r.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Application Deadlines */}
      <section className="bg-mges-charcoal border-y border-mges-gold/15">
        <div className="container-prose py-20 md:py-28">
          <div className="eyebrow">02 / Timeline</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-mges-gold">
            Application Deadlines
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {deadlines.map((d) => (
              <div
                key={d.role}
                className="border border-mges-gold/25 bg-mges-navy/40 p-8 md:p-10 rounded-sm"
              >
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-mges-gold/80">
                  Application window
                </div>
                <h3 className="mt-4 font-display text-2xl md:text-3xl font-bold text-mges-gold leading-tight">
                  {d.role}
                </h3>
                <div className="mt-6 h-px w-16 bg-mges-gold" />
                <p
                  className="mt-6 font-display text-xl md:text-2xl font-medium leading-snug"
                  style={{ color: "#E0D5BD" }}
                >
                  {d.window}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="container-prose py-20 md:py-28">
        <div className="border border-mges-gold/30 bg-mges-steel p-10 md:p-16 rounded-sm text-center">
          <div className="eyebrow">Ready to take your seat?</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-bold text-mges-gold leading-[1.05] text-balance">
            Secure your spot at MGES 2026.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-mges-beige/80 leading-relaxed">
            Applications are processed through mymun — the official MUN registration platform.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="https://mymun.com/conferences/mges-fall-edition-2026/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-[15px] bg-mges-gold px-8 py-4 text-base font-semibold text-mges-navy hover:bg-mges-beige transition-colors shadow-lg"
            >
              Register on mymun
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
