import type { Metadata } from "next";
import { Crimson_Text, DM_Sans, Roboto_Mono } from "next/font/google";
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
  metadataBase: new URL("https://ckayson.vercel.app"),
  title: {
    default: "Kayson",
    template: "%s | Kayson",
  },
  description:
    "Site officiel de Kayson, artiste indépendant entre pop moderne et influences R&B.",
  openGraph: {
    title: "Kayson",
    description:
      "Découvrez l'univers de Kayson, sa discographie et ses liens officiels.",
    url: "https://ckayson.vercel.app",
    siteName: "Kayson",
    images: [
      {
        url: "/kayson-figma/hero-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kayson portfolio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
      <body className="min-h-full">{children}</body>
    </html>
  );
}
