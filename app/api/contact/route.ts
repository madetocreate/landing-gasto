import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validation';

// Minimal logging (keine PII)
interface SecurityLog {
  type: 'form_submission' | 'honeypot_trigger' | 'validation_error';
  timestamp: string;
  path: string;
}

function logSecurityEvent(event: SecurityLog) {
  if (process.env.NODE_ENV === 'development') {
    console.log('[SECURITY]', JSON.stringify(event));
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Honeypot Check
    if (data.company_website && data.company_website.length > 0) {
      logSecurityEvent({
        type: 'honeypot_trigger',
        timestamp: new Date().toISOString(),
        path: '/api/contact',
      });
      return new NextResponse(null, { status: 204 });
    }
    
    // Validation
    const validationResult = contactFormSchema.safeParse(data);
    
    if (!validationResult.success) {
      logSecurityEvent({
        type: 'validation_error',
        timestamp: new Date().toISOString(),
        path: '/api/contact',
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
      path: '/api/contact',
    });
    
    // TODO: Email/CRM Integration hier
    if (process.env.NODE_ENV === 'development') {
      console.log('--- KONTAKT FORMULAR (VALIDATED) ---');
      console.log('Name:', validData.name);
      console.log('Email:', validData.email);
      console.log('Message:', validData.message.substring(0, 100) + '...');
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

