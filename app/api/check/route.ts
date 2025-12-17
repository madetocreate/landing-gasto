import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validierung (einfach)
    if (!data.name || !data.email || !data.company) {
      return NextResponse.json(
        { error: 'Bitte füllen Sie alle Pflichtfelder aus.' },
        { status: 400 }
      );
    }

    // Hier würde die Integration zu Email/CRM stattfinden (z.B. SendGrid, HubSpot)
    console.log('--- NEUER 10-MIN-CHECK REQUEST ---');
    console.log('Name:', data.name);
    console.log('Firma:', data.company);
    console.log('Email:', data.email);
    console.log('Website:', data.website);
    console.log('Challenge:', data.challenge);
    console.log('----------------------------------');

    // Simuliere Netzwerklatenz
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Interner Serverfehler' },
      { status: 500 }
    );
  }
}

