type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  centered?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-[800px] ${centered ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p className="mb-10 text-[12px] font-medium leading-none text-[#6d8b35] md:mb-12">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-[46px] leading-[0.98] tracking-normal text-[#111] md:text-[58px]">
        {title}
      </h2>
      {text ? (
        <p className="mt-10 max-w-[800px] text-[15px] leading-[1.55] text-[#777] md:mt-11">
          {text}
        </p>
      ) : null}
    </div>
  );
}
