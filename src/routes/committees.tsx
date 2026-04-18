import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: "Committees — MGES 2026" },
      { name: "description", content: "Six specialised economic committees: IMF, WTO, OECD, G20, UNCTAD, ECOFIN. Choose your seat." },
      { property: "og:title", content: "MGES 2026 Committees" },
      { property: "og:description", content: "Six committees covering global economic policy: IMF, WTO, OECD, G20, UNCTAD, ECOFIN." },
    ],
  }),
  component: CommitteesPage,
});

const committees = [
  {
    code: "IMF",
    name: "International Monetary Fund",
    level: "Advanced",
    seats: 36,
    topic: "Sovereign debt restructuring in an era of higher-for-longer rates",
    summary:
      "Delegates negotiate frameworks for the orderly restructuring of distressed sovereigns, balancing creditor recovery, growth recovery, and political feasibility.",
  },
  {
    code: "WTO",
    name: "World Trade Organization",
    level: "Intermediate",
    seats: 32,
    topic: "Industrial policy, subsidies, and the future of the rules-based trading system",
    summary:
      "From CHIPS to CBAM, delegates confront a wave of unilateral industrial policy and ask what a credible multilateral response looks like.",
  },
  {
    code: "OECD",
    name: "Org. for Economic Co-operation and Development",
    level: "Intermediate",
    seats: 28,
    topic: "Pillar Two and the global minimum tax — implementation and exceptions",
    summary:
      "Delegates negotiate the next steps of the global minimum corporate tax, addressing carve-outs, dispute resolution, and developing-country concerns.",
  },
  {
    code: "G20",
    name: "G20 Finance Ministers & Central Bank Governors",
    level: "Advanced",
    seats: 24,
    topic: "Coordinating monetary and fiscal policy in a fragmented global economy",
    summary:
      "A high-level cabinet committee. Real-time crisis simulation. Joint communiqués drafted line by line.",
  },
  {
    code: "UNCTAD",
    name: "UN Conference on Trade and Development",
    level: "Beginner",
    seats: 32,
    topic: "Financing the green transition in the Global South",
    summary:
      "Delegates draft proposals on concessional finance, technology transfer, and trade-led climate adaptation. The committee best suited to first-time delegates.",
  },
  {
    code: "ECOFIN",
    name: "EU Economic and Financial Affairs Council",
    level: "Intermediate",
    seats: 28,
    topic: "The Capital Markets Union — completing Europe's single market for finance",
    summary:
      "EU member states debate harmonising capital markets, with implications for euro-area savings, investment, and strategic autonomy.",
  },
];

function CommitteesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Committees"
        title="Six rooms. Six economic mandates. One global conversation."
        intro="Each committee runs across all three days. Topics are released six weeks before the conference together with detailed background guides."
      />

      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {committees.map((c) => (
            <article
              key={c.code}
              className="bg-background p-8 md:p-10 group flex flex-col"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-display text-5xl md:text-6xl font-medium tracking-tight text-foreground">
                  {c.code}
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-emerald-accent">
                    {c.level}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground mt-1">
                    {c.seats} seats
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">{c.name}</div>
              <div className="mt-8 pt-6 border-t border-border">
                <div className="eyebrow">Topic</div>
                <h3 className="mt-2 font-display text-xl font-medium leading-snug text-balance">
                  {c.topic}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-ink text-bone rounded-sm">
          <div>
            <div className="eyebrow text-emerald-glow">Background guides</div>
            <h3 className="mt-2 font-display text-2xl">
              Released to confirmed delegates · January 10, 2026
            </h3>
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
