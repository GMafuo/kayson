type ArrowButtonProps = {
  children?: React.ReactNode;
  href?: string;
  variant?: "dark" | "light";
  className?: string;
};

export function ArrowButton({
  children = "Learn More",
  href = "#contact-us",
  variant = "dark",
  className = "",
}: ArrowButtonProps) {
  return (
    <a
      className={`inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[12px] font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#455d12]/30 ${
        variant === "dark"
          ? "bg-[#435b0a] text-white hover:bg-[#2f4106]"
          : "bg-[#e7f3c9] text-[#435b0a] hover:bg-[#dcebb7]"
      } ${className}`}
      href={href}
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}
