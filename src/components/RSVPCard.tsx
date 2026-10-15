"use client";

import { useState, type FormEvent } from "react";
import Input from "@/components/Input";
import Label from "@/components/Label";
import RadioOption from "@/components/RadioOption";
import Stepper from "@/components/Stepper";
import Button from "@/components/Button";
import SuccessIcon from "@/components/SuccessIcon";
import InfoRow from "@/components/InfoRow";

export type RSVPData = {
  name: string;
  status: "yes" | "no";
  companions: number;
};

type RSVPCardProps = {
  // 제출 시 호출된다. 저장 실패면 에러를 던지면 된다
  onSubmit?: (data: RSVPData) => Promise<void> | void;
  className?: string;
};

// Figma: RSVPCard — 보기 화면(/i/[id])의 참석 신청 카드
// 제출 전 state=form, 제출 후 같은 자리에서 state=done으로 바뀐다
export default function RSVPCard({ onSubmit, className = "" }: RSVPCardProps) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"yes" | "no">("yes");
  const [companions, setCompanions] = useState(0);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const isAttending = status === "yes";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError("");
    try {
      await onSubmit?.({ name: name.trim(), status, companions: isAttending ? companions : 0 });
      setDone(true);
    } catch {
      setError("보내지 못했어요. 잠시 후 다시 시도해주세요.");
    } finally {
      setPending(false);
    }
  }

  const cardClasses = `flex flex-col gap-stack-lg rounded-card bg-surface-default px-page-horizontal py-stack-lg ${className}`;

  if (done) {
    return (
      <div className={cardClasses}>
        <div className="flex flex-col items-center gap-stack-sm py-section-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">참석 여부를 보냈어요</p>
          <p className="text-body-md text-text-secondary">호스트에게 응답이 전달됐어요.</p>
        </div>
        <div className="flex flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md">
          <InfoRow type="spread" label="이름" value={name.trim()} />
          <InfoRow type="spread" label="참석 여부" value={isAttending ? "참석" : "불참"} />
          {isAttending && <InfoRow type="spread" label="동반 인원" value={`${companions}명`} />}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cardClasses}>
      <div className="flex flex-col items-center gap-inline-compact text-center">
        <h2 className="text-heading-lg text-text-strong">참석 여부 알려주기</h2>
        <p className="text-body-md text-text-secondary">이름과 참석 여부를 남겨주세요.</p>
      </div>

      <div className="flex flex-col gap-stack-lg">
        <Input
          label="이름"
          required
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div role="radiogroup" aria-label="참석 여부" className="flex flex-col gap-inline-md">
          <Label required>참석 여부</Label>
          <div className="flex items-center">
            <RadioOption
              label="참석"
              name="status"
              value="yes"
              checked={status === "yes"}
              onChange={() => setStatus("yes")}
              className="flex-1"
            />
            <RadioOption
              label="불참"
              name="status"
              value="no"
              checked={status === "no"}
              onChange={() => setStatus("no")}
              className="flex-1"
            />
          </div>
        </div>

        {/* 불참이면 동반 인원은 묻지 않는다 */}
        {isAttending && (
          <div className="flex flex-col gap-inline-md">
            <Label required>동반 인원</Label>
            <Stepper value={companions} onChange={setCompanions} min={0} />
            <p className="text-caption-md text-text-tertiary">본인을 제외하고 함께 오는 인원이에요.</p>
          </div>
        )}
      </div>

      {error && <p className="text-body-md text-feedback-error">{error}</p>}

      <Button type="submit" size="lg" disabled={!name.trim() || pending} className="w-full">
        {pending ? "보내는 중…" : "참석 여부 보내기"}
      </Button>
    </form>
  );
}
