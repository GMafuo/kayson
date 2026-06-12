import type { Metadata } from "next";
import Link from "next/link";
import { ArtworkHover, Reveal, StaggerContainer, StaggerItem } from "@/components/motion-primitives";
import { ImagePanel } from "@/components/image-panel";
import { images } from "@/data/site";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Sélection d'œuvres et de recherches visuelles du portfolio Kayson.",
};

const artworks = [
  { title: "Étude territoriale", image: images.mountains },
  { title: "Ligne de passage", image: images.heroLandscape },
  { title: "Équilibre minéral", image: images.sculpture },
];

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <section className="site-container py-16 md:py-24">
        <Reveal>
          <Link className="text-[12px] font-semibold text-[var(--caption)]" href="/">
            Retour à l&apos;accueil
          </Link>
          <h1 className="mt-16 max-w-[900px] font-serif text-[58px] leading-[0.98] md:text-[96px]">
            Galerie
          </h1>
          <p className="mt-10 max-w-[620px] text-[15px] leading-[1.6] text-[#777]">
            Une sélection courte pour présenter l&apos;univers visuel de Kayson dans une
            lecture calme, proche d&apos;une galerie contemporaine.
          </p>
        </Reveal>
        <StaggerContainer className="mt-20 grid gap-5 md:grid-cols-3">
          {artworks.map((artwork) => (
            <StaggerItem as="article" key={artwork.title}>
              <ArtworkHover className="group overflow-hidden rounded-[18px]">
                <ImagePanel
                  src={artwork.image}
                  alt={artwork.title}
                  className="h-[420px] transition-[filter,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.05] group-hover:contrast-[1.04]"
                />
              </ArtworkHover>
              <h2 className="mt-5 text-[15px] font-semibold">{artwork.title}</h2>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>
    </main>
  );
}
