import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  required?: boolean;
};

// Figma: Label — 입력 필드 위 라벨. required면 "필수" 표시
export default function Label({
  required = false,
  className = "",
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={`flex items-center gap-inline-sm whitespace-nowrap ${className}`}
      {...props}
    >
      <span className="text-label-lg text-text-strong">{children}</span>
      {required && <span className="text-caption-md text-feedback-error">필수</span>}
    </label>
  );
}
