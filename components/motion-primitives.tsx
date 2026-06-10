"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const premiumEase = [0.22, 1, 0.36, 1] as const;

type MotionPrimitiveProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = MotionPrimitiveProps & {
  delay?: number;
  y?: number;
  amount?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
  amount = 0.2,
}: RevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: premiumEase, delay }}
    >
      {children}
    </motion.div>
  );
}

type HeaderRevealProps = MotionPrimitiveProps;

export function HeaderReveal({ children, className = "" }: HeaderRevealProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <header className={className}>{children}</header>;
  }

  return (
    <motion.header
      className={className}
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: premiumEase }}
    >
      {children}
    </motion.header>
  );
}

type StaggerContainerProps = MotionPrimitiveProps & {
  as?: "div" | "ol" | "ul";
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
};

export function StaggerContainer({
  as = "div",
  children,
  className = "",
  amount = 0.18,
  delayChildren = 0.06,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion();
  const StaticTag = as;
  const MotionTag =
    as === "ol" ? motion.ol : as === "ul" ? motion.ul : motion.div;

  if (reducedMotion) {
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = MotionPrimitiveProps & {
  as?: "div" | "li" | "article";
};

export function StaggerItem({
  as = "div",
  children,
  className = "",
}: StaggerItemProps) {
  const reducedMotion = useReducedMotion();
  const StaticTag = as;
  const MotionTag =
    as === "li" ? motion.li : as === "article" ? motion.article : motion.div;

  if (reducedMotion) {
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.85,
            ease: premiumEase,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function ArtworkHover({ children, className = "" }: MotionPrimitiveProps) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y: -3, scale: 1.006 }}
      transition={{ duration: 0.9, ease: premiumEase }}
    >
      {children}
    </motion.div>
  );
}
