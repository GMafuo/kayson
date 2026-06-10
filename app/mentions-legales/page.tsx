import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales du site Kayson.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container py-16 md:py-24">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[#6d8b35]" href="/">
            Retour a l&apos;accueil
          </Link>
          <h1 className="mt-16 font-serif text-[50px] leading-[0.98] md:text-[82px]">
            Mentions legales
          </h1>
          <div className="mt-14 max-w-[760px] space-y-8 text-[15px] leading-[1.7] text-[#666]">
            <p>
              Site edite pour le portfolio Kayson. Les informations definitives
              d&apos;editeur, d&apos;hebergeur et de contact legal pourront etre completees
              avant publication officielle.
            </p>
            <p>
              Hebergement prevu: Vercel Inc., plateforme d&apos;hebergement web pour
              applications Next.js.
            </p>
            <p>
              Les contenus, images et textes presentes sur ce site sont proteges
              et ne peuvent pas etre reutilises sans autorisation.
            </p>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
