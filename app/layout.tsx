import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kayson.vercel.app"),
  title: {
    default: "Kayson - Portfolio d'artiste contemporain",
    template: "%s | Kayson",
  },
  description:
    "Portfolio contemporain de Kayson, une experience visuelle sobre et premium pensee pour presenter une demarche artistique, des oeuvres et des prises de contact.",
  openGraph: {
    title: "Kayson - Portfolio d'artiste contemporain",
    description:
      "Decouvrez l'univers de Kayson a travers une selection d'oeuvres, une demarche artistique et un portfolio pense comme une galerie contemporaine.",
    url: "https://kayson.vercel.app",
    siteName: "Kayson",
    images: [
      {
        url: "/images/hero-landscape.jpg",
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
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
