import { cn } from "@/lib/utils";
import * as React from "react";

export interface ColorPickerProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

const ColorPicker = React.forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ className, label, description, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <div className="flex items-center space-x-3">
          <input
            type="color"
            className={cn(
              "h-10 w-16 rounded-md border border-gray-300 cursor-pointer",
              className
            )}
            ref={ref}
            {...props}
          />
          {description && (
            <span className="text-sm text-gray-500">{description}</span>
          )}
        </div>
      </div>
    );
  }
);

ColorPicker.displayName = "ColorPicker";

export { ColorPicker };
