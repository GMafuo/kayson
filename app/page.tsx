import { ArrowButton } from "@/components/arrow-button";
import { CylinderArt } from "@/components/cylinder-art";
import { HeroDevice } from "@/components/hero-device";
import { Icon } from "@/components/icons";
import { ImagePanel } from "@/components/image-panel";
import {
  ArtworkHover,
  Reveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion-primitives";
import { SectionHeading } from "@/components/section-heading";
import { SiteNavigation } from "@/components/site-navigation";
import {
  benefits,
  featureList,
  images,
  steps,
  tableColumns,
  trustedLogos,
} from "@/data/site";

function TrustedBy() {
  return (
    <section className="site-container border-b border-[#e8e8e1] pb-[50px] pt-[50px] md:pb-[50px]">
      <Reveal y={24}>
        <p className="text-[12px] leading-[1.4] text-[#8b8b86]">Trusted by:</p>
      </Reveal>
      <StaggerContainer className="mt-[30px] grid grid-cols-2 gap-x-10 gap-y-5 md:mt-[30px] md:grid-cols-6 md:gap-0">
        {trustedLogos.map((logo, index) => (
          <StaggerItem
            className="flex h-[82px] items-center justify-center text-[#999] grayscale"
            key={`${logo}-${index}`}
          >
            <span
              className={`text-[13px] font-semibold ${index % 3 === 0 ? "font-serif text-[20px]" : ""}`}
            >
              {logo}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section id="benefits" className="site-container py-20 md:pb-[169px] md:pt-[80px]">
      <Reveal>
        <SectionHeading
          eyebrow="Benefits"
          title="We've cracked the code."
          text="Area provides real insights, without the data overload."
        />
      </Reveal>
      <StaggerContainer className="mt-[50px] grid gap-y-5 divide-y divide-[#ecece7] md:mt-[50px] md:grid-cols-4 md:gap-x-5 md:divide-y-0">
        {benefits.map((benefit) => (
          <StaggerItem as="article" className="min-h-[229px] pt-10 md:border-t md:border-[#ecece7]" key={benefit.title}>
            <Icon name={benefit.icon as "cable"} className="text-[#111]" />
            <h3 className="mt-6 text-[14px] font-semibold leading-[1.3] text-[#111]">
              {benefit.title}
            </h3>
            <p className="mt-5 max-w-[330px] text-[13px] leading-[1.55] text-[#767672]">
              {benefit.text}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ArtworkHover className="group mt-20 h-[600px] overflow-hidden rounded-[18px] md:h-[620px]">
        <ImagePanel
          src={images.mountains}
          className="h-full w-full transition-[filter,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.05] group-hover:contrast-[1.04]"
        />
      </ArtworkHover>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="site-container grid border-t border-[#e8e8e1] py-[60px] md:grid-cols-2 md:gap-5 md:pb-[120px] md:pt-0">
      <div className="pb-[70px] md:h-[711px] md:pb-0 md:pt-[60px]">
        <Reveal>
          <div className="max-w-[510px]">
            <h2 className="font-serif text-[46px] leading-[0.98] text-[#111] md:text-[58px]">
              See the Big Picture
            </h2>
            <p className="mt-10 text-[15px] leading-[1.55] text-[#777]">
              Area turns your data into clear, vibrant visuals that show you exactly what&apos;s
              happening in each region.
            </p>
          </div>
        </Reveal>
        <StaggerContainer as="ol" className="mt-10 max-w-[590px] border-t border-[#e8e8e1]">
          {featureList.map((item, index) => (
            <StaggerItem
              as="li"
              className="grid min-h-[82px] grid-cols-[30px_1fr] gap-5 border-b border-[#e8e8e1] py-5 text-[15px] leading-[1.45] text-[#4f4f4b] md:grid-cols-[26px_1fr] md:gap-7"
              key={item}
            >
              <span className="text-[#8a8a85]">{String(index + 1).padStart(2, "0")}</span>
              <span>{item}</span>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <Reveal y={18} delay={0.1}>
          <ArrowButton variant="light" className="mt-10" href="#specifications">
            Discover More
          </ArrowButton>
        </Reveal>
      </div>
      <ArtworkHover className="group">
        <CylinderArt />
      </ArtworkHover>
    </section>
  );
}

function SpecsTable() {
  return (
    <section id="specifications" className="site-container border-t border-[#e8e8e1] py-20 md:pb-[203px] md:pt-[80px]">
      <Reveal>
        <SectionHeading
          centered
          eyebrow="Specs"
          title="Why Choose Area?"
          text="You need a solution that keeps up. That&apos;s why we developed Area. A developer-friendly approach to streamline your business."
        />
      </Reveal>
      <div className="mt-20 overflow-x-auto pb-2">
        <StaggerContainer className="grid min-w-[600px] grid-cols-3">
          {tableColumns.map((column, columnIndex) => (
            <StaggerItem
              className={`border-y border-[#e4e4de] ${columnIndex === 0 ? "rounded-l-[10px] border-l" : ""} ${
                columnIndex === tableColumns.length - 1 ? "rounded-r-[10px] border-r" : ""
              }`}
              key={column.title}
            >
              <div className="flex h-24 items-center justify-center border-b border-[#e4e4de] font-serif text-[28px] leading-none text-[#242420]">
                {column.title}
              </div>
              {column.values.map((value, rowIndex) => (
                <div
                  className="flex h-[79px] items-center gap-2 border-b border-[#ecece7] px-6 text-[13px] text-[#4d4d48] last:border-b-0 md:h-[81px] md:px-9"
                  key={`${column.title}-${value}-${rowIndex}`}
                >
                  <Icon
                    name={columnIndex === 2 && rowIndex % 2 === 1 ? "x" : "check"}
                    className={columnIndex === 2 && rowIndex % 2 === 1 ? "text-[#a1a19a]" : "text-[#6d8b35]"}
                  />
                  {value}
                </div>
              ))}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="site-container grid gap-10 border-t border-[#e8e8e1] py-[80px] md:grid-cols-2 md:gap-5">
      <ArtworkHover className="group h-[343px] overflow-hidden rounded-[18px] md:h-[669px]">
        <ImagePanel
          src={images.sculpture}
          className="h-full w-full transition-[filter,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.04] group-hover:contrast-[1.04]"
        />
      </ArtworkHover>
      <Reveal>
        <div className="flex min-h-[426px] flex-col justify-center bg-[#fbfbf7] px-4 md:min-h-[669px] md:px-[50px]">
          <blockquote className="font-serif text-[34px] leading-[1.05] text-[#171714] md:text-[42px]">
            &quot;I was skeptical, but Area has completely transformed the way I manage my
            business. The data visualizations are so clear and intuitive, and the platform is
            so easy to use. I can&apos;t imagine running my company without it.&quot;
          </blockquote>
          <div className="mt-12 flex items-baseline gap-2 md:block">
            <p className="text-[15px] font-semibold text-[#171714]">John Smith</p>
            <p className="text-[12px] text-[#6d8b35] md:mt-2">Head of Data</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-to" className="site-container border-t border-[#e8e8e1] py-20 md:pb-32 md:pt-[80px]">
      <Reveal>
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <h2 className="font-serif text-[46px] leading-[1.02] text-[#111] md:text-[58px]">
            Map Your Success
          </h2>
          <ArrowButton variant="light" className="self-start md:self-auto">
            Discover More
          </ArrowButton>
        </div>
      </Reveal>
      <StaggerContainer className="mt-20 flex gap-5 overflow-x-auto pb-6 md:grid md:grid-cols-3 md:overflow-visible">
        {steps.map((step) => (
          <StaggerItem as="article" className="min-w-[240px] border-t border-[#e8e8e1] pt-[60px]" key={step.number}>
            <p className="text-[64px] font-light leading-none text-[#aaa] md:text-[80px]">
              {step.number}
            </p>
            <h3 className="mt-[60px] text-[14px] font-semibold text-[#111]">{step.title}</h3>
            <p className="mt-5 max-w-[356px] text-[13px] leading-[1.55] text-[#777]">
              {step.text}
            </p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-container border-t border-[#e8e8e1] pb-5 pt-10">
      <Reveal y={20}>
        <div className="flex flex-col gap-12 md:h-10 md:flex-row md:items-center md:gap-7">
          {["Benefits", "Specifications", "How-to"].map((item) => (
            <a className="text-[12px] font-semibold text-[#111]" href="#" key={item}>
              {item}
            </a>
          ))}
        </div>
        <div className="mt-20 flex h-[70px] items-end justify-between gap-6 text-[12px] text-[#6d8b35] md:mt-20">
          <div className="flex items-end gap-10">
            <span className="text-[44px] leading-none text-[#111]">A</span>
            <span className="text-[#6d8b35]">© Area.</span>
            <span>2025</span>
          </div>
          <span>All Rights Reserved</span>
        </div>
      </Reveal>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#111]">
      <SiteNavigation />
      <section className="site-container pb-[15px] pt-[42px] md:pb-[165px] md:pt-0">
        <Reveal y={28} delay={0.08}>
          <h1 className="mx-auto max-w-[1200px] text-center font-serif text-[58px] leading-[0.99] tracking-normal text-[#050505] md:text-[104px] lg:text-[112px]">
            Browse everything.
          </h1>
        </Reveal>
        <Reveal className="mt-[120px] md:mt-[100px]" delay={0.18} y={36}>
          <HeroDevice />
        </Reveal>
      </section>
      <TrustedBy />
      <BenefitsSection />
      <FeaturesSection />
      <SpecsTable />
      <Testimonial />
      <HowItWorks />
      <section className="site-container py-0">
        <ArtworkHover className="group h-[600px] overflow-hidden rounded-[18px] md:h-[664px]">
          <ImagePanel
            src={images.greenRoad}
            className="h-full w-full transition-[filter,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.05] group-hover:contrast-[1.04]"
          />
        </ArtworkHover>
      </section>
      <section id="contact-us" className="site-container py-[120px] text-center">
        <Reveal>
          <h2 className="font-serif text-[46px] leading-[1] text-[#111] md:text-[58px]">
            Connect with us
          </h2>
          <p className="mx-auto mt-10 max-w-[600px] text-[15px] leading-[1.55] text-[#777]">
            Schedule a quick call to learn how Area can turn your regional data into a
            powerful advantage.
          </p>
          <ArrowButton className="mt-10 w-full max-w-[600px]">Learn More</ArrowButton>
        </Reveal>
      </section>
      <Footer />
    </main>
  );
}
