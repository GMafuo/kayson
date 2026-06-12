import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion-primitives";
import { ImagePanel } from "@/components/image-panel";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description: "Présentation de la démarche artistique et de l'univers de Kayson.",
};

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container grid gap-10 py-16 md:grid-cols-2 md:py-24">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[var(--caption)]" href="/">
            Retour à l&apos;accueil
          </Link>
          <h1 className="mt-16 font-serif text-[58px] leading-[0.98] md:text-[96px]">
            À propos
          </h1>
          <p className="mt-10 max-w-[620px] text-[15px] leading-[1.7] text-[#777]">
            Kayson développe une pratique visuelle attentive aux paysages, aux
            structures et aux tensions silencieuses entre matière, espace et mémoire.
            Cette V1 pose les bases d&apos;un portfolio public clair, fluide et déployable.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <ImagePanel
            src={images.sculpture}
            alt="Sculpture minérale dans un paysage naturel"
            className="h-[520px]"
          />
        </Reveal>
      </section>
    </main>
  );
}
