// app/api/geo/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const response = await fetch('http://www.geoplugin.net/json.gp');
    if (!response.ok) {
      throw new Error('Error fetching data from GeoPlugin');
    }
    const data = await response.json();
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
