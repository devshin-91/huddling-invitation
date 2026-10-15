import { useId, type InputHTMLAttributes } from "react";
import Label from "@/components/Label";
import InputField from "@/components/InputField";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helper?: string;
};

// Figma: Input — 라벨 + 한 줄 입력 박스 + 안내 문구. 일시·장소·이름처럼 한 줄 값에 쓴다
export default function Input({ label, helper, required, id, className = "", ...props }: InputProps) {
  const autoId = useId();
  const inputId = id ?? autoId;

  return (
    <div className={`flex flex-col gap-inline-compact ${className}`}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <InputField id={inputId} required={required} {...props} />
      {helper && <p className="text-caption-md text-text-tertiary">{helper}</p>}
    </div>
  );
}
