import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Kayson.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container py-16 md:py-24">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[var(--caption)]" href="/">
            Retour à l&apos;accueil
          </Link>
          <h1 className="mt-16 font-serif text-[50px] leading-[0.98] md:text-[82px]">
            Mentions légales
          </h1>
          <div className="mt-14 max-w-[760px] space-y-8 text-[15px] leading-[1.7] text-[#666]">
            <p>
              Site édité pour le portfolio Kayson. Les informations définitives
              d&apos;éditeur, d&apos;hébergeur et de contact légal pourront être complétées
              avant publication officielle.
            </p>
            <p>
              Hébergement prévu : Vercel Inc., plateforme d&apos;hébergement web pour
              applications Next.js.
            </p>
            <p>
              Les contenus, images et textes présentés sur ce site sont protégés
              et ne peuvent pas être réutilisés sans autorisation.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
