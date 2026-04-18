-- Delegate applications
CREATE TABLE public.delegate_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  age INT NOT NULL,
  school TEXT NOT NULL,
  country TEXT NOT NULL,
  experience TEXT NOT NULL,
  committee_preference TEXT NOT NULL,
  motivation TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.delegate_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a delegate application"
  ON public.delegate_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Contact messages
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a contact message"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);