import { NextResponse } from 'next/server';
import { checkFormSchema, wizardPayloadSchema } from '@/lib/validation';

// Minimal logging (keine PII)
interface SecurityLog {
  type: 'form_submission' | 'honeypot_trigger' | 'validation_error' | 'rate_limit';
  timestamp: string;
  path: string;
  ip?: string;
  userAgent?: string;
}

function logSecurityEvent(event: SecurityLog) {
  // In production: send to logging service (z.B. Sentry, Logtail)
  // Hier nur console für dev
  if (process.env.NODE_ENV === 'development') {
    console.log('[SECURITY]', JSON.stringify(event));
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Honeypot Check (silent discard)
    if (data.company_website && data.company_website.length > 0) {
      logSecurityEvent({
        type: 'honeypot_trigger',
        timestamp: new Date().toISOString(),
        path: '/api/check',
        ip: request.headers.get('x-forwarded-for') || undefined,
        userAgent: request.headers.get('user-agent') || undefined,
      });
      return new NextResponse(null, { status: 204 });
    }

    // Branch: Wizard payload vs legacy form
    const isWizardPayload = typeof data?.answers === 'object';

    if (isWizardPayload) {
      const validation = wizardPayloadSchema.safeParse(data);
      if (!validation.success) {
        logSecurityEvent({
          type: 'validation_error',
          timestamp: new Date().toISOString(),
          path: '/api/check',
        });
        return NextResponse.json(
          {
            error: 'Validierungsfehler',
            details: validation.error.issues.map(e => ({
              field: e.path.join('.'),
              message: e.message,
            })),
          },
          { status: 400 }
        );
      }

      const payload = validation.data;
      const answers = payload.answers;

      // Simple deterministic scoring logic (idempotent)
      const baseScore = 50;
      const goalWeight = 10;
      const painWeight = 8;
      const toolWeight = 5;
      const complianceWeight = answers.compliance === 'strict' ? -5 : 5;

      const score = Math.max(
        0,
        Math.min(
          100,
          baseScore +
            goalWeight +
            (answers.painpoints?.length ?? 0) * painWeight +
            (answers.tools?.length ?? 0) * toolWeight +
            complianceWeight
        )
      );

      const topUseCases = [
        'Automatisierte Zusammenfassungen & Routing',
        'Self-Service Assistent für Kunden',
        'Qualitätskontrollen & DSGVO-Checks',
      ];

      const sprintPlan = [
        'Kickoff & Datenquellen anbinden (Tag 1-2)',
        'Pilot-Use-Case konfigurieren & testen (Tag 3-5)',
        'Go-Live mit Monitoring & Guardrails (Tag 6-7)',
      ];

      logSecurityEvent({
        type: 'form_submission',
        timestamp: new Date().toISOString(),
        path: '/api/check',
      });

      return NextResponse.json({
        success: true,
        result: {
          score,
          topUseCases,
          sprintPlan,
        },
      });
    }

    // Legacy form path
    const validationResult = checkFormSchema.safeParse(data);
    
    if (!validationResult.success) {
      logSecurityEvent({
        type: 'validation_error',
        timestamp: new Date().toISOString(),
        path: '/api/check',
      });
      
      return NextResponse.json(
        { 
          error: 'Validierungsfehler',
          details: validationResult.error.issues.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }
    
    const validData = validationResult.data;
    
    logSecurityEvent({
      type: 'form_submission',
      timestamp: new Date().toISOString(),
      path: '/api/check',
    });
    
    if (process.env.NODE_ENV === 'development') {
      console.log('--- NEUER CHECK REQUEST (VALIDATED) ---');
      console.log('Name:', validData.name);
      console.log('Firma:', validData.company);
      console.log('Email:', validData.email);
      console.log('Website:', validData.website || 'N/A');
      console.log('Challenge:', validData.challenge || 'N/A');
      console.log('----------------------------------');
    }
    
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}
