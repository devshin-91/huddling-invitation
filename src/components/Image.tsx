import NextImage from "next/image";

type ImageProps = {
  type: "character" | "flag";
  // 이미지 설명. 꾸밈용이면 빈 문자열("")
  alt: string;
  className?: string;
};

// Figma: Image — type=character(펭귄 캐릭터, 201px) · flag(깃발, 48px)
export default function Image({ type, alt, className = "" }: ImageProps) {
  if (type === "flag") {
    return (
      <NextImage
        src="/images/flag.png"
        alt={alt}
        width={48}
        height={48}
        className={`size-48 rounded-scaled-media object-cover ${className}`}
      />
    );
  }

  return (
    <NextImage
      src="/images/character.png"
      alt={alt}
      width={201}
      height={201}
      className={`size-201 object-cover ${className}`}
    />
  );
}
