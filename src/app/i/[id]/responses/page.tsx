import { Suspense } from "react";
import { notFound } from "next/navigation";
import NavBar from "@/components/NavBar";
import SectionHeader from "@/components/SectionHeader";
import StatCard from "@/components/StatCard";
import ResponseRow from "@/components/ResponseRow";
import EmptyState from "@/components/EmptyState";
import { getMockInvitation, getMockRsvps } from "@/lib/mock";
import CopyInviteButton from "./CopyInviteButton";

// 응답 현황 내용. 지금은 가짜 데이터(mock)를 쓴다.
async function Responses({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // TODO: Supabase 연결 후 DB에서 찾는다
  const invitation = getMockInvitation(id);
  if (!invitation) notFound();
  const rsvps = getMockRsvps(id);

  const attending = rsvps.filter((rsvp) => rsvp.status === "yes");
  const notAttendingCount = rsvps.length - attending.length;
  // 참석 인원 합계 = 참석한 사람 + 동반 인원
  const totalPeople = attending.reduce((sum, rsvp) => sum + 1 + rsvp.companions, 0);

  return (
    <div className="flex flex-col gap-section-lg px-page-horizontal pb-cover-inset">
      <SectionHeader
        subtitle="Responses"
        title={invitation.title.replace(/\n/g, " ")}
        description={`${invitation.datetime} · ${invitation.location}`}
      />

      <div className="flex flex-col gap-stack-md">
        <div className="flex gap-inline-md">
          <StatCard label="참석" value={`${attending.length}명`} className="min-w-0 flex-1" />
          <StatCard label="불참" value={`${notAttendingCount}명`} className="min-w-0 flex-1" />
          <StatCard label="참석 인원 합계" value={`${totalPeople}명`} highlight className="min-w-0 flex-1" />
        </div>
        <p className="text-caption-md text-text-tertiary">참석 인원 합계 = 참석한 사람 + 동반 인원</p>
      </div>

      <div className="flex flex-col gap-inline-md">
        <h2 className="text-heading-md text-text-strong">응답 목록</h2>
        {rsvps.length === 0 ? (
          <EmptyState title="아직 응답이 없어요" description="초대장 링크를 공유하면 응답이 여기에 쌓여요." />
        ) : (
          rsvps.map((rsvp) => (
            <ResponseRow
              key={rsvp.id}
              name={rsvp.name}
              status={rsvp.status}
              // 불참이면 동반 인원을 보여주지 않는다
              meta={rsvp.status === "yes" ? `동반 ${rsvp.companions}명` : undefined}
            />
          ))
        )}
      </div>

      <CopyInviteButton id={id} />
    </div>
  );
}

export default function ResponsesPage({ params }: PageProps<"/i/[id]/responses">) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-375 flex-col gap-page-horizontal bg-surface-default">
      <NavBar title="응답 현황" />
      <Suspense>
        <Responses params={params} />
      </Suspense>
    </main>
  );
}
