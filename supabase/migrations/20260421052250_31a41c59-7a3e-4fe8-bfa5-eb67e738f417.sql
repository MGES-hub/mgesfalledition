DROP POLICY IF EXISTS "Anyone can submit a delegate application" ON public.delegate_applications;
DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_messages;

CREATE POLICY "Visitors can submit complete delegate applications"
ON public.delegate_applications
FOR INSERT
WITH CHECK (
  char_length(trim(full_name)) BETWEEN 2 AND 100
  AND char_length(trim(email)) BETWEEN 3 AND 255
  AND position('@' in email) > 1
  AND age BETWEEN 14 AND 22
  AND char_length(trim(school)) BETWEEN 2 AND 150
  AND char_length(trim(university_school)) BETWEEN 2 AND 150
  AND char_length(trim(country)) BETWEEN 2 AND 100
  AND char_length(trim(experience)) BETWEEN 1 AND 80
  AND char_length(trim(committee_preference)) BETWEEN 1 AND 80
  AND char_length(trim(preference_1_committee)) BETWEEN 1 AND 20
  AND char_length(trim(preference_1_member)) BETWEEN 1 AND 120
  AND char_length(trim(preference_2_committee)) BETWEEN 1 AND 20
  AND char_length(trim(preference_2_member)) BETWEEN 1 AND 120
  AND char_length(trim(preference_3_committee)) BETWEEN 1 AND 20
  AND char_length(trim(preference_3_member)) BETWEEN 1 AND 120
  AND char_length(trim(motivation)) BETWEEN 50 AND 2000
  AND char_length(trim(motivation_letter)) BETWEEN 50 AND 2000
  AND char_length(coalesce(dietary_requirements, '')) <= 500
);

CREATE POLICY "Visitors can submit complete contact messages"
ON public.contact_messages
FOR INSERT
WITH CHECK (
  char_length(trim(name)) BETWEEN 2 AND 100
  AND char_length(trim(email)) BETWEEN 3 AND 255
  AND position('@' in email) > 1
  AND char_length(trim(subject)) BETWEEN 2 AND 150
  AND char_length(trim(message)) BETWEEN 10 AND 2000
);