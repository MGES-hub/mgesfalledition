import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Instagram, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MGES 2026" },
      { name: "description", content: "Get in touch with the MGES 2026 secretariat: questions, partnerships, press." },
      { property: "og:title", content: "Contact MGES 2026" },
      { property: "og:description", content: "Reach the MGES secretariat for delegate questions, partnerships, and press." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  subject: z.string().trim().min(2, "Subject required").max(150),
  message: z.string().trim().min(10, "At least 10 characters").max(2000, "Max 2000 characters"),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) if (i.path[0]) errs[String(i.path[0])] = i.message;
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("contact_messages").insert(parsed.data);
    setSubmitting(false);
    if (error) {
      toast.error("Could not send. Try again.");
      return;
    }
    toast.success("Message sent. We'll reply within 48 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch."
        intro="Questions about applying, partnership enquiries, or press requests — reach the right person below."
      />

      <section className="container-prose py-20 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 space-y-8">
          <div>
            <div className="eyebrow">General</div>
            <a href="mailto:info@mges.sk" className="mt-2 flex items-center gap-3 hover:text-emerald-accent">
              <Mail className="h-4 w-4" /> info@mges.sk
            </a>
          </div>
          <div>
            <div className="eyebrow">Partnerships</div>
            <a href="mailto:partners@mges.sk" className="mt-2 flex items-center gap-3 hover:text-emerald-accent">
              <Mail className="h-4 w-4" /> partners@mges.sk
            </a>
          </div>
          <div>
            <div className="eyebrow">Press</div>
            <a href="mailto:press@mges.sk" className="mt-2 flex items-center gap-3 hover:text-emerald-accent">
              <Mail className="h-4 w-4" /> press@mges.sk
            </a>
          </div>
          <div>
            <div className="eyebrow">In person</div>
            <div className="mt-2 flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Bratislava, Slovakia<br />Detailed venues released to delegates.</span>
            </div>
          </div>
          <div>
            <div className="eyebrow">Follow</div>
            <div className="mt-2 flex items-center gap-3">
              <a href="#" className="p-2 border border-border rounded-sm hover:border-emerald-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 border border-border rounded-sm hover:border-emerald-accent">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </aside>

        <form onSubmit={onSubmit} className="lg:col-span-8 space-y-5 bg-card border border-border rounded-sm p-6 md:p-10">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium mb-2">Name <span className="text-emerald-accent">*</span></label>
              <input name="name" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email <span className="text-emerald-accent">*</span></label>
              <input name="email" type="email" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject <span className="text-emerald-accent">*</span></label>
            <input name="subject" className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            {errors.subject && <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message <span className="text-emerald-accent">*</span></label>
            <textarea name="message" rows={7} maxLength={2000} className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-[15px] bg-mges-royal border-2 border-mges-gold px-8 py-3.5 text-sm font-semibold text-mges-beige hover:bg-mges-gold hover:text-mges-navy transition-colors disabled:opacity-60"
          >
            {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
            Send message
          </button>
        </form>
      </section>
    </>
  );
}
