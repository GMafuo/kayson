"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { HeaderReveal } from "@/components/motion-primitives";
import { navItems } from "@/data/site";

function itemHref(item: string) {
  const ids: Record<string, string> = {
    "L'artiste": "artiste",
    Univers: "univers",
    Discographie: "discographie",
    Contact: "contact",
  };

  return `#${ids[item] ?? item.toLowerCase()}`;
}

export function SiteNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <HeaderReveal className="site-container relative z-30 flex h-[86px] items-start justify-between pt-5 md:h-[148px] md:pb-20">
      <a className="text-[24px] font-medium leading-[1.2] tracking-[-1.2px] text-black md:text-[30px] md:tracking-[-1.5px]" href="#top">
        Kayson
      </a>

      <nav
        aria-label="Primary"
        className="fixed left-1/2 top-4 hidden -translate-x-1/2 rounded-full bg-white/40 px-6 py-5 text-center text-[14px] font-bold tracking-[-0.35px] text-black backdrop-blur-[15px] md:block"
      >
        <ul className="flex items-center gap-[27px]">
          {navItems.map((item) => (
            <li key={item}>
              <a href={itemHref(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a
        className="hidden rounded-full bg-black px-[22px] py-[14px] text-center text-[14px] font-bold leading-[1.4] tracking-[-0.35px] text-white md:inline-flex md:items-center md:gap-2"
        href="https://open.spotify.com/intl-fr/artist/592Fx192BSIFGTS9ldHXoI?si=sSMbXlYDQ92kZhmZAMjHHw"
        target="_blank"
        rel="noreferrer"
      >
        Écoute Kayson ici
        <Image
          aria-hidden="true"
          className="h-[7px] w-[7px] invert"
          src="/kayson-figma/arrow.svg"
          width={7}
          height={7}
          alt=""
        />
      </a>

      <button
        className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[var(--divider)] text-black md:hidden"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span
          className={`absolute h-[2px] w-3 bg-current transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "rotate-45" : "-translate-y-[3px]"
          }`}
        />
        <span
          className={`absolute h-[2px] w-3 bg-current transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "-rotate-45" : "translate-y-[3px]"
          }`}
        />
      </button>

      {isOpen ? (
        <motion.nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="absolute left-4 right-4 top-[72px] rounded-[18px] border border-[var(--divider)] bg-white p-3 shadow-[0_24px_60px_rgba(0,0,0,0.08)] md:hidden"
          initial={reducedMotion ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="divide-y divide-[#e8e8e1]">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  className="block px-3 py-4 text-[14px] font-semibold text-[#111]"
                  href={itemHref(item)}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-black px-[22px] py-[14px] text-[14px] font-bold text-white"
            href="https://open.spotify.com/intl-fr/artist/592Fx192BSIFGTS9ldHXoI?si=sSMbXlYDQ92kZhmZAMjHHw"
            target="_blank"
            rel="noreferrer"
          >
            Écoute Kayson ici
            <Image
              aria-hidden="true"
              className="h-[7px] w-[7px] invert"
              src="/kayson-figma/arrow.svg"
              width={7}
              height={7}
              alt=""
            />
          </a>
        </motion.nav>
      ) : null}
    </HeaderReveal>
  );
}
