import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { ArrowRight, X } from "lucide-react";
import fomcLogo from "@/assets/committees/fomc.png";
import bricsLogo from "@/assets/committees/brics.png";
import wtoLogo from "@/assets/committees/wto.png";
import hesocLogo from "@/assets/committees/hesoc.png";
import { committeeOptions } from "@/lib/committee-options";

export const Route = createFileRoute("/committees")({
  head: () => ({
    meta: [
      { title: "Committees — MGES 2026" },
      { name: "description", content: "Four specialised economic committees: FOMC, BRICS, WTO, and HESOC. Choose your seat." },
      { property: "og:title", content: "MGES 2026 Committees" },
      { property: "og:description", content: "Four committees covering global economic policy: FOMC, BRICS, WTO, HESOC." },
    ],
  }),
  component: CommitteesPage,
});

type Committee = {
  code: string;
  name: string;
  logo: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  size: number;
  chairs?: string;
  description: string;
  members: string[];
};

const committees: Committee[] = [
  {
    code: "FOMC",
    name: "Federal Open Market Committee",
    logo: fomcLogo,
    difficulty: "Expert",
    size: 12,
    chairs: "Samuel Vojtech Remenár",
    description:
      "Delegates will dive into a 'what if' scenario where Zohran K. Mamdani becomes the new President of the USA, while Elon Musk holds the absolute majority in both the Senate and the House of Representatives. Central bankers must find a consensus between the President and the Technocratic Party.",
    members: [...committeeOptions[0].members],
  },
  {
    code: "BRICS",
    name: "BRICS",
    logo: bricsLogo,
    difficulty: "Intermediate",
    size: 14,
    chairs: "Martin Kníž & Filip Truhlář",
    description:
      "The coalition of major emerging economies will explore reshaping global monetary policy by reducing dependence on the US Dollar. Delegates will debate a common BRICS currency, national currency trade, the expansion of the New Development Bank, and the geopolitical influence of the Federal Reserve.",
    members: [...committeeOptions[1].members],
  },
  {
    code: "WTO",
    name: "World Trade Organization",
    logo: wtoLogo,
    difficulty: "Beginner",
    size: 16,
    description:
      "Delegates will examine the framework of Special and Differential Treatment (SDT) and its role in supporting developing economies. The committee will debate how SDT provisions can be reformed to ensure fairness and accountability while balancing free trade principles.",
    members: [...committeeOptions[2].members],
  },
  {
    code: "HESOC",
    name: "Historical Economic and Social Council",
    logo: hesocLogo,
    difficulty: "Beginner",
    size: 17,
    chairs: "Vladimír Brdečka & Olívia Jánošíková",
    description:
      "Set in 1992, delegates take the roles of historical global leaders. As Soviet influence declines, a new superpower seeks to counterbalance the USA. The committee will design institutions and trade systems to reflect this shifting Post-Cold War power balance.",
    members: [...committeeOptions[3].members],
  },
];

const difficultyColor: Record<Committee["difficulty"], string> = {
  Beginner: "text-emerald-300",
  Intermediate: "text-mges-gold",
  Advanced: "text-orange-300",
  Expert: "text-red-300",
};

function CommitteesPage() {
  const [openCode, setOpenCode] = useState<string | null>(null);
  const open = committees.find((c) => c.code === openCode) ?? null;

  return (
    <div className="bg-mges-navy">
      <PageHeader
        eyebrow="The Floor"
        title="Four committees. One global conversation."
        intro="Each committee runs across all three days of the summit. Background guides are released to confirmed delegates six weeks before the conference."
      />

      <section className="container-prose pb-24">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {committees.map((c) => (
            <article
              key={c.code}
              className="flex flex-col items-center text-center rounded-sm border border-mges-gold/20 p-8 md:p-10"
              style={{ backgroundColor: "#051626" }}
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={c.logo}
                  alt={`${c.name} logo`}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-24 w-24 md:h-28 md:w-28 object-cover rounded-full bg-mges-beige/5 shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-display text-3xl md:text-4xl font-bold leading-tight text-mges-gold">
                    {c.code}
                  </div>
                  <div className="mt-1 text-sm text-mges-beige/80">{c.name}</div>
                </div>
              </div>

              <p className="mt-6 text-mges-beige/85 leading-relaxed max-w-prose">
                {c.description}
              </p>

              <dl className="mt-6 w-full grid grid-cols-2 gap-x-4 gap-y-2 text-sm border-t border-mges-gold/15 pt-5 text-center">
                <dt className="font-mono uppercase text-[10px] tracking-[0.18em] text-mges-beige/55">Difficulty</dt>
                <dt className="font-mono uppercase text-[10px] tracking-[0.18em] text-mges-beige/55">Size</dt>
                <dd className={`font-display text-base ${difficultyColor[c.difficulty]}`}>{c.difficulty}</dd>
                <dd className="font-display text-base text-mges-beige">{c.size} spots</dd>
                {c.chairs && (
                  <>
                    <dt className="col-span-2 mt-2 font-mono uppercase text-[10px] tracking-[0.18em] text-mges-beige/55">Chairs</dt>
                    <dd className="col-span-2 text-mges-beige">{c.chairs}</dd>
                  </>
                )}
              </dl>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpenCode(c.code)}
                  className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-5 py-2.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors"
                >
                  View Members
                </button>
                <Link
                  to="/apply"
                  className="inline-flex items-center gap-2 rounded-[15px] border border-mges-gold/40 px-5 py-2.5 text-sm font-medium text-mges-beige hover:bg-mges-gold/10 transition-colors"
                >
                  Apply for seat <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Members modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-mges-navy/85 backdrop-blur-sm"
          onClick={() => setOpenCode(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="members-title"
        >
          <div
            className="relative max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-sm border border-mges-gold/30 p-8 md:p-10"
            style={{ backgroundColor: "#051626" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenCode(null)}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 text-mges-beige/70 hover:text-mges-gold transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-4">
              <img src={open.logo} alt="" className="h-14 w-14 object-cover rounded-full bg-mges-beige/5" />
              <div>
                <div className="eyebrow">Members</div>
                <h2 id="members-title" className="font-display text-2xl md:text-3xl font-bold text-mges-gold leading-tight">
                  {open.code} — {open.name}
                </h2>
              </div>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-mges-beige">
              {open.members.map((m) => (
                <li key={m} className="flex gap-2 leading-snug">
                  <span className="text-mges-gold/60">·</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
