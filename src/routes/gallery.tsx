import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import bratislavaImg from "@/assets/bratislava.jpg";
import heroImg from "@/assets/hero.jpg";
import chartImg from "@/assets/chart-motif.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — MGES 2026" },
      { name: "description", content: "Moments from previous Model Global Economic Summit conferences." },
      { property: "og:title", content: "MGES Gallery" },
      { property: "og:description", content: "Photographs from past MGES conferences in Bratislava." },
    ],
  }),
  component: GalleryPage,
});

const photos = [
  { src: heroImg, alt: "Assembly hall", caption: "Opening ceremony · 2025" },
  { src: bratislavaImg, alt: "Bratislava", caption: "Host city · Bratislava" },
  { src: chartImg, alt: "Chart motif", caption: "Plenary projection" },
  { src: heroImg, alt: "Assembly hall", caption: "Crisis simulation · G20" },
  { src: bratislavaImg, alt: "Bratislava", caption: "Delegate dinner · Old Town" },
  { src: chartImg, alt: "Chart motif", caption: "Background guide cover" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Three days, in pictures."
        intro="A glimpse of past editions. Full albums released after each conference."
      />

      <section className="container-prose py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={
                "group relative overflow-hidden rounded-sm bg-card " +
                (i % 5 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]")
              }
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-ink/80 to-transparent text-xs md:text-sm font-mono uppercase tracking-[0.12em] text-bone">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
