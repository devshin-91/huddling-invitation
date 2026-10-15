import type { TextareaHTMLAttributes } from "react";

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

// Figma: TextareaField — 여러 줄 입력 박스
// state: default(빈 칸) · focus(입력 중, 테두리 강조) · active(값 있음, 글자 진하게)
export default function TextareaField({ className = "", ...props }: TextareaFieldProps) {
  return (
    <textarea
      className={`w-full resize-none rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
