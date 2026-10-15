import InvitationCover from "@/components/InvitationCover";
import Image from "@/components/Image";
import InfoRow from "@/components/InfoRow";

type InvitationContentProps = {
  title: string;
  datetime: string;
  location: string;
  body: string;
};

// 초대장 본문 전체 (커버 + 본문 + 일시·장소 카드)
// /create 미리보기와 /i/[id]에서 같은 모양으로 쓴다
export default function InvitationContent({ title, datetime, location, body }: InvitationContentProps) {
  return (
    <>
      <InvitationCover title={title} date={datetime} location={location} />
      <div className="flex flex-col items-center gap-stack-md bg-surface-default px-page-horizontal py-cover-inset">
        <Image type="flag" alt="" />
        <p className="w-full whitespace-pre-wrap break-words text-center text-body-compact text-text-primary">
          {body}
        </p>
      </div>
      <div className="bg-surface-default px-page-horizontal pb-section-lg pt-stack-lg">
        <div className="flex flex-col gap-control-compact rounded-card bg-surface-subtle p-page-horizontal">
          <InfoRow label="일시" value={datetime} />
          <InfoRow label="장소" value={location} />
        </div>
      </div>
    </>
  );
}
