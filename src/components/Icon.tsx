// Figma: icon/check, icon/plus, icon/minus, icon/none
// 색은 감싸는 요소의 글자색(text-*)을 따라간다. 예) <span className="text-text-primary"><Icon name="plus" /></span>
type IconName = "check" | "plus" | "minus" | "none";

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

// 24x24 기준 모양 (Figma SVG 그대로)
const shapes = {
  check: { d: "M4.5 12L9.5 16L18.5 7", strokeWidth: 3 },
  plus: { d: "M12 20V12M12 12V4M12 12H20M12 12H4", strokeWidth: 2 },
  minus: { d: "M20 12H4", strokeWidth: 2 },
};

export default function Icon({ name, size = 24, strokeWidth, className = "" }: IconProps) {
  // icon/none: 아이콘 없이 24px 자리만 차지한다
  if (name === "none") {
    return <span aria-hidden className={`block size-24 shrink-0 ${className}`} />;
  }

  const shape = shapes[name];
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <path
        d={shape.d}
        stroke="currentColor"
        strokeWidth={strokeWidth ?? shape.strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
