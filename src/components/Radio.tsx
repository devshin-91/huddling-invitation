import type { InputHTMLAttributes } from "react";

type RadioProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

// Figma: Radio — state=default/selected/disabled
// 48px 터치 영역 안에 20px 원. 선택되면 테두리가 두꺼워져 가운데 점이 작아진다.
export default function Radio({ className = "", ...props }: RadioProps) {
  return (
    <span className={`flex size-48 shrink-0 items-center justify-center ${className}`}>
      <input
        type="radio"
        className="size-20 cursor-pointer appearance-none rounded-pill border-2 border-text-tertiary bg-surface-default checked:border-6 checked:border-action-primary disabled:cursor-not-allowed disabled:border-text-disabled"
        {...props}
      />
    </span>
  );
}
