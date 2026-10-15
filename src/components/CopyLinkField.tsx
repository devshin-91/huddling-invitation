"use client";

import { useState } from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";

type CopyLinkFieldProps = {
  title: string;
  url: string;
  description?: string;
  className?: string;
};

// Figma: CopyLinkField — 발행 후 공유할 링크 한 줄 (제목 · 링크 · 복사 버튼 · 설명)
export default function CopyLinkField({ title, url, description, className = "" }: CopyLinkFieldProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={`flex flex-col gap-inline-md rounded-card bg-surface-subtle p-stack-md ${className}`}>
      <p className="text-label-lg text-text-strong">{title}</p>
      <div className="flex items-center gap-inline-md">
        <InputField value={url} readOnly aria-label={title} className="min-w-0 flex-1" />
        <Button size="sm" onClick={handleCopy}>
          {copied ? "복사됨" : "복사"}
        </Button>
      </div>
      {description && <p className="text-caption-md text-text-tertiary">{description}</p>}
    </div>
  );
}
