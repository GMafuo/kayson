"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowButton } from "@/components/arrow-button";
import { BrandLogo } from "@/components/brand-logo";
import { HeaderReveal } from "@/components/motion-primitives";
import { navItems } from "@/data/site";

function itemHref(item: string) {
  return `#${item.toLowerCase().replaceAll(" ", "-")}`;
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
    <HeaderReveal className="relative z-10 mx-auto flex h-[78px] w-full max-w-[1280px] items-center justify-between px-4 md:h-[148px] md:px-10">
      <BrandLogo className="text-[15px] text-[#111]" />
      <nav aria-label="Primary" className="hidden md:block">
        <ul className="flex h-[60px] items-center gap-[27px] rounded-full px-6 text-[12px] font-semibold text-[#111]">
          {navItems.map((item) => (
            <li key={item}>
              <a href={itemHref(item)}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden md:block">
        <ArrowButton className="h-10 px-5" />
      </div>
      <button
        className="relative flex h-8 w-8 items-center justify-center rounded-sm border border-[#e8e8e3] text-[#111] md:hidden"
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
          className="absolute left-4 right-4 top-[66px] rounded-[14px] border border-[#e8e8e1] bg-[#fffefa] p-3 shadow-[0_24px_60px_rgba(67,91,10,0.10)] md:hidden"
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
          <ArrowButton className="mt-3 w-full" />
        </motion.nav>
      ) : null}
    </HeaderReveal>
  );
}
