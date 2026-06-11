"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ease = "power3.out";

function numericDatasetValue(
  element: HTMLElement,
  name: string,
  fallback: number,
) {
  const value = Number(element.dataset[name]);
  return Number.isFinite(value) ? value : fallback;
}

export function GsapSiteAnimations() {
  useGSAP(
    () => {
      const root = document.querySelector<HTMLElement>("[data-gsap-root]");

      if (!root) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(root.querySelectorAll(".gsap-reveal, .gsap-stagger-item"), {
          autoAlpha: 1,
          clearProps: "transform",
        });
        gsap.set(root.querySelectorAll(".gsap-image-reveal"), {
          clipPath: "inset(0% 0% 0% 0% round 30px)",
        });
        return;
      }

      const mm = gsap.matchMedia(root);

      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".gsap-header",
          { autoAlpha: 0, y: -18 },
          { autoAlpha: 1, y: 0, duration: 1.05, ease },
        );

        gsap.fromTo(
          ".gsap-hero-title",
          { autoAlpha: 0, y: 34, filter: "blur(6px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.25,
            ease,
            delay: 0.12,
          },
        );

        gsap.fromTo(
          ".gsap-hero-image",
          {
            autoAlpha: 0,
            y: 42,
            scale: 0.985,
            clipPath: "inset(8% 0% 8% 0% round 30px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            clipPath: "inset(0% 0% 0% 0% round 30px)",
            duration: 1.3,
            ease,
            delay: 0.28,
          },
        );

        const imageReveals = gsap.utils.toArray<HTMLElement>(
          ".gsap-image-reveal:not(.gsap-hero-image)",
        );

        imageReveals.forEach((image) => {
          gsap.fromTo(
            image,
            {
              autoAlpha: 0,
              y: 12,
              scale: 0.99,
              clipPath: "inset(9% 0% 9% 0% round 30px)",
            },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0% round 30px)",
              duration: 1.08,
              ease,
              scrollTrigger: {
                trigger: image,
                start: "top 92%",
                once: true,
              },
            },
          );

          const inner = image.querySelector("img");
          if (inner) {
            gsap.fromTo(
              inner,
              { scale: 1.045 },
              {
                scale: 1,
                duration: 1.4,
                ease,
                scrollTrigger: {
                  trigger: image,
                  start: "top 92%",
                  once: true,
                },
              },
            );
          }
        });

        return undefined;
      });

      mm.add("(max-width: 767px)", () => {
        gsap.fromTo(
          ".gsap-header",
          { autoAlpha: 0, y: -10 },
          { autoAlpha: 1, y: 0, duration: 0.75, ease },
        );

        gsap.fromTo(
          ".gsap-hero-title",
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease, delay: 0.08 },
        );

        gsap.fromTo(
          ".gsap-hero-image",
          {
            autoAlpha: 0,
            y: 26,
            clipPath: "inset(7% 0% 7% 0% round 30px)",
          },
          {
            autoAlpha: 1,
            y: 0,
            clipPath: "inset(0% 0% 0% 0% round 30px)",
            duration: 0.95,
            ease,
            delay: 0.18,
          },
        );

        gsap.set(".gsap-image-reveal:not(.gsap-hero-image)", {
          clipPath: "inset(0% 0% 0% 0% round 30px)",
        });

        return undefined;
      });

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        const y = numericDatasetValue(element, "gsapY", 28);
        const delay = numericDatasetValue(element, "gsapDelay", 0);

        if (
          element.querySelector(".gsap-hero-title") ||
          element.querySelector(".gsap-hero-image")
        ) {
          return;
        }

        gsap.fromTo(
          element,
          { autoAlpha: 0, y },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease,
            delay,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".gsap-stagger").forEach((container) => {
        const items = container.querySelectorAll(".gsap-stagger-item");
        const stagger = numericDatasetValue(container, "gsapStagger", 0.1);
        const delayChildren = numericDatasetValue(
          container,
          "gsapDelayChildren",
          0.04,
        );

        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 30 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease,
            delay: delayChildren,
            stagger,
            scrollTrigger: {
              trigger: container,
              start: "top 92%",
              once: true,
            },
          },
        );
      });

      ScrollTrigger.refresh();

      return () => mm.revert();
    },
    { dependencies: [] },
  );

  return null;
}
