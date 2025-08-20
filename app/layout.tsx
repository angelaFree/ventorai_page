import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventorai.freeinfoproducts.com/"),
  title: {
    default: "VendeCursos AI - Genera Anuncios para Cursos Online",
    template: "%s | VendeCursos AI",
  },
  description:
    "Crea anuncios irresistibles para tus cursos online en segundos con inteligencia artificial. Olvídate de Canva y los diseñadores caros.",
  keywords: [
    "vendecursos ai",
    "anuncios para cursos",
    "generador de anuncios",
    "facebook ads library",
    "marketing digital",
    "diseño de anuncios",
    "generative ai",
    "ventas online",
    "social media",
    "anuncios virales",
    "inteligencia artificial",
    "crear anuncios online",
  ],
  openGraph: {
    title: "VendeCursos AI - Genera Anuncios para Cursos Online",
    description:
      "Genera anuncios virales sin esfuerzo. Plantillas siempre actualizadas y optimizadas para vender cursos online.",
    url: "https://ventorai.freeinfoproducts.com/",
    siteName: "Ventor AI",
    images: [
      {
        url: "/logo_ventor.png",
        width: 1200,
        height: 630,
        alt: "VendeCursos AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ventorai.freeinfoproducts.com/",
    languages: {
      "en-US": "https://ventorai.freeinfoproducts.com/",
      "es-ES": "https://ventorai.freeinfoproducts.com/",
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
