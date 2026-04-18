import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MGES — Mission, format & values" },
      { name: "description", content: "MGES is a student simulation of international economic institutions. Mission, format, history." },
      { property: "og:title", content: "About MGES 2026" },
      { property: "og:description", content: "Three days of rigorous economic policy debate. Learn about our mission, format, and values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A specialised simulation of macroeconomic governance."
        intro="MGES brings together students aged 14–22 to step into the rooms where the global economy is debated — and to do it with the rigour the subject deserves."
      />

      <section className="container-prose py-20 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <div className="eyebrow">Our mission</div>
        </div>
        <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed">
          <p>
            We believe economic literacy is a civic skill. The decisions of central banks, finance
            ministries, and multilateral lenders shape opportunity at every scale — and yet most
            students never get to examine them up close.
          </p>
          <p className="text-muted-foreground">
            MGES exists to change that. Over three days, delegates wrestle with the same questions
            that occupy the IMF, the WTO, and the G20: how to stabilise prices, how to restructure
            debt, how to coordinate across borders when interests diverge. We treat young people
            as serious thinkers, and we structure the conference to match.
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="container-prose py-20 grid md:grid-cols-3 gap-12">
          {[
            {
              n: "01",
              t: "Substance over spectacle",
              d: "Position papers are read. Speeches are timed. Resolutions are workshopped, not theatre.",
            },
            {
              n: "02",
              t: "Specialisation",
              d: "Every committee sits within the economic domain. No general assembly, no parallel tracks.",
            },
            {
              n: "03",
              t: "Access",
              d: "Need-based fee waivers and a transparent application process keep the room open.",
            },
          ].map((v) => (
            <div key={v.n}>
              <div className="font-mono text-sm text-emerald-accent">{v.n}</div>
              <h3 className="mt-3 font-display text-2xl font-medium">{v.t}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="eyebrow">Format</div>
        <h2 className="mt-4 font-display text-4xl font-medium max-w-3xl text-balance">
          Three days. Six committees. One sustained conversation.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-8 text-base">
          {[
            ["Position papers", "Submitted in advance. Reviewed by chairs. Required to vote."],
            ["Opening speeches", "60 seconds per delegate. Set the agenda."],
            ["Moderated debate", "Speakers list, points of information, formal procedure."],
            ["Unmoderated caucus", "Lobbying, bloc-building, draft drafting."],
            ["Working papers", "Submitted, merged, amended."],
            ["Voting procedure", "Roll call, simple and qualified majority."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-emerald-accent pl-4">
              <div className="font-medium">{t}</div>
              <div className="text-muted-foreground mt-1">{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
