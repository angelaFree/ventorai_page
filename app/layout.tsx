import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ventorai.com"),
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
    url: "https://ventorai.com",
    siteName: "Ventor AI",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
        alt: "FlyerAI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://ventorai.com",
    languages: {
      "en-US": "https://ventorai.com",
      "es-ES": "https://ventorai.com/es",
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
      </body>
    </html>
  );
}
