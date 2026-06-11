import Image from "next/image";
import {
  ArtworkHover,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-primitives";
import { GsapSiteAnimations } from "@/components/gsap-site-animations";
import { SiteNavigation } from "@/components/site-navigation";

const listeningUrl =
  "https://open.spotify.com/intl-fr/artist/592Fx192BSIFGTS9ldHXoI?si=sSMbXlYDQ92kZhmZAMjHHw";

const universeItems = [
  {
    icon: "/kayson-figma/icon-01.svg",
    title: "Artiste indépendant",
    text: "Kayson écrit, compose, produit, enregistre et mixe l'ensemble de ses morceaux depuis son home studio.",
  },
  {
    icon: "/kayson-figma/icon-02.svg",
    title: "Entre Pop et R&B",
    text: "Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.",
  },
  {
    icon: "/kayson-figma/icon-03.svg",
    title: "Une vision artistique complète",
    text: "De la musique aux clips vidéo, en passant par les visuels et les contenus digitaux, chaque détail participe à la construction de son identité artistique.",
  },
  {
    icon: "/kayson-figma/icon-04.svg",
    title: "Une audience en pleine croissance",
    text: "En seulement quelques années, Kayson a réuni une communauté de plus de 115 000 abonnés sur les réseaux sociaux et cumule plus de 10 millions de streams.",
  },
];

const releases = [
  { image: "/kayson-figma/cover-01.jpg", title: "Bébé n'est plus la", meta: "Single • 2026" },
  { image: "/kayson-figma/cover-02.jpg", title: "Prémices", meta: "EP • 2026" },
  { image: "/kayson-figma/cover-03.jpg", title: "Nova", meta: "EP • 2025" },
  { image: "/kayson-figma/cover-04.jpg", title: "Larmes", meta: "EP • 2025" },
  { image: "/kayson-figma/cover-05.jpg", title: "Roméo", meta: "Single • 2025" },
  { image: "/kayson-figma/cover-06.jpg", title: "Perdre la raison", meta: "Single • 2025" },
  { image: "/kayson-figma/cover-07.jpg", title: "Que Du Love", meta: "EP • 2024" },
  { image: "/kayson-figma/cover-08.jpg", title: "Solo", meta: "Single • 2024" },
  { image: "/kayson-figma/cover-09.jpg", title: "J'avoue", meta: "Single • 2024" },
  { image: "/kayson-figma/cover-10.jpg", title: "C'est toi", meta: "Single • 2024" },
];

function ListenButton({
  children,
  variant = "dark",
}: {
  children: string;
  variant?: "dark" | "soft";
}) {
  return (
    <a
      className={`inline-flex items-center justify-center rounded-full px-[22px] py-[14px] text-center text-[14px] font-bold leading-[1.4] tracking-[-0.35px] ${
        variant === "dark" ? "bg-black text-white" : "bg-[var(--accent-soft)] text-black"
      }`}
      href={listeningUrl}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

function ImageBlock({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return (
    <ArtworkHover className={`gsap-image-reveal group relative overflow-hidden rounded-[30px] ${className}`}>
      <Image
        className="kayson-large-image object-cover"
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
      />
    </ArtworkHover>
  );
}

function AboutSection() {
  return (
    <section
      id="artiste"
      className="site-container grid gap-5 border-t border-[var(--divider)] pb-[80px] pt-[60px] md:grid-cols-[626px_minmax(0,1fr)] md:pb-[120px]"
    >
      <Reveal className="flex flex-col items-start md:h-full md:pb-20">
        <div className="max-w-[552px] md:pr-20">
          <h2 className="font-serif text-[46px] leading-[0.9] tracking-[-1.38px] text-black md:text-[60px] md:tracking-[-1.8px]">
            Qui est Kayson ?
          </h2>
          <div className="mt-10 max-w-[461px] space-y-0 text-[16px] leading-[1.4] tracking-[-0.08px] text-[#1a1a1a] md:text-[20px] md:tracking-[-0.1px]">
            <p>
              Originaire de Chartres, Kayson est un artiste indépendant qui construit son
              univers de A à Z. Écriture, composition, production, mixage, réalisation
              vidéo : chaque création est imaginée et réalisée depuis son home studio.
            </p>
            <p>
              Entre pop moderne et influences R&B, sa musique raconte les relations, les
              sentiments et les moments qui marquent une vie. Des mélodies sincères, des
              productions actuelles et une identité artistique entièrement façonnée par
              l&apos;artiste lui-même.
            </p>
            <p>
              Après plus de 10 millions de streams cumulés et une communauté sur les réseaux
              sociaux, Kayson poursuit son évolution avec de nouveaux projets et une ambition
              simple : créer une musique authentique qui parle à ceux qui l&apos;écoutent.
            </p>
          </div>
        </div>
        <div className="mt-10 md:mt-auto">
          <ListenButton>ÉCOUTES ICI</ListenButton>
        </div>
      </Reveal>

      <Reveal delay={0.1} y={36}>
        <ImageBlock
          src="/kayson-figma/about-image.jpg"
          alt="Portrait de Kayson"
          className="h-[460px] md:h-[711px]"
        />
      </Reveal>
    </section>
  );
}

function UniverseSection() {
  return (
    <section id="univer" className="site-container pb-[80px] md:pb-[120px]">
      <Reveal className="border-t border-[var(--divider)] pb-[40px] pt-[17px] md:pb-[86px]">
        <p className="font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[var(--caption)]">
          Benefits
        </p>
        <h2 className="mt-[50px] font-serif text-[46px] leading-[0.9] tracking-[-1.38px] text-black md:text-[60px] md:tracking-[-1.8px]">
          SON UNIVER
        </h2>
      </Reveal>

      <StaggerContainer className="grid gap-5 md:grid-cols-4">
        {universeItems.map((item) => (
          <StaggerItem
            as="article"
            className="border-t border-[var(--divider)] py-10 pr-5"
            key={item.title}
          >
            <Image
              className="h-6 w-6"
              src={item.icon}
              width={24}
              height={24}
              alt=""
              aria-hidden="true"
            />
            <h3 className="mt-6 font-serif text-[24px] leading-none tracking-[-0.72px] text-black">
              {item.title}
            </h3>
            <p className="mt-5 text-[15px] leading-[1.4] tracking-[-0.075px] text-[var(--muted)]">
              {item.text}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <Reveal className="mt-10 md:mt-20" y={36}>
        <ImageBlock
          src="/kayson-figma/universe-hero.jpg"
          alt="Kayson en studio, éclairage rouge et bleu"
          className="h-[440px] md:h-[620px]"
        />
      </Reveal>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="site-container grid gap-10 pb-[80px] md:grid-cols-2 md:gap-5 md:pb-[120px]">
      <Reveal>
        <ImageBlock
          src="/kayson-figma/quote-image.jpg"
          alt="Kayson de profil en extérieur"
          className="aspect-[550/624]"
        />
      </Reveal>
      <Reveal className="flex border-t border-[var(--divider)] md:pl-[50px]" delay={0.1}>
        <blockquote className="flex min-h-[360px] flex-col justify-center gap-[50px] md:min-h-full">
          <p className="font-serif text-[34px] leading-none tracking-[-1.36px] text-black md:text-[40px] md:tracking-[-1.6px]">
            « Je ne cherche pas seulement à faire des chansons. Je veux créer des morceaux
            dans lesquels chacun peut retrouver une partie de son histoire. »
          </p>
          <cite className="not-italic text-[20px] leading-[1.4] tracking-[-0.1px] text-black">
            Kayson
          </cite>
        </blockquote>
      </Reveal>
    </section>
  );
}

function DiscographySection() {
  return (
    <section id="discographie" className="site-container pb-[80px] md:pb-[120px]">
      <Reveal className="flex flex-col gap-8 border-t border-[var(--divider)] pt-20 md:flex-row md:items-start md:justify-between">
        <h2 className="font-serif text-[46px] leading-[0.9] tracking-[-1.38px] text-black md:text-[60px] md:tracking-[-1.8px]">
          DISCOGRAPHIE :
        </h2>
        <ListenButton>Écoutes ici</ListenButton>
      </Reveal>

      <StaggerContainer className="mt-[34px] grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-5 md:gap-x-[43px] md:gap-y-[62px]">
        {releases.map((release) => (
          <StaggerItem key={release.title}>
            <ArtworkHover className="group relative aspect-square overflow-hidden rounded-[18px] md:rounded-[30px]">
              <Image
                className="object-cover transition-[filter,transform] duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.05]"
                src={release.image}
                alt={`Pochette ${release.title}`}
                fill
                sizes="(min-width: 768px) 205px, 50vw"
              />
            </ArtworkHover>
            <h3 className="mt-4 font-serif text-[25px] leading-[0.9] tracking-[-0.75px] text-black md:text-[32px] md:tracking-[-0.96px]">
              {release.title}
            </h3>
            <p className="font-serif text-[19px] leading-[0.9] tracking-[-0.57px] text-black md:text-[24px] md:tracking-[-0.96px]">
              {release.meta}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="site-container border-t border-[var(--divider)] px-4 py-[100px] text-center md:px-[300px] md:py-[120px]"
    >
      <Reveal>
        <h2 className="font-serif text-[46px] leading-[0.9] tracking-[-1.38px] text-black md:text-[60px] md:tracking-[-1.8px]">
          Contact
        </h2>
        <div className="mt-10 text-center text-[15px] leading-[1.4] tracking-[-0.075px] text-[var(--muted)]">
          <p className="text-[16px] tracking-[-0.08px]">Mail :</p>
          <a href="mailto:Kayson.management@gmail.com">Kayson.management@gmail.com</a>
        </div>
        <div className="mt-10 flex items-center justify-center gap-[27px] text-[14px] font-bold tracking-[-0.35px] text-black">
          <a href="https://www.instagram.com/kayson.csx/" target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
          <a href="https://www.tiktok.com/@kayson_off" target="_blank" rel="noreferrer">
            TIKTOK
          </a>
          <a href="https://www.youtube.com/@Kayson-" target="_blank" rel="noreferrer">
            YOUTUBE
          </a>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-container border-t border-[var(--divider)] pb-5 pt-10">
      <div className="flex items-end justify-between gap-8 font-mono text-[12px] leading-[1.4] tracking-[-0.12px] text-[var(--caption)]">
        <p>© Kayson.</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white text-black" data-gsap-root>
      <GsapSiteAnimations />
      <SiteNavigation />
      <section className="site-container pb-[48px] md:pb-[105px]">
        <Reveal y={24}>
          <h1 className="gsap-hero-title text-center font-serif text-[82px] leading-[0.9] tracking-[-3.4px] text-black sm:text-[118px] md:text-[160px] md:tracking-[-6.8px]">
            KAYSON
          </h1>
        </Reveal>
        <Reveal className="mt-[60px]" delay={0.12} y={36}>
          <ImageBlock
            src="/kayson-figma/hero-image.jpg"
            alt="Kayson dans un paysage brumeux"
            className="gsap-hero-image h-[420px] md:h-[620px]"
          />
        </Reveal>
      </section>
      <AboutSection />
      <UniverseSection />
      <QuoteSection />
      <DiscographySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
