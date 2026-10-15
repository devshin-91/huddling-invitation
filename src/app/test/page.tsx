import type { ReactNode } from "react";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Label from "@/components/Label";
import InputField from "@/components/InputField";
import TextareaField from "@/components/TextareaField";
import Radio from "@/components/Radio";
import AttendanceBadge from "@/components/AttendanceBadge";
import StatCard from "@/components/StatCard";
import InfoRow from "@/components/InfoRow";
import EmptyState from "@/components/EmptyState";
import SectionHeader from "@/components/SectionHeader";
import Image from "@/components/Image";
import SuccessIcon from "@/components/SuccessIcon";
import StepButton from "@/components/StepButton";
import NavBar from "@/components/NavBar";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import RadioOption from "@/components/RadioOption";
import ResponseRow from "@/components/ResponseRow";
import CopyLinkField from "@/components/CopyLinkField";
import InvitationCover from "@/components/InvitationCover";
import RSVPCard from "@/components/RSVPCard";

// 실습용 테스트 페이지: 컴포넌트를 종류별로 확인한다.
const sizes = ["sm", "md", "lg"] as const;

function Demo({ name, children }: { name: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-stack-sm">
      <h2 className="text-heading-md">{name}</h2>
      {children}
    </section>
  );
}

export default function TestPage() {
  return (
    <main className="mx-auto flex w-full max-w-[480px] flex-col gap-section px-page-horizontal py-section">
      <h1 className="text-heading-lg">컴포넌트 테스트</h1>

      <Demo name="Button">
        {sizes.map((size) => (
          <div key={size} className="flex flex-wrap items-center gap-stack-md">
            <Button size={size}>Button</Button>
            <Button size={size} disabled>
              Button
            </Button>
            <span className="text-caption-md text-text-tertiary">size={size}</span>
          </div>
        ))}
      </Demo>

      <Demo name="Icon">
        <div className="flex gap-stack-md text-text-primary">
          <Icon name="check" />
          <Icon name="plus" />
          <Icon name="minus" />
          <Icon name="none" />
        </div>
      </Demo>

      <Demo name="Label / InputField / TextareaField">
        <Label required>Label</Label>
        <InputField placeholder="placeholder" />
        <TextareaField placeholder="게스트에게 전할 초대 글을 적어주세요" />
      </Demo>

      <Demo name="Radio">
        <div className="flex">
          <Radio name="demo-radio" />
          <Radio name="demo-radio" defaultChecked />
          <Radio disabled />
        </div>
      </Demo>

      <Demo name="AttendanceBadge">
        <div className="flex gap-stack-sm">
          <AttendanceBadge status="yes" />
          <AttendanceBadge status="no" />
        </div>
      </Demo>

      <Demo name="StatCard">
        <div className="grid grid-cols-3 gap-inline-md">
          <StatCard label="참석" value="2명" />
          <StatCard label="불참" value="1명" />
          <StatCard label="참석 인원" value="5명" highlight />
        </div>
      </Demo>

      <Demo name="InfoRow">
        <InfoRow label="일시" value="2026년 11월 14일 (토) 09:00" />
        <InfoRow type="spread" label="일시" value="2026년 11월 14일 (토) 09:00" />
      </Demo>

      <Demo name="EmptyState">
        <EmptyState title="아직 응답이 없어요" description="초대장 링크를 공유하면 응답이 여기에 쌓여요." />
      </Demo>

      <Demo name="SectionHeader">
        <SectionHeader subtitle="Subtitle" title="title" description="Description" />
      </Demo>

      <Demo name="Image">
        <div className="flex items-start gap-stack-md">
          <Image type="character" alt="펭귄 캐릭터" />
          <Image type="flag" alt="깃발" />
        </div>
      </Demo>

      <Demo name="SuccessIcon / StepButton">
        <div className="flex items-center gap-stack-md">
          <SuccessIcon />
          <StepButton icon="minus" />
          <StepButton icon="plus" />
          <StepButton icon="minus" disabled />
        </div>
      </Demo>

      <Demo name="NavBar">
        <NavBar title="응답 현황" className="bg-surface-subtle" />
      </Demo>

      <Demo name="Input / Textarea">
        <Input label="장소" required placeholder="장소를 입력해주세요" helper="안내 문구" />
        <Textarea label="제목" required rows={2} placeholder="제목을 입력해주세요" />
        <Textarea label="본문" rows={4} helper="엔터로 줄을 나눌 수 있어요" />
      </Demo>

      <Demo name="RadioOption">
        <div className="flex">
          <RadioOption label="참석" name="demo-option" defaultChecked className="flex-1" />
          <RadioOption label="불참" name="demo-option" className="flex-1" />
        </div>
      </Demo>

      <Demo name="ResponseRow">
        <ResponseRow name="김허들" meta="동반 1명" status="yes" />
        <ResponseRow name="이허들" status="no" />
      </Demo>

      <Demo name="CopyLinkField">
        <CopyLinkField
          title="초대장 링크"
          url="https://example.com/i/k3f9x2a7"
          description="게스트에게 공유하는 링크예요."
        />
      </Demo>

      <Demo name="InvitationCover">
        <InvitationCover
          subtitle="Huddling Club 2nd Meetup"
          title={"허들링 클럽 2번째\n오프라인 밋업"}
          date="2026년 11월 14일 (토) 09:00"
          location="세종 남극 기지"
        />
      </Demo>

      <Demo name="RSVPCard">
        <div className="bg-surface-subtle p-stack-md">
          <RSVPCard />
        </div>
      </Demo>
    </main>
  );
}
