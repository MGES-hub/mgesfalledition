import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-bg.jpg";
import bratislavaImg from "@/assets/bratislava-panorama-home.png";
import bricsLogo from "@/assets/committees/home/brics.png";
import hesocLogo from "@/assets/committees/home/hesoc.png";
import fomcLogo from "@/assets/committees/home/fomc.png";
import wtoLogo from "@/assets/committees/home/wto.png";
import { SocialProofRibbon } from "@/components/social-proof-ribbon";
import { Countdown } from "@/components/countdown";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MGES 2026 — Model Global Economic Summit · Bratislava" },
      { name: "description", content: "A three-day student simulation of international economic institutions. Real macroeconomic policy debate. Bratislava, September 25–27, 2026." },
      { property: "og:title", content: "MGES 2026 — Model Global Economic Summit" },
      { property: "og:description", content: "Three days of macroeconomic policy debate, negotiation and strategy. For students 14–22." },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

const committees = [
  { code: "FOMC", name: "Federal Open Market Committee", logo: fomcLogo },
  { code: "BRICS", name: "BRICS", logo: bricsLogo },
  { code: "WTO", name: "World Trade Organization", logo: wtoLogo },
  { code: "HESOC", name: "Historical Economic & Social Council", logo: hesocLogo },
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
          <div className="font-mono text-sm font-medium uppercase tracking-[0.26em] text-mges-gold md:text-base">
            Bratislava · 25—27 September 2026
          </div>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl leading-[0.92] font-bold tracking-tight text-mges-gold md:text-7xl lg:text-8xl">
            <span className="block">MGES Fall Edition 2026:</span>
            <span className="mt-4 block text-3xl leading-[1] md:text-5xl lg:text-6xl">
              Navigating the New Economic Frontier.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-mges-beige/85 leading-relaxed">
            Building on the success of our previous summit, we return to Bratislava for a high-stakes
            simulation of global financial governance.
          </p>
          <div className="mt-8 inline-flex border border-mges-gold/30 bg-mges-navy/60 px-5 py-4 backdrop-blur-sm">
            <Countdown />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-6 py-3.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
            >
              Apply for Fall Edition 2026
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/committees"
              className="inline-flex items-center gap-2 rounded-[15px] border border-mges-gold/40 px-6 py-3.5 text-sm font-medium text-mges-beige hover:bg-mges-gold/10 transition-colors"
            >
              Explore committees
            </Link>
          </div>
        </div>
      </section>

      <SocialProofRibbon />

      {/* Bratislava — compact location ribbon */}
      <section className="relative overflow-hidden border-b border-mges-gold/15">
        <img
          src={bratislavaImg}
          alt="Bratislava panorama at golden hour"
          width={1920}
          height={768}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mges-navy/95 via-mges-navy/75 to-mges-navy/40" />
        <div className="relative container-prose flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div className="max-w-xl">
            <div className="eyebrow">Hosted in</div>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-mges-gold md:text-4xl">
              Bratislava — at the heart of Central Europe.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/apply"
              className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-5 py-3 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
            >
              Secure your seat
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/schedule"
              className="inline-flex items-center gap-2 rounded-[15px] border border-mges-gold/50 px-5 py-3 text-sm font-medium text-mges-beige hover:bg-mges-gold/10 transition-colors"
            >
              See the schedule
            </Link>
          </div>
        </div>
      </section>

      {/* Our Committees — Partner Wall */}
      <section className="bg-mges-navy border-y border-mges-gold/15">
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
                className="group flex flex-col items-center justify-center gap-5 py-10 px-6 bg-mges-navy transition-colors hover:bg-mges-gold/5"
              >
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={160}
                  height={160}
                  loading="lazy"
                  className="h-24 w-24 md:h-28 md:w-28 object-cover rounded-full bg-mges-beige/5 transition-transform group-hover:scale-105"
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

      {/* What it is */}
      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance text-mges-gold">
            What it is
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
          <p className="text-2xl text-mges-beige font-medium">
            Real economics. Real stakes.
          </p>
          <p>A premier three-day simulation of global financial governance. Moving beyond general diplomacy, MGES focuses exclusively on macroeconomic policy, central banking, and international trade. Delegates represent major economies and institutions to negotiate the fiscal and monetary solutions that shape the modern world.</p>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-mges-charcoal border-y border-mges-gold/15">
        <div className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance text-mges-gold">
              Why it matters
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
            <p className="text-2xl text-mges-beige font-medium">
              Money is power.
            </p>
            <p>In a globalized landscape, economic policy is the foundation of geopolitics. From interest rate hikes to trade sanctions, the decisions made in these rooms determine the wealth and stability of nations. Understanding these levers is essential for any future leader in finance, law, or international relations.</p>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="container-prose py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] text-balance text-mges-gold">
            Who it's for
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-5 text-lg text-mges-beige/85 leading-relaxed self-center">
          <p className="text-2xl text-mges-beige font-medium">
            Ages 14–21. Ambition required.
          </p>
          <p>Designed for high-school and university students with a sharp interest in economics and high-stakes negotiation. Whether you are an aspiring economist or a seasoned debater, MGES provides a rigorous environment to test your strategic thinking and policy-making skills against the region's best.</p>
        </div>
      </section>
    </>
  );
}
