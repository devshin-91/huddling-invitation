import { Suspense } from "react";
import { notFound } from "next/navigation";
import InvitationContent from "@/components/InvitationContent";
import RSVPCard from "@/components/RSVPCard";
import { mockInvitation } from "@/lib/mock";

// 주소의 [id]로 초대장을 찾아 보여준다. 지금은 가짜 데이터(mock)에서 찾는다.
async function Invitation({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // TODO: Supabase 연결 후 DB에서 찾는다
  const invitation = id === mockInvitation.id ? mockInvitation : null;
  if (!invitation) notFound();

  return (
    <>
      <InvitationContent {...invitation} />
      {/* 참석 신청: 제출하면 같은 자리에서 완료 상태로 바뀐다 */}
      <div className="bg-background-subtle px-page-horizontal pb-section-xl pt-section-lg">
        <RSVPCard />
      </div>
    </>
  );
}

export default function InvitationPage({ params }: PageProps<"/i/[id]">) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-375 bg-surface-default">
      <Suspense>
        <Invitation params={params} />
      </Suspense>
    </main>
  );
}
