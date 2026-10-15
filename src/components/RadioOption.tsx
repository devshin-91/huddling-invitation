import { useId, type InputHTMLAttributes } from "react";
import Radio from "@/components/Radio";
import Label from "@/components/Label";

type RadioOptionProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
};

// Figma: RadioOption — 라디오 + 라벨 한 줄. 참석/불참 선택에 쓴다
export default function RadioOption({ label, id, className = "", ...props }: RadioOptionProps) {
  const autoId = useId();
  const radioId = id ?? autoId;

  return (
    <div className={`flex items-center ${className}`}>
      <Radio id={radioId} {...props} />
      <Label htmlFor={radioId} className="cursor-pointer">
        {label}
      </Label>
    </div>
  );
}
