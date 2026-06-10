type IconName = "cable" | "globe" | "account" | "chart" | "check" | "x";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    className: `h-6 w-6 ${className}`,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "globe") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9M12 3c-2.4 2.6-3.6 5.6-3.6 9s1.2 6.4 3.6 9" />
      </svg>
    );
  }

  if (name === "account") {
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5 20c1.2-3.8 4-5.7 7-5.7s5.8 1.9 7 5.7" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg {...common}>
        <path d="M4 17.5 9 12l4 3.2 7-8.7" />
        <path d="M4 20h16" />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...common} className={`h-3.5 w-3.5 ${className}`}>
        <path d="m4 12 4.5 4.5L20 5" />
      </svg>
    );
  }

  if (name === "x") {
    return (
      <svg {...common} className={`h-3.5 w-3.5 ${className}`}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 8h10M7 16h10" />
      <path d="M8 4 5 8l3 4M16 12l3 4-3 4" />
    </svg>
  );
}
