import Icon from "@/components/Icon";

// Figma: SuccessIcon — 완료 표시(체크). 발행 완료·참석 신청 완료에 쓴다
export default function SuccessIcon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex size-64 shrink-0 items-center justify-center rounded-pill bg-info-subtle text-info-strong ${className}`}
    >
      {/* Figma: 32px 아이콘, 선 굵기 3px (24px 기준으로 환산하면 2.25) */}
      <Icon name="check" size={32} strokeWidth={2.25} />
    </div>
  );
}
