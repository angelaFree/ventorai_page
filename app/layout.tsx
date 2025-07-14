import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventorai.freeinfoproducts.com/"),
  title: {
    default: "FlyerAI - Create Viral Flyers Instantly",
    template: "%s | FlyerAI",
  },
  description:
    "Generate viral flyers in seconds with artificial intelligence. Forget Canva and expensive designers. Designs optimized based on top-performing ads from Facebook Ads Library.",
  keywords: [
    "viral flyers",
    "flyer ai",
    "ai flyer generator",
    "facebook ads library",
    "digital marketing",
    "flyer design",
    "canva alternative",
    "generative ai",
    "online sales",
    "social media",
    "flyers virales",
    "inteligencia artificial",
    "marketing digital",
    "diseño de flyers",
    "alternativa a Canva",
    "ventas online",
    "redes sociales",
    "crear flyers online",
  ],
  openGraph: {
    title: "FlyerAI - Create Viral Flyers Instantly",
    description:
      "Create viral flyers effortlessly. Always up-to-date templates optimized for any industry.",
    url: "https://ventorai.freeinfoproducts.com/",
    siteName: "Ventor AI",
    images: [
      {
        url: "/logo_ventor.png",
        width: 1200,
        height: 630,
        alt: "FlyerAI",
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
