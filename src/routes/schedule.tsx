import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — MGES 2026" },
      { name: "description", content: "Three-day MGES 2026 schedule across Bratislava venues. Opening ceremony to closing vote." },
      { property: "og:title", content: "MGES 2026 Schedule" },
      { property: "og:description", content: "Day-by-day programme for the Model Global Economic Summit, Bratislava." },
    ],
  }),
  component: SchedulePage,
});

const days = [
  {
    label: "Day 1",
    date: "Friday, 25 September 2026",
    venue: "Faculty of Economics, Comenius University",
    items: [
      ["08:30", "Arrival & registration", "Main lobby"],
      ["09:30", "Opening ceremony & keynote", "Aula Magna"],
      ["10:30", "Committee session I — opening speeches", "Committee rooms"],
      ["13:00", "Lunch", "Atrium"],
      ["14:30", "Committee session II — moderated debate", "Committee rooms"],
      ["18:00", "Welcome reception", "Atrium"],
    ],
  },
  {
    label: "Day 2",
    date: "Saturday, 26 September 2026",
    venue: "National Bank of Slovakia · Conference Centre",
    items: [
      ["09:00", "Committee session III — working papers", "Committee rooms"],
      ["11:30", "Panel: Central banking in fragmented markets", "Main hall"],
      ["13:00", "Lunch", "Foyer"],
      ["14:30", "Committee session IV — unmoderated caucus", "Committee rooms"],
      ["17:00", "Crisis simulation (G20 only)", "Cabinet room"],
      ["20:00", "Delegates' dinner", "Old Town"],
    ],
  },
  {
    label: "Day 3",
    date: "Sunday, 27 September 2026",
    venue: "Slovak Ministry of Finance",
    items: [
      ["09:00", "Committee session V — draft resolution merging", "Committee rooms"],
      ["11:30", "Committee session VI — final voting procedure", "Committee rooms"],
      ["14:00", "Closing ceremony & awards", "Main hall"],
      ["16:00", "Departures", "—"],
    ],
  },
];

function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="Three days. Three Bratislava venues."
        intro="Programme subject to minor revisions. Confirmed delegates receive a final printed booklet on arrival."
      />

      <section className="container-prose py-20 space-y-20">
        {days.map((d) => (
          <div key={d.label} className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="eyebrow">{d.label}</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight">
                {d.date}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{d.venue}</p>
            </div>
            <div className="lg:col-span-8">
              <ol className="border-t border-border">
                {d.items.map(([time, title, room]) => (
                  <li
                    key={time + title}
                    className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr_auto] gap-4 py-5 border-b border-border items-baseline"
                  >
                    <div className="font-mono text-sm text-emerald-accent">{time}</div>
                    <div className="font-medium">{title}</div>
                    <div className="hidden md:block text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground">
                      {room}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
