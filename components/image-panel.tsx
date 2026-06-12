type ImagePanelProps = {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
};

export function ImagePanel({
  src,
  alt,
  className = "",
  rounded = "rounded-[18px]",
}: ImagePanelProps) {
  return (
    <div
      className={`${rounded} bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
      role="img"
      aria-label={alt}
    />
  );
}
