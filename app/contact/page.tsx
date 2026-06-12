import type { Metadata } from "next";
import Link from "next/link";
import { ArrowButton } from "@/components/arrow-button";
import { Reveal } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Contact",
  description: "Prendre contact avec Kayson pour une collaboration, une exposition ou une commande.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container py-16 text-center md:py-32">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[var(--caption)]" href="/">
            Retour à l&apos;accueil
          </Link>
          <h1 className="mx-auto mt-16 max-w-[900px] font-serif text-[58px] leading-[0.98] md:text-[96px]">
            Contact
          </h1>
          <p className="mx-auto mt-10 max-w-[600px] text-[15px] leading-[1.7] text-[#777]">
            Pour une exposition, une collaboration ou une demande professionnelle,
            contactez Kayson afin d&apos;ouvrir un premier échange.
          </p>
          <ArrowButton className="mt-10 w-full max-w-[360px]" href="mailto:contact@kayson.art">
            Écrire à Kayson
          </ArrowButton>
        </Reveal>
      </section>
    </main>
  );
}
