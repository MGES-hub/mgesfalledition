import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/secretariat")({
  head: () => ({
    meta: [
      { title: "Secretariat — MGES 2026" },
      { name: "description", content: "Meet the student secretariat and chairs running MGES 2026." },
      { property: "og:title", content: "MGES 2026 Secretariat" },
      { property: "og:description", content: "The student team running the Model Global Economic Summit 2026." },
    ],
  }),
  component: SecretariatPage,
});

const board = [
  { name: "Adriana Kováčová", role: "Secretary-General", bio: "Final-year IB student, MUNoV finalist 2024." },
  { name: "Matúš Horváth", role: "Director-General", bio: "Economics & finance, BISB. Two-time chair." },
  { name: "Sofia Németh", role: "Director of Committees", bio: "PPE candidate. Former WTO simulation winner." },
];

const chairs = [
  { c: "IMF", name: "Lukáš Polák" },
  { c: "WTO", name: "Elena Marković" },
  { c: "OECD", name: "Petra Šimonová" },
  { c: "G20", name: "David Krajči" },
  { c: "UNCTAD", name: "Nina Beneš" },
  { c: "ECOFIN", name: "Tomáš Varga" },
];

function SecretariatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Secretariat"
        title="The team behind MGES 2026."
        intro="MGES is run entirely by students. The secretariat sets the academic standard; the chairs run the rooms."
      />

      <section className="container-prose py-20">
        <div className="eyebrow">Executive board</div>
        <div className="mt-8 grid md:grid-cols-3 gap-px bg-border">
          {board.map((p) => (
            <div key={p.name} className="bg-background p-8">
              <div className="aspect-[4/5] bg-gradient-to-br from-graphite to-ink rounded-sm flex items-end p-5">
                <div className="font-display text-5xl text-bone/30">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
              </div>
              <div className="mt-5 eyebrow">{p.role}</div>
              <div className="mt-2 font-display text-xl font-medium">{p.name}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="container-prose py-20">
          <div className="eyebrow">Committee chairs</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium">
            Six chairs. Six committees.
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {chairs.map((c) => (
              <div
                key={c.c}
                className="bg-background p-6 flex items-baseline justify-between gap-4"
              >
                <div>
                  <div className="font-display text-xl font-medium">{c.name}</div>
                  <div className="text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground mt-1">
                    Chair · {c.c}
                  </div>
                </div>
                <div className="font-display text-3xl text-emerald-accent">{c.c}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
