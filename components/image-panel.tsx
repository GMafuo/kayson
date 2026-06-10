type ImagePanelProps = {
  src: string;
  className?: string;
  rounded?: string;
};

export function ImagePanel({
  src,
  className = "",
  rounded = "rounded-[18px]",
}: ImagePanelProps) {
  return (
    <div
      className={`${rounded} bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label=""
    />
  );
}
