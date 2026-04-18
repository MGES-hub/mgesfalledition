import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import chartImg from "@/assets/chart-motif.jpg";
import bratislavaImg from "@/assets/bratislava.jpg";
import { Countdown } from "@/components/countdown";
import { ArrowRight, TrendingUp, Globe2, Users, Scale } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MGES 2026 — Model Global Economic Summit · Bratislava" },
      { name: "description", content: "A three-day student simulation of international economic institutions. Real macroeconomic policy debate. Bratislava, Feb 21–23, 2026." },
      { property: "og:title", content: "MGES 2026 — Model Global Economic Summit" },
      { property: "og:description", content: "Three days of macroeconomic policy debate, negotiation and strategy. For students 14–22." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-bone">
        <img
          src={heroImg}
          alt="Empty assembly hall"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="relative container-prose pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="eyebrow text-emerald-glow">Bratislava · 21—23 Feb 2026</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.92] text-balance max-w-4xl">
            Simulating the future of <em className="text-emerald-glow not-italic">global economics.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-bone/70 leading-relaxed">
            A three-day simulation focused on international economic policy. Represent states and
            institutions, negotiate solutions, draft resolutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-sm bg-emerald-accent px-6 py-3.5 text-sm font-medium text-ink hover:bg-emerald-glow transition-colors"
            >
              Apply as a delegate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-sm border border-bone/20 px-6 py-3.5 text-sm font-medium text-bone hover:bg-bone/5 transition-colors"
            >
              What is MGES?
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-bone/10">
            <div className="bg-bone/5 backdrop-blur rounded-sm px-5 py-4 inline-block">
              <div className="text-bone">
                <CountdownInverted />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats ribbon */}
      <section className="border-b border-border bg-card">
        <div className="container-prose py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: "3", l: "Days of debate" },
            { v: "6", l: "Committees" },
            { v: "180+", l: "Delegate seats" },
            { v: "20+", l: "Nations represented" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <div className="font-display text-4xl md:text-5xl font-medium">{s.v}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is MGES */}
      <section className="container-prose py-24 md:py-32 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">01 / What it is</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Unlike traditional Model UN, MGES focuses exclusively on economic policy-making.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Participants represent states and economic institutions, analyse global issues, debate
            policy options, and negotiate solutions in a structured setting. It is a specialised
            simulation of macroeconomic governance — not generalist diplomacy.
          </p>
          <p className="text-foreground">
            Three days. Six committees. One sustained, rigorous conversation about how the global
            economy actually works.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {[
              { icon: TrendingUp, t: "Real macroeconomics", d: "Inflation, trade, sovereign debt." },
              { icon: Globe2, t: "Global institutions", d: "IMF, WTO, OECD, G20." },
              { icon: Scale, t: "Policy debate", d: "Substantive, evidence-based." },
              { icon: Users, t: "Negotiation", d: "Draft, lobby, vote, resolve." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="border-l-2 border-emerald-accent pl-4 py-1">
                <Icon className="h-4 w-4 text-emerald-accent mb-2" />
                <div className="text-sm font-medium text-foreground">{t}</div>
                <div className="text-sm text-muted-foreground">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break: chart */}
      <section className="bg-ink text-bone">
        <div className="container-prose py-24 md:py-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow text-emerald-glow">02 / Why it matters</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              Economics is not a side panel of geopolitics. It <em className="not-italic text-emerald-glow">is</em> geopolitics.
            </h2>
            <p className="mt-6 text-bone/70 leading-relaxed">
              From central bank coordination to sovereign restructuring, the decisions made by
              economic institutions shape the lives of billions. MGES gives students the seat, the
              brief, and the burden of making those decisions.
            </p>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm border border-bone/10">
            <img
              src={chartImg}
              alt="Stylised economic chart"
              width={1280}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container-prose py-24 md:py-32">
        <div className="eyebrow">03 / Who it's for</div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-[1.05] max-w-3xl text-balance">
          MGES is for students who want the rigour, not just the resume.
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border">
          {[
            { n: "14—22", t: "Age range", d: "From committed high-schoolers to advanced undergraduates." },
            { n: "Any field", t: "Background", d: "Economics, IR, public policy — or simply curious and prepared." },
            { n: "All levels", t: "Experience", d: "First-time delegates and veteran chairs alike." },
          ].map((c) => (
            <div key={c.t} className="bg-background p-8">
              <div className="font-display text-3xl font-medium text-emerald-accent">{c.n}</div>
              <div className="mt-3 text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground">
                {c.t}
              </div>
              <p className="mt-4 text-base text-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Bratislava */}
      <section className="relative overflow-hidden bg-card border-y border-border">
        <div className="container-prose grid lg:grid-cols-2 gap-12 py-24 md:py-32 items-center">
          <div>
            <div className="eyebrow">Hosted in</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              Bratislava — at the heart of Central Europe.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Three days at historic venues across the Slovak capital. A city built at the
              crossroads of currencies, treaties, and trade routes — the right backdrop for the
              conversation we're hosting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-bone hover:bg-emerald-accent transition-colors"
              >
                Secure your seat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-medium hover:bg-secondary transition-colors"
              >
                See the schedule
              </Link>
            </div>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={bratislavaImg}
              alt="Bratislava skyline"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function CountdownInverted() {
  return <Countdown />;
}
