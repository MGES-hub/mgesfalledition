import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { committeeOptions, getCommittee } from "@/lib/committee-options";
import { submitApplication } from "./-apply.functions";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — MGES Fall 2026" },
      { name: "description", content: "Submit your MGES Fall 2026 delegate application for Bratislava, September 25–27, 2026." },
      { property: "og:title", content: "Apply — MGES Fall 2026" },
      { property: "og:description", content: "Choose your committee preferences and submit your delegate application." },
    ],
  }),
  component: ApplyPage,
});

const committeeCodes = committeeOptions.map((committee) => committee.code) as [string, ...string[]];

const formSchema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  university_school: z.string().trim().min(2, "University or school is required").max(150),
  experience: z.string().trim().min(1, "Experience level is required"),
  preference_1_committee: z.enum(committeeCodes),
  preference_1_member: z.string().trim().min(1, "Select a member/country"),
  preference_2_committee: z.enum(committeeCodes),
  preference_2_member: z.string().trim().min(1, "Select a member/country"),
  preference_3_committee: z.enum(committeeCodes),
  preference_3_member: z.string().trim().min(1, "Select a member/country"),
  motivation_letter: z.string().trim().min(50, "At least 50 characters").max(2000),
  dietary_requirements: z.string().trim().max(500).optional().default("None provided"),
});

type FormValues = z.infer<typeof formSchema>;

const emptyForm: FormValues = {
  full_name: "",
  email: "",
  university_school: "",
  experience: "",
  preference_1_committee: "FOMC",
  preference_1_member: "",
  preference_2_committee: "BRICS",
  preference_2_member: "",
  preference_3_committee: "WTO",
  preference_3_member: "",
  motivation_letter: "",
  dietary_requirements: "",
};

function ApplyPage() {
  const submit = useServerFn(submitApplication);
  const [step, setStep] = useState(1);
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function update(name: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) nextErrors[String(issue.path[0])] = issue.message;
      });
      setErrors(nextErrors);
      toast.error("Please complete all required fields");
      return;
    }

    setSubmitting(true);
    try {
      await submit({ data: parsed.data });
      setDone(true);
      toast.success("Application submitted");
    } catch {
      toast.error("Submission failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (done) {
    return (
      <section className="bg-mges-navy px-6 py-28 text-mges-beige">
        <div className="container-prose max-w-3xl">
          <CheckCircle2 className="h-14 w-14 text-mges-gold" />
          <h1 className="mt-6 font-display text-4xl md:text-6xl text-mges-gold">Thank you for your application!</h1>
          <p className="mt-5 text-xl text-mges-beige/80">The MGES Secretariat will review your request shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-mges-navy py-16 md:py-24 text-mges-beige">
      <div className="container-prose">
        <div className="max-w-3xl">
          <div className="eyebrow">Delegate application</div>
          <h1 className="mt-4 font-display text-5xl md:text-7xl font-bold text-mges-gold leading-[0.95]">MGES Fall 2026 Registration</h1>
        </div>

        <form onSubmit={onSubmit} className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-3">
            {["Personal Information", "Delegate Preferences", "Final Details"].map((label, index) => (
              <button key={label} type="button" onClick={() => setStep(index + 1)} className={`w-full border px-5 py-4 text-left font-display text-lg transition-colors ${step === index + 1 ? "border-mges-gold bg-mges-gold text-mges-navy" : "border-mges-gold/25 text-mges-beige hover:border-mges-gold"}`}>{index + 1}. {label}</button>
            ))}
          </aside>

          <div className="border border-mges-gold/25 bg-mges-steel/45 p-6 md:p-10">
            {step === 1 && <PersonalStep values={values} errors={errors} update={update} />}
            {step === 2 && <PreferencesStep values={values} errors={errors} update={update} />}
            {step === 3 && <FinalStep values={values} errors={errors} update={update} />}

            <div className="mt-10 flex flex-wrap gap-3">
              {step > 1 && <button type="button" onClick={() => setStep(step - 1)} className="rounded-[15px] border border-mges-gold/40 px-6 py-3 text-sm font-semibold text-mges-beige">Back</button>}
              {step < 3 ? <button type="button" onClick={() => setStep(step + 1)} className="rounded-[15px] bg-mges-gold px-7 py-3 text-sm font-bold text-mges-navy">Continue</button> : <button type="submit" disabled={submitting} className="inline-flex items-center gap-2 rounded-[15px] bg-mges-gold px-8 py-3.5 text-sm font-bold text-mges-navy disabled:opacity-60">{submitting && <Loader2 className="h-4 w-4 animate-spin" />}Submit Application</button>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function PersonalStep({ values, errors, update }: StepProps) {
  return <div className="grid gap-5"><Field label="Name" name="full_name" value={values.full_name} error={errors.full_name} update={update} /><Field label="Email" name="email" type="email" value={values.email} error={errors.email} update={update} /><Field label="University/School" name="university_school" value={values.university_school} error={errors.university_school} update={update} /><Select label="Experience Level" name="experience" value={values.experience} error={errors.experience} update={update} options={["First-time delegate", "1–3 conferences", "4+ conferences", "Have chaired before"]} /></div>;
}

function PreferencesStep({ values, errors, update }: StepProps) {
  return <div className="space-y-8">{([1, 2, 3] as const).map((n) => <Preference key={n} n={n} values={values} errors={errors} update={update} />)}</div>;
}

function FinalStep({ values, errors, update }: StepProps) {
  return <div className="grid gap-5"><TextArea label="Motivation Letter" name="motivation_letter" value={values.motivation_letter} error={errors.motivation_letter} update={update} /><Field label="Dietary Requirements" name="dietary_requirements" value={values.dietary_requirements} error={errors.dietary_requirements} update={update} /></div>;
}

type StepProps = { values: FormValues; errors: Record<string, string>; update: (name: keyof FormValues, value: string) => void };

function Preference({ n, values, errors, update }: StepProps & { n: 1 | 2 | 3 }) {
  const committeeKey = `preference_${n}_committee` as keyof FormValues;
  const memberKey = `preference_${n}_member` as keyof FormValues;
  const committee = getCommittee(values[committeeKey]);
  return <div className="grid gap-4 border-t border-mges-gold/20 pt-6 first:border-t-0 first:pt-0"><h2 className="font-display text-2xl text-mges-gold">Preference {n}</h2><Select label="Committee" name={committeeKey} value={values[committeeKey]} error={errors[committeeKey]} update={(name, value) => { update(name, value); update(memberKey, ""); }} options={committeeOptions.map((c) => c.code)} />{committee && <Select label="Member/Country" name={memberKey} value={values[memberKey]} error={errors[memberKey]} update={update} options={[...committee.members]} />}</div>;
}

function Field({ label, name, value, error, update, type = "text" }: { label: string; name: keyof FormValues; value: string; error?: string; update: StepProps["update"]; type?: string }) {
  return <label className="block text-sm font-semibold text-mges-beige">{label}<input type={type} value={value} onChange={(e) => update(name, e.target.value)} className="mt-2 w-full rounded-sm border border-mges-gold/25 bg-mges-navy px-4 py-3 text-mges-beige outline-none focus:border-mges-gold focus:ring-1 focus:ring-mges-gold" />{error && <span className="mt-1 block text-xs text-destructive">{error}</span>}</label>;
}

function Select({ label, name, value, error, update, options }: { label: string; name: keyof FormValues; value: string; error?: string; update: StepProps["update"]; options: string[] }) {
  return <label className="block text-sm font-semibold text-mges-beige">{label}<select value={value} onChange={(e) => update(name, e.target.value)} className="mt-2 w-full rounded-sm border border-mges-gold/25 bg-mges-navy px-4 py-3 text-mges-beige outline-none focus:border-mges-gold focus:ring-1 focus:ring-mges-gold"><option value="">Select…</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select>{error && <span className="mt-1 block text-xs text-destructive">{error}</span>}</label>;
}

function TextArea({ label, name, value, error, update }: { label: string; name: keyof FormValues; value: string; error?: string; update: StepProps["update"] }) {
  return <label className="block text-sm font-semibold text-mges-beige">{label}<textarea rows={8} value={value} onChange={(e) => update(name, e.target.value)} className="mt-2 w-full resize-none rounded-sm border border-mges-gold/25 bg-mges-navy px-4 py-3 text-mges-beige outline-none focus:border-mges-gold focus:ring-1 focus:ring-mges-gold" />{error && <span className="mt-1 block text-xs text-destructive">{error}</span>}</label>;
}