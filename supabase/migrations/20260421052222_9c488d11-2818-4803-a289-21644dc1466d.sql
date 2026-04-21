ALTER TABLE public.delegate_applications
  ADD COLUMN IF NOT EXISTS university_school text,
  ADD COLUMN IF NOT EXISTS preference_1_committee text,
  ADD COLUMN IF NOT EXISTS preference_1_member text,
  ADD COLUMN IF NOT EXISTS preference_2_committee text,
  ADD COLUMN IF NOT EXISTS preference_2_member text,
  ADD COLUMN IF NOT EXISTS preference_3_committee text,
  ADD COLUMN IF NOT EXISTS preference_3_member text,
  ADD COLUMN IF NOT EXISTS motivation_letter text,
  ADD COLUMN IF NOT EXISTS dietary_requirements text;

UPDATE public.delegate_applications
SET
  university_school = COALESCE(university_school, school),
  preference_1_committee = COALESCE(preference_1_committee, committee_preference),
  preference_1_member = COALESCE(preference_1_member, 'Not specified'),
  preference_2_committee = COALESCE(preference_2_committee, 'Not specified'),
  preference_2_member = COALESCE(preference_2_member, 'Not specified'),
  preference_3_committee = COALESCE(preference_3_committee, 'Not specified'),
  preference_3_member = COALESCE(preference_3_member, 'Not specified'),
  motivation_letter = COALESCE(motivation_letter, motivation),
  dietary_requirements = COALESCE(dietary_requirements, 'None provided')
WHERE university_school IS NULL
  OR preference_1_committee IS NULL
  OR preference_1_member IS NULL
  OR preference_2_committee IS NULL
  OR preference_2_member IS NULL
  OR preference_3_committee IS NULL
  OR preference_3_member IS NULL
  OR motivation_letter IS NULL
  OR dietary_requirements IS NULL;

ALTER TABLE public.delegate_applications
  ALTER COLUMN university_school SET NOT NULL,
  ALTER COLUMN preference_1_committee SET NOT NULL,
  ALTER COLUMN preference_1_member SET NOT NULL,
  ALTER COLUMN preference_2_committee SET NOT NULL,
  ALTER COLUMN preference_2_member SET NOT NULL,
  ALTER COLUMN preference_3_committee SET NOT NULL,
  ALTER COLUMN preference_3_member SET NOT NULL,
  ALTER COLUMN motivation_letter SET NOT NULL,
  ALTER COLUMN dietary_requirements SET DEFAULT 'None provided';