import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bg.jpg";
import bratislavaImg from "@/assets/bratislava-aerial.jpg";
import bricsLogo from "@/assets/committees/brics.png";
import ecosocLogo from "@/assets/committees/ecosoc.png";
import fomcLogo from "@/assets/committees/fomc.png";
import wtoLogo from "@/assets/committees/wto.png";
import { Countdown } from "@/components/countdown";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MGES 2026 — Model Global Economic Summit · Bratislava" },
      { name: "description", content: "A three-day student simulation of international economic institutions. Real macroeconomic policy debate. Bratislava, Feb 21–23, 2026." },
      { property: "og:title", content: "MGES 2026 — Model Global Economic Summit" },
      { property: "og:description", content: "Three days of macroeconomic policy debate, negotiation and strategy. For students 14–22." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const committees = [
  { code: "BRICS", name: "BRICS Summit", logo: bricsLogo },
  { code: "ECOSOC", name: "UN ECOSOC", logo: ecosocLogo },
  { code: "FOMC", name: "Federal Open Market Committee", logo: fomcLogo },
  { code: "WTO", name: "World Trade Organization", logo: wtoLogo },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-mges-navy text-mges-beige">
        <img
          src={heroImg}
          alt="MGES 2026 — Bratislava"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-mges-navy/55 via-mges-navy/70 to-mges-navy" />
        <div className="relative container-prose pt-24 pb-20 md:pt-36 md:pb-32">
          <div className="eyebrow">Bratislava · 21—23 Feb 2026</div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] text-balance max-w-4xl text-mges-gold">
            Simulating the future of <em className="not-italic">global economics.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-mges-beige/85 leading-relaxed">
            A three-day simulation focused on international economic policy. Represent states and
            institutions, negotiate solutions, draft resolutions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-sm bg-mges-royal px-6 py-3.5 text-sm font-medium text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
            >
              Apply as a delegate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-sm border border-mges-gold/40 px-6 py-3.5 text-sm font-medium text-mges-beige hover:bg-mges-gold/10 transition-colors"
            >
              What is MGES?
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-mges-gold/20">
            <div className="bg-mges-navy/40 backdrop-blur rounded-sm px-5 py-4 inline-block border border-mges-gold/20">
              <Countdown />
            </div>
          </div>
        </div>
      </section>

      {/* Our Committees — Partner Wall */}
      <section style={{ backgroundColor: "#1F3848" }} className="border-y border-mges-gold/15">
        <div className="container-prose py-16 md:py-20">
          <div className="text-center">
            <div className="eyebrow">The Floor</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-mges-gold">
              Our Committees
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-mges-gold/15">
            {committees.map((c) => (
              <Link
                key={c.code}
                to="/committees"
                className="group flex flex-col items-center justify-center gap-5 py-10 px-6 transition-colors hover:bg-mges-navy/40"
                style={{ backgroundColor: "#1F3848" }}
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="h-24 w-24 md:h-28 md:w-28 object-contain transition-transform group-hover:scale-105"
                />
                <div className="text-center">
                  <div className="font-display text-lg md:text-xl font-bold text-mges-gold leading-tight">
                    {c.code}
                  </div>
                  <div className="mt-1 text-xs md:text-sm text-mges-beige/80 leading-snug">
                    {c.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bratislava — compact location ribbon */}
      <section className="relative overflow-hidden border-b border-mges-gold/15">
        <img
          src={bratislavaImg}
          alt="Bratislava aerial at golden hour"
          width={1920}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mges-navy/95 via-mges-navy/75 to-mges-navy/40" />
        <div className="relative container-prose py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-xl">
            <div className="eyebrow">Hosted in</div>
            <h2 className="mt-2 font-display text-2xl md:text-4xl font-bold text-mges-gold leading-tight">
              Bratislava — at the heart of Central Europe.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-sm bg-mges-royal px-5 py-3 text-sm font-medium text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
            >
              Secure your seat
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 rounded-sm border border-mges-gold/50 px-5 py-3 text-sm font-medium text-mges-beige hover:bg-mges-gold/10 transition-colors"
            >
              See the schedule
            </Link>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">01 / What it is</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[1.05] text-balance text-mges-gold">
            Macroeconomic Governance, Not General Diplomacy.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
          <p className="text-2xl text-mges-beige font-medium">
            A specialized simulation of macroeconomic policy.
          </p>
          <p>Three days. Six committees. One conversation about how the global economy actually works.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-mges-charcoal border-y border-mges-gold/15">
        <div className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="eyebrow">02 / Why it matters</div>
            <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[1.05] text-balance text-mges-gold">
              Economics Is Geopolitics.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
            <p className="text-2xl text-mges-beige font-medium">
              The seat, the brief, and the burden of decision-making.
            </p>
            <p>From central bank coordination to sovereign restructuring — the decisions that shape billions of lives.</p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">03 / Who it's for</div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl font-bold leading-[1.05] text-balance text-mges-gold">
            Rigour for the 14–22 Age Range.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
          <p className="text-2xl text-mges-beige font-medium">
            Committed high-schoolers and undergraduates.
          </p>
          <p>Economics, IR, public policy — or simply curious and prepared. First-time delegates and veteran chairs alike.</p>
        </div>
      </section>
    </>
  );
}
