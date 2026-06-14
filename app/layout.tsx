import type { Metadata } from "next";
import { Crimson_Text, DM_Sans, Roboto_Mono } from "next/font/google";
import { artistLinks, siteUrl } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const crimson = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kayson | Artiste pop & R&B - Site officiel",
    template: "%s | Kayson",
  },
  description:
    "Site officiel de Kayson, artiste indépendant originaire de Chartres, entre pop moderne, émotions sincères et influences R&B contemporaines.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kayson | Artiste pop & R&B - Site officiel",
    description:
      "Découvrez l'univers de Kayson, sa discographie et ses liens officiels.",
    url: siteUrl,
    siteName: "Kayson",
    images: [
      {
        url: "/kayson-figma/hero-image.jpg",
        width: 1200,
        height: 820,
        alt: "Kayson portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const musicGroupJsonLd = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "Kayson",
  url: siteUrl,
  image: `${siteUrl}/kayson-figma/hero-image.jpg`,
  description:
    "Kayson est un artiste indépendant originaire de Chartres, entre pop moderne et influences R&B contemporaines.",
  genre: ["Pop", "R&B"],
  sameAs: [
    artistLinks.spotify,
    artistLinks.instagram,
    artistLinks.tiktok,
    artistLinks.youtube,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${dmSans.variable} ${crimson.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicGroupJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
