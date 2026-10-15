import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
};

// 모든 크기에 공통으로 쓰는 스타일
const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap px-control-y rounded-control text-text-inverse disabled:bg-border-subtle disabled:cursor-not-allowed";

// 크기별 스타일 (Figma Button: size=sm/md/lg)
const sizeClasses: Record<ButtonSize, string> = {
  sm: "gap-control-compact py-inline-sm text-label-md bg-action-primary enabled:hover:bg-action-hover-overlay",
  // md는 회색 배경 위에 hover 색을 한 겹 덮는다 (Figma 그대로)
  md: "h-48 gap-inline-compact py-control-x text-label-md bg-text-secondary enabled:hover:bg-linear-to-r enabled:hover:from-action-hover-overlay enabled:hover:to-action-hover-overlay",
  lg: "h-52 gap-control-compact py-inline-sm text-label-lg bg-action-primary enabled:hover:bg-action-hover-overlay",
};

export default function Button({
  size = "sm",
  type = "button",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
}
