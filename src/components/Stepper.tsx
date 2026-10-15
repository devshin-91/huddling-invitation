import StepButton from "@/components/StepButton";

type StepperProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
  className?: string;
};

// Figma: Stepper — 동반 인원 입력 (− 값 +). 최솟값이면 −, 최댓값이면 +가 disabled
export default function Stepper({
  value,
  onChange,
  min = 0,
  max,
  unit = "명",
  className = "",
}: StepperProps) {
  return (
    <div className={`flex items-center gap-stack-sm ${className}`}>
      <StepButton icon="minus" disabled={value <= min} onClick={() => onChange(value - 1)} />
      <p aria-live="polite" className="whitespace-nowrap text-heading-md text-text-strong">
        {value}
        {unit}
      </p>
      <StepButton
        icon="plus"
        disabled={max !== undefined && value >= max}
        onClick={() => onChange(value + 1)}
      />
    </div>
  );
}
