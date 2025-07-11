// src/app/api/country/route.ts
import { loadGeoDatabase, getCountryFromIp } from '../../../utils/geoIp';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

let dbLoaded = false;

export async function GET(request: NextRequest) {
  try {
    if (!dbLoaded) {
      await loadGeoDatabase();
      dbLoaded = true;
    }

    // Intentar obtener la IP desde diferentes encabezados conocidos
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '';

    console.log('Client IP:', ip);

    const country = getCountryFromIp(ip);
    console.log('Detected Country:', country);

    // Devuelve siempre el país detectado, sin validación
    return NextResponse.json({ country });
    
  } catch (error) {
    console.error('Error in GET /api/country:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
