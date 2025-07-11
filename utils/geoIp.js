// utils/geoIp.js
import maxmind from 'maxmind';
import path from 'path';
import fs from 'fs';

let lookup;

export const loadGeoDatabase = async () => {
  if (typeof window !== 'undefined') {
    throw new Error('No se puede cargar la base de datos GeoIP en el cliente.');
  }
//https://lite.ip2location.com/database-download
  const dbPath = path.resolve('./public/IP2LOCATION-LITE-DB1.MMDB'); // Asegúrate de que la ruta es correcta
  if (!fs.existsSync(dbPath)) {
    throw new Error('No se encuentra la base de datos GeoIP en la ruta especificada.');
  }
  
  lookup = await maxmind.open(dbPath);
};

export const getCountryFromIp = (ip) => {
  if (!lookup) {
    throw new Error('GeoIP database not loaded');
  }
  const geoInfo = lookup.get(ip);
  return geoInfo?.country?.iso_code || 'Unknown';
};
