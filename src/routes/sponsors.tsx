import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Partners & Sponsors — MGES 2026" },
      { name: "description", content: "Institutions and organisations supporting the Model Global Economic Summit 2026." },
      { property: "og:title", content: "MGES 2026 Partners" },
      { property: "og:description", content: "Our supporting institutions, academic partners, and sponsors." },
    ],
  }),
  component: SponsorsPage,
});

const tiers = [
  {
    label: "Headline partner",
    items: ["National Bank of Slovakia"],
  },
  {
    label: "Academic partners",
    items: [
      "Comenius University, Faculty of Economics",
      "University of Economics Bratislava",
      "Central European University",
    ],
  },
  {
    label: "Institutional supporters",
    items: [
      "Ministry of Finance SR",
      "Slovak Chamber of Commerce",
      "European Commission Representation",
      "Bratislava Tourist Board",
    ],
  },
  {
    label: "Media partners",
    items: ["Trend.sk", "Index.sk", "Forbes Slovakia"],
  },
];

function SponsorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partners"
        title="Built with the institutions that take economics seriously."
        intro="MGES is supported by central banks, universities, and ministries who share our belief that economic literacy is a civic skill."
      />

      <section className="container-prose py-20 space-y-16">
        {tiers.map((t) => (
          <div key={t.label}>
            <div className="eyebrow">{t.label}</div>
            <div className="mt-4 ticker-divider" />
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.items.map((i) => (
                <div
                  key={i}
                  className="bg-card border border-border p-6 rounded-sm hover:border-emerald-accent transition-colors"
                >
                  <div className="font-display text-lg leading-tight">{i}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-ink text-bone">
        <div className="container-prose py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow text-emerald-glow">Become a partner</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight">
              Support a generation of economically literate citizens.
            </h2>
          </div>
          <div className="text-bone/70 leading-relaxed">
            <p>
              Sponsorship tiers run from materials support to headline partnership and include
              speaking slots, booth presence, and recruiting access to a self-selected pool of
              economics-minded students from across Europe.
            </p>
            <p className="mt-4">
              Write to <span className="text-emerald-glow">partners@mges.sk</span> for the prospectus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
