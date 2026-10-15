"use client";

import { useState } from "react";
import Button from "@/components/Button";

// "초대장 링크 복사하기" 버튼. 게스트용 링크(/i/[id])를 복사한다
export default function CopyInviteButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(`${window.location.origin}/i/${id}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <Button size="lg" className="w-full" onClick={handleCopy}>
      {copied ? "링크를 복사했어요" : "초대장 링크 복사하기"}
    </Button>
  );
}
