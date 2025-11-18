import { cn } from "@/lib/utils";
import * as React from "react";

export interface ColorPickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, label, description, id, ...props }, ref) => {
    // useId를 사용하여 서버와 클라이언트에서 일관된 ID 생성
    const generatedId = React.useId();
    const inputId = id || `color-picker-${generatedId}`;
    const descriptionId = description ? `${inputId}-description` : undefined;
    
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="flex items-center space-x-3">
          <input
            type="color"
            id={inputId}
            className={cn(
              "h-10 w-16 rounded-md border border-gray-300 cursor-pointer",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              className
            )}
            ref={ref}
            aria-label={label || "색상 선택"}
            aria-describedby={descriptionId}
            {...props}
          />
          {description && (
            <span id={descriptionId} className="text-sm text-gray-500">
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
