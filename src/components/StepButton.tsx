import type { ButtonHTMLAttributes } from "react";
import Icon from "@/components/Icon";

type StepButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  icon: "minus" | "plus";
};

// Figma: StepButton — Stepper의 −/+ 버튼. 더 못 줄이거나 늘리면 disabled
export default function StepButton({
  icon,
  type = "button",
  className = "",
  ...props
}: StepButtonProps) {
  return (
    <button
      type={type}
      aria-label={icon === "minus" ? "줄이기" : "늘리기"}
      className={`flex size-44 shrink-0 items-center justify-center rounded-control border border-border-default bg-surface-default text-text-primary disabled:cursor-not-allowed disabled:text-text-disabled ${className}`}
      {...props}
    >
      <Icon name={icon} size={20} />
    </button>
  );
}
