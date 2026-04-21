import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { committeeOptions, getCommittee } from "@/lib/committee-options";

const committeeCodes = committeeOptions.map((committee) => committee.code) as [string, ...string[]];

export const applicationSchema = z.object({
  full_name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  university_school: z.string().trim().min(2, "University or school is required").max(150),
  experience: z.string().trim().min(1, "Experience level is required").max(80),
  preference_1_committee: z.enum(committeeCodes),
  preference_1_member: z.string().trim().min(1, "Select a member/country").max(120),
  preference_2_committee: z.enum(committeeCodes),
  preference_2_member: z.string().trim().min(1, "Select a member/country").max(120),
  preference_3_committee: z.enum(committeeCodes),
  preference_3_member: z.string().trim().min(1, "Select a member/country").max(120),
  motivation_letter: z.string().trim().min(50, "At least 50 characters").max(2000),
  dietary_requirements: z.string().trim().max(500).optional().default("None provided"),
}).superRefine((data, ctx) => {
  ([1, 2, 3] as const).forEach((index) => {
    const committee = getCommittee(data[`preference_${index}_committee`]);
    const member = data[`preference_${index}_member`];
    if (!(committee?.members as readonly string[] | undefined)?.includes(member)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: [`preference_${index}_member`],
        message: "Choose a valid member/country for this committee",
      });
    }
  });
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

function buildEmailHtml(data: ApplicationInput) {
  const rows = [
    ["Name", data.full_name],
    ["Email", data.email],
    ["University/School", data.university_school],
    ["Experience", data.experience],
    ["1st Preference", `${data.preference_1_committee} — ${data.preference_1_member}`],
    ["2nd Preference", `${data.preference_2_committee} — ${data.preference_2_member}`],
    ["3rd Preference", `${data.preference_3_committee} — ${data.preference_3_member}`],
    ["Dietary Requirements", data.dietary_requirements || "None provided"],
  ];

  return `
    <h1>New MGES Fall 2026 Application</h1>
    <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Georgia,serif;">
      ${rows.map(([label, value]) => `<tr><th align="left">${label}</th><td>${value}</td></tr>`).join("")}
    </table>
    <h2>Motivation Letter</h2>
    <p style="white-space:pre-wrap;">${data.motivation_letter}</p>
  `;
}

async function sendApplicationEmail(data: ApplicationInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "MGES Applications <onboarding@resend.dev>",
      to: ["podkidish92@gmail.com"],
      subject: `New MGES Fall 2026 Application: ${data.full_name}`,
      html: buildEmailHtml(data),
    }),
  });
}

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((input) => applicationSchema.parse(input))
  .handler(async ({ data }) => {
    const insertData = {
      full_name: data.full_name,
      email: data.email,
      school: data.university_school,
      university_school: data.university_school,
      experience: data.experience,
      committee_preference: data.preference_1_committee,
      preference_1_committee: data.preference_1_committee,
      preference_1_member: data.preference_1_member,
      preference_2_committee: data.preference_2_committee,
      preference_2_member: data.preference_2_member,
      preference_3_committee: data.preference_3_committee,
      preference_3_member: data.preference_3_member,
      motivation: data.motivation_letter,
      motivation_letter: data.motivation_letter,
      dietary_requirements: data.dietary_requirements || "None provided",
    };

    const { error } = await supabaseAdmin.from("delegate_applications").insert(insertData);
    if (error) throw new Error("Application could not be saved.");

    await sendApplicationEmail(data);
    return { ok: true };
  });