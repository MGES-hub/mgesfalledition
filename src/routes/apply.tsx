import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply as a Delegate — MGES 2026" },
      { name: "description", content: "Submit your delegate application for the Model Global Economic Summit 2026 in Bratislava." },
      { property: "og:title", content: "Apply — MGES 2026" },
      { property: "og:description", content: "Three-minute application to debate global economic policy in Bratislava, Feb 21–23, 2026." },
    ],
  }),
  component: ApplyPage,
});

const schema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  age: z.coerce.number().int().min(14, "Minimum age is 14").max(22, "Maximum age is 22"),
  school: z.string().trim().min(2, "School is required").max(150),
  country: z.string().trim().min(2, "Country is required").max(100),
  experience: z.string().min(1, "Select an experience level"),
  committee_preference: z.string().min(1, "Select a committee"),
  motivation: z.string().trim().min(50, "At least 50 characters").max(1000, "Max 1000 characters"),
});

function ApplyPage() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from("delegate_applications").insert(parsed.data);
    setSubmitting(false);

    if (error) {
      toast.error("Submission failed. Try again.");
      return;
    }
    setDone(true);
    toast.success("Application received");
  }

  if (done) {
    return (
      <>
        <PageHeader eyebrow="Apply" title="Application received." />
        <section className="container-prose py-20">
          <div className="max-w-xl">
            <CheckCircle2 className="h-12 w-12 text-emerald-accent" />
            <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We've received your application. The secretariat reviews submissions on a rolling
              basis. Expect a response within two weeks. Country and topic assignments are
              communicated by 10 January 2026.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Apply"
        title="Submit your delegate application."
        intro="Three minutes. Eight fields. The secretariat reviews on a rolling basis."
      />

      <section className="container-prose py-20">
        <form onSubmit={onSubmit} className="grid lg:grid-cols-12 gap-12 max-w-5xl">
          <div className="lg:col-span-4 space-y-6">
            <div>
              <div className="eyebrow">Section 01</div>
              <h2 className="mt-2 font-display text-2xl font-medium">About you</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Basic details so we can reach you and confirm eligibility.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-5">
            <Field label="Full name" name="full_name" error={errors.full_name} required />
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Email" name="email" type="email" error={errors.email} required />
              <Field label="Age" name="age" type="number" min={14} max={22} error={errors.age} required />
            </div>
            <Field label="School / University" name="school" error={errors.school} required />
            <Field label="Country of residence" name="country" error={errors.country} required />
          </div>

          <div className="lg:col-span-4 space-y-6 lg:border-t lg:border-border lg:pt-12">
            <div>
              <div className="eyebrow">Section 02</div>
              <h2 className="mt-2 font-display text-2xl font-medium">Conference</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Help us match you to the right room.
              </p>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-5 lg:border-t lg:border-border lg:pt-12">
            <Select
              label="MUN / debate experience"
              name="experience"
              error={errors.experience}
              options={["First-time delegate", "1–3 conferences", "4+ conferences", "Have chaired before"]}
            />
            <Select
              label="Committee preference"
              name="committee_preference"
              error={errors.committee_preference}
              options={["IMF (Advanced)", "WTO (Intermediate)", "OECD (Intermediate)", "G20 (Advanced)", "UNCTAD (Beginner)", "ECOFIN (Intermediate)", "No preference"]}
            />
            <div>
              <label className="block text-sm font-medium mb-2">
                Why MGES? <span className="text-muted-foreground">(50–1000 chars)</span>
              </label>
              <textarea
                name="motivation"
                rows={6}
                maxLength={1000}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              {errors.motivation && (
                <p className="mt-1.5 text-xs text-destructive">{errors.motivation}</p>
              )}
            </div>
          </div>

          <div className="lg:col-start-5 lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-8 py-3.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit application
            </button>
            <p className="text-xs text-muted-foreground">
              We store your submission securely. We never share it with third parties.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

function Field({
  label, name, type = "text", error, required, min, max,
}: {
  label: string; name: string; type?: string; error?: string; required?: boolean; min?: number; max?: number;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} {required && <span className="text-emerald-accent">*</span>}
      </label>
      <input
        name={name}
        type={type}
        min={min}
        max={max}
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  label, name, options, error,
}: {
  label: string; name: string; options: string[]; error?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">
        {label} <span className="text-emerald-accent">*</span>
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      >
        <option value="" disabled>Select an option…</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
