import type { ReactNode } from "react";
import Icon from "@/components/Icon";

type NavBarProps = {
  title: string;
  left?: ReactNode;
  right?: ReactNode;
  className?: string;
};

// Figma: NavBar — 화면 상단 바. 가운데 title, 양옆은 아이콘 자리(없으면 빈 자리)
export default function NavBar({ title, left, right, className = "" }: NavBarProps) {
  return (
    <header className={`flex h-65 items-center gap-section p-page-horizontal ${className}`}>
      {left ?? <Icon name="none" />}
      <h1 className="min-w-0 flex-1 text-center text-heading-md text-text-primary">{title}</h1>
      {right ?? <Icon name="none" />}
    </header>
  );
}
