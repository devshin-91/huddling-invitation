import { useId, type TextareaHTMLAttributes } from "react";
import Label from "@/components/Label";
import TextareaField from "@/components/TextareaField";

type TextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "rows"> & {
  label: string;
  helper?: string;
  rows?: 2 | 4;
};

// Figma: Textarea — 라벨 + 여러 줄 입력 박스 + 안내 문구
// rows=2는 제목(최대 2줄), rows=4는 본문
export default function Textarea({
  label,
  helper,
  rows = 4,
  required,
  id,
  className = "",
  ...props
}: TextareaProps) {
  const autoId = useId();
  const textareaId = id ?? autoId;

  return (
    <div className={`flex flex-col gap-inline-compact ${className}`}>
      <Label htmlFor={textareaId} required={required}>
        {label}
      </Label>
      <TextareaField
        id={textareaId}
        rows={rows}
        required={required}
        className={rows === 2 ? "h-72" : "h-120"}
        {...props}
      />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
