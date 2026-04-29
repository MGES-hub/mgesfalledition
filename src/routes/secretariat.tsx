import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/secretariat")({
  head: () => ({
    meta: [
      { title: "Secretariat — MGES 2026" },
      { name: "description", content: "Meet the 2026 MGES Directorate — the organizers running the Model Global Economic Summit." },
      { property: "og:title", content: "MGES 2026 Directorate" },
      { property: "og:description", content: "The student-led directorate behind MGES Fall 2026." },
    ],
  }),
  component: SecretariatPage,
});

const organizers = [
  { name: "Vladimír Brdečka", role: "Director-General" },
  { name: "Barbora Majerská", role: "Director of Communication" },
  { name: "Daniel Isteník", role: "Director of Design" },
  { name: "Lucia Brdečková", role: "Director of Pages" },
  { name: "Martin Kníž", role: "Director of Marketing" },
  { name: "Matilda Dittelova", role: "Director of Huncútstvo" },
  { name: "Matvii Rtveliashvili", role: "Director of Administration" },
  { name: "Maxim Matovcik", role: "Director of Finance" },
  { name: "Sophia Anna Hozlárová", role: "Director of Information Technology" },
  { name: "Teo Petrisko", role: "Director of Strategic Partnerships" },
];

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function SecretariatPage() {
  return (
    <>
      <PageHeader
        eyebrow="Directorate"
        title="The Organizers of MGES 2026."
        intro="MGES is run entirely by students. Meet the directorate shaping the Fall 2026 edition."
      />

      <section className="container-prose py-20 md:py-28">
        <div className="eyebrow">2026 Organizers</div>
        <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-mges-gold">
          The Directorate.
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-12">
          {organizers.map((p) => (
            <div key={p.name} className="flex flex-col items-center text-center">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-mges-gold/40 bg-mges-navy flex items-center justify-center">
                <span className="font-display text-3xl md:text-4xl font-bold text-mges-gold/70">
                  {initials(p.name)}
                </span>
              </div>
              <div className="mt-5 font-display text-lg md:text-xl font-bold text-mges-gold leading-tight">
                {p.name}
              </div>
              <div className="mt-1 text-xs md:text-sm font-mono uppercase tracking-[0.18em] text-mges-beige/70">
                {p.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
