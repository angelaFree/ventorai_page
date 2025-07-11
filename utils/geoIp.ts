export async function loadGeoDatabase(): Promise<void> {
  // In this lightweight implementation there is no actual DB to load.
  return Promise.resolve();
}

export function getCountryFromIp(_ip: string): string {
  // Always return US as fallback. Real implementation would lookup from DB.
  return 'US';
}
