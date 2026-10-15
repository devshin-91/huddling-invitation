type AttendanceBadgeProps = {
  status: "yes" | "no";
  className?: string;
};

// Figma: AttendanceBadge — 참석 여부 배지. status=yes 참석 · no 불참
export default function AttendanceBadge({ status, className = "" }: AttendanceBadgeProps) {
  const isYes = status === "yes";
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-pill px-control-compact py-inline-sm text-label-md ${
        isYes ? "bg-info-subtle text-info-strong" : "bg-background-subtle text-text-secondary"
      } ${className}`}
    >
      {isYes ? "참석" : "불참"}
    </span>
  );
}
