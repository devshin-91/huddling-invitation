// 화면 확인용 가짜 데이터. Supabase를 연결하면 실제 데이터로 바꾼다.

export type Invitation = {
  id: string; // 추측하기 어려운 고유 ID (crypto.randomUUID() 형식)
  title: string;
  datetime: string; // 일시. /create에서 입력한 글자 그대로 보여준다
  location: string; // 주소를 글자로만 표시
  body: string; // 본문. 줄바꿈 그대로 보여준다
};

export type Rsvp = {
  id: string;
  invitationId: string;
  name: string;
  status: "yes" | "no"; // yes 참석 · no 불참
  companions: number; // 본인 제외 동반 인원. 불참이면 0
};

export const mockInvitation: Invitation = {
  // 확인하기 쉽게 "demo"를 쓴다 (/i/demo, /i/demo/responses). 실제 초대장은 crypto.randomUUID()로 만든다
  id: "demo",
  title: "허들링 클럽 2번째\n오프라인 밋업",
  datetime: "2026년 11월 14일 (토) 09:00",
  location: "세종 남극 기지",
  body: "안녕하세요, 허들링 클럽입니다.\n두 번째 오프라인 밋업에 초대합니다.\n\n따뜻한 옷차림으로 와주세요!",
};

export const mockRsvps: Rsvp[] = [
  {
    id: "a1e4c8d2-5f3b-4a7e-8d6c-2b9f1e0a7c34",
    invitationId: mockInvitation.id,
    name: "김허들",
    status: "yes",
    companions: 2,
  },
  {
    id: "b7d2f9a1-3c6e-4b8d-9a5f-6e1c4d8b2f07",
    invitationId: mockInvitation.id,
    name: "이펭귄",
    status: "no",
    companions: 0,
  },
  {
    id: "c5a8e3f6-7d1b-4c9a-8e2d-4f7b3a9c1e58",
    invitationId: mockInvitation.id,
    name: "박남극",
    status: "yes",
    companions: 0,
  },
];

// ID로 초대장 찾기. 없으면 null
export function getMockInvitation(id: string): Invitation | null {
  return id === mockInvitation.id ? mockInvitation : null;
}

// 초대장 ID로 응답 목록 찾기
export function getMockRsvps(invitationId: string): Rsvp[] {
  return mockRsvps.filter((rsvp) => rsvp.invitationId === invitationId);
}
