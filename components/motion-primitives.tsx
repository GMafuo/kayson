"use client";

import type { ReactNode } from "react";

type MotionPrimitiveProps = {
  children: ReactNode;
  className?: string;
};

type RevealProps = MotionPrimitiveProps & {
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 32,
}: RevealProps) {
  return (
    <div
      className={`gsap-reveal ${className}`}
      data-gsap-delay={delay}
      data-gsap-y={y}
    >
      {children}
    </div>
  );
}

type HeaderRevealProps = MotionPrimitiveProps;

export function HeaderReveal({ children, className = "" }: HeaderRevealProps) {
  return <header className={`gsap-header ${className}`}>{children}</header>;
}

type StaggerContainerProps = MotionPrimitiveProps & {
  as?: "div" | "ol" | "ul";
  delayChildren?: number;
  staggerChildren?: number;
};

export function StaggerContainer({
  as = "div",
  children,
  className = "",
  delayChildren = 0.06,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  const Tag = as;

  return (
    <Tag
      className={`gsap-stagger ${className}`}
      data-gsap-delay-children={delayChildren}
      data-gsap-stagger={staggerChildren}
    >
      {children}
    </Tag>
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
  const Tag = as;

  return (
    <Tag className={`gsap-stagger-item ${className}`}>
      {children}
    </Tag>
  );
}

export function ArtworkHover({ children, className = "" }: MotionPrimitiveProps) {
  return <div className={`artwork-hover ${className}`}>{children}</div>;
}
