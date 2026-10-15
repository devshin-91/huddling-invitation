import SectionHeader from "@/components/SectionHeader";
import Image from "@/components/Image";

type InvitationCoverProps = {
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  className?: string;
};

// 일시·장소 한 묶음 (라벨 칩 + 값)
function CoverDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-inline-md">
      <span className="rounded-control bg-info-subtle px-inline-compact py-inline-xs text-caption-md font-semibold text-info-strong">
        {label}
      </span>
      <p className="whitespace-pre-line text-center text-label-md text-text-inverse">{value}</p>
    </div>
  );
}

// Figma: InvitationCover — 초대장 상단 커버(제목 + 대표 이미지 + 일시·장소)
// /create 미리보기와 /i/[id]에서 같은 컴포넌트를 쓴다
export default function InvitationCover({
  title,
  subtitle,
  date,
  location,
  className = "",
}: InvitationCoverProps) {
  return (
    <section
      className={`flex flex-col items-center gap-page-horizontal bg-linear-to-b from-cover-gradient-from to-cover-gradient-to px-page-horizontal py-cover-inset ${className}`}
    >
      <SectionHeader tone="inverse" subtitle={subtitle} title={title} className="w-full" />
      <Image type="character" alt="" />
      <CoverDetail label="일시" value={date} />
      <CoverDetail label="장소" value={location} />
    </section>
  );
}
