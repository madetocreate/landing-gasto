import { z } from 'zod';

// Legacy Contact/Check Form Validation Schema
export const checkFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein').max(100),
  email: z.string().email('Ungültige E-Mail-Adresse').max(255),
  company: z.string().min(1, 'Firma ist erforderlich').max(200),
  website: z.string().url('Ungültige URL').max(500).optional().or(z.literal('')),
  challenge: z.string().max(2000).optional(),
  // Honeypot field (sollte leer sein)
  company_website: z.string().max(0).optional(), // Wenn gefüllt = Bot
});

export type CheckFormData = z.infer<typeof checkFormSchema>;

// New Wizard Answer Schema
export const wizardAnswersSchema = z.object({
  context: z.object({
    industry: z.string().min(1),
    teamSize: z.string().min(1),
  }),
  goal: z.string().min(1),
  painpoints: z.array(z.string()).max(3),
  tools: z.array(z.string()).optional().default([]),
  compliance: z.string().min(1),
});

export const leadSchema = z.object({
  name: z.string().optional(),
  company: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
});

export const wizardPayloadSchema = z.object({
  source: z.literal('wizard').optional(),
  answers: wizardAnswersSchema,
  lead: leadSchema.optional(),
  // Honeypot (aligned with legacy)
  company_website: z.string().max(0).optional(),
});

export type WizardPayload = z.infer<typeof wizardPayloadSchema>;

// Contact Form Validation Schema (falls später benötigt)
export const contactFormSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein').max(5000),
  company_website: z.string().max(0).optional(), // Honeypot
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

