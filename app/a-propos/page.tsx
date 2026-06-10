import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";
import { ImagePanel } from "@/components/image-panel";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "A propos",
  description: "Presentation de la demarche artistique et de l'univers de Kayson.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[#6d8b35]" href="/">
            Retour a l&apos;accueil
          </Link>
          <h1 className="mt-16 font-serif text-[58px] leading-[0.98] md:text-[96px]">
            A propos
          </h1>
          <p className="mt-10 max-w-[620px] text-[15px] leading-[1.7] text-[#777]">
            Kayson developpe une pratique visuelle attentive aux paysages, aux
            structures et aux tensions silencieuses entre matiere, espace et memoire.
            Cette V1 pose les bases d&apos;un portfolio public clair, fluide et deployable.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ImagePanel src={images.sculpture} className="h-[520px]" />
        </Reveal>
      </section>
    </main>
  );
}
