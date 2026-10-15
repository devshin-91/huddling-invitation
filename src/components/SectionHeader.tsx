type SectionHeaderProps = {
  subtitle?: string;
  title?: string;
  description?: string;
  // inverse: 어두운 배경 위 흰 글자 (InvitationCover에서 사용)
  tone?: "default" | "inverse";
  className?: string;
};

// Figma: SectionHeader — subtitle · title · description 묶음. 넘기지 않은 줄은 보이지 않는다
// 입력한 줄바꿈은 그대로 보여준다 (whitespace-pre-line)
export default function SectionHeader({
  subtitle,
  title,
  description,
  tone = "default",
  className = "",
}: SectionHeaderProps) {
  const isInverse = tone === "inverse";

  return (
    <div className={`flex flex-col items-center gap-stack-md text-center ${className}`}>
      {subtitle && (
        <p
          className={`text-label-md ${isInverse ? "text-text-inverse opacity-60" : "text-action-secondary"}`}
        >
          {subtitle}
        </p>
      )}
      {title && (
        <h2
          className={`whitespace-pre-line text-title-lg ${isInverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`whitespace-pre-line text-body-md ${isInverse ? "text-text-inverse" : "text-text-primary"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
