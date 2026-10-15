"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";
import Textarea from "@/components/Textarea";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Button from "@/components/Button";
import InvitationContent from "@/components/InvitationContent";
import SuccessIcon from "@/components/SuccessIcon";
import CopyLinkField from "@/components/CopyLinkField";

type Draft = {
  title: string;
  datetime: string;
  location: string;
  body: string;
};

// 제목은 최대 2줄까지만 받는다
function limitLines(value: string, max: number) {
  return value.split("\n").slice(0, max).join("\n");
}

// 미리보기: 입력한 값을 그대로 보여준다 (Figma: Live Preview > Preview Frame)
function Preview({ draft }: { draft: Draft }) {
  return (
    <div className="h-480 overflow-y-auto rounded-control border border-border-subtle">
      <InvitationContent {...draft} />
    </div>
  );
}

// 발행 완료 화면 (Figma: /create_published)
function Published({ id }: { id: string }) {
  const router = useRouter();
  const origin = window.location.origin;

  return (
    <>
      <NavBar title="발행 완료" />
      <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset pt-page-horizontal">
        <div className="flex flex-col items-center gap-stack-sm py-stack-lg text-center">
          <SuccessIcon />
          <p className="text-title-lg text-text-strong">초대장이 발행됐어요!</p>
          <p className="text-body-md text-text-secondary">아래 두 링크를 복사해 두세요.</p>
        </div>
        <CopyLinkField
          title="초대장 링크"
          url={`${origin}/i/${id}`}
          description="게스트에게 공유하는 링크예요."
        />
        <CopyLinkField
          title="응답 현황 링크"
          url={`${origin}/i/${id}/responses`}
          description="호스트용이에요. 이 링크를 아는 사람은 응답 목록을 볼 수 있어요."
        />
        <Button size="lg" className="w-full" onClick={() => router.push(`/i/${id}`)}>
          내 초대장 보기
        </Button>
      </div>
    </>
  );
}

export default function CreateForm() {
  const [draft, setDraft] = useState<Draft>({ title: "", datetime: "", location: "", body: "" });
  const [publishedId, setPublishedId] = useState<string | null>(null);

  function update(field: keyof Draft, value: string) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  // 필수값이 하나라도 비어 있으면 발행할 수 없다
  const canPublish = Object.values(draft).every((value) => value.trim() !== "");

  function handlePublish() {
    // TODO: Supabase 연결 후 여기서 초대장을 저장한다. 지금은 ID만 만든다.
    setPublishedId(crypto.randomUUID());
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-375 bg-surface-default">
      {publishedId ? (
        <Published id={publishedId} />
      ) : (
        <>
          <NavBar title="초대장 만들기" />
          <div className="flex flex-col gap-section-lg px-page-horizontal pb-120 pt-control-compact">
            <div className="flex flex-col gap-stack-lg">
              <Textarea
                label="제목"
                required
                rows={2}
                placeholder={"예) 허들링 클럽 2번째\n오프라인 밋업"}
                helper="엔터로 줄을 나눌 수 있어요 · 최대 2줄"
                value={draft.title}
                onChange={(e) => update("title", limitLines(e.target.value, 2))}
              />
              <Input
                label="일시"
                required
                placeholder="예) 2026년 11월 14일 (토) 09:00"
                value={draft.datetime}
                onChange={(e) => update("datetime", e.target.value)}
              />
              <Input
                label="장소"
                required
                placeholder="예) 세종 남극 기지"
                value={draft.location}
                onChange={(e) => update("location", e.target.value)}
              />
              <Textarea
                label="본문"
                required
                rows={4}
                placeholder="게스트에게 전할 초대 글을 적어주세요"
                value={draft.body}
                onChange={(e) => update("body", e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-inline-md">
              <Label>미리보기</Label>
              <Preview draft={draft} />
              <p className="text-caption-md text-text-tertiary">입력하는 내용이 바로 미리보기에 반영돼요.</p>
            </div>
          </div>

          {/* 발행하기 버튼: 화면 하단 고정 */}
          <div className="fixed inset-x-0 bottom-0 mx-auto w-full max-w-375 bg-surface-default p-page-horizontal">
            <Button size="lg" className="w-full" disabled={!canPublish} onClick={handlePublish}>
              발행하기
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
