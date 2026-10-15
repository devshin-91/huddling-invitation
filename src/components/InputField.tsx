import type { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement>;

// Figma: InputField — 한 줄 입력 박스
// state: default(빈 칸) · focus(입력 중, 테두리 강조) · active(값 있음, 글자 진하게)
export default function InputField({ className = "", ...props }: InputFieldProps) {
  return (
    <input
      className={`w-full rounded-control border border-border-subtle bg-surface-default px-stack-md py-control-x text-body-lg text-text-primary outline-none placeholder:text-text-disabled focus:border-action-primary ${className}`}
      {...props}
    />
  );
}
