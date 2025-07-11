// next.config.mjs  (o .ts/.js)
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'es'],   // idiomas disponibles
    defaultLocale: 'en',     // el que sirve cuando visitan “/”
    localeDetection: false   // ⬅️  evita que Next te mande a /es
  },
};

export default nextConfig;
