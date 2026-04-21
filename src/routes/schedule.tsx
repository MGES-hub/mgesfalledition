import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: [
      { title: "Schedule — MGES 2026" },
      { name: "description", content: "MGES 2026 programme — coming soon." },
      { property: "og:title", content: "MGES 2026 Schedule" },
      { property: "og:description", content: "Schedule for the Model Global Economic Summit, Bratislava — coming soon." },
    ],
  }),
  component: SchedulePage,
});

function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule"
        title="No schedule yet"
        intro="The full MGES 2026 programme will be published here closer to the event."
      />

      <section className="container-prose py-32 text-center">
        <p className="font-display text-3xl md:text-5xl text-muted-foreground">
          No schedule yet.
        </p>
      </section>
    </>
  );
}
