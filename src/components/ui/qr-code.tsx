"use client";

import { cn } from "@/lib/utils";
import { QRCodeCanvas } from "qrcode.react";
import * as React from "react";

export interface QRCodeProps {
  value: string;
  size?: number;
  fgColor?: string;
  bgColor?: string;
  level?: 'L' | 'M' | 'Q' | 'H';
  className?: string;
}

const QRCode = React.forwardRef<HTMLDivElement, QRCodeProps>(
  ({ 
    value, 
    size = 128, 
    fgColor = "#333", 
    bgColor = "#ffffff",
    level = 'M',
    className 
  }, ref) => {
    if (!value) {
      return (
        <div 
          ref={ref}
          className={cn(
            "flex items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 rounded-md",
            className
          )}
          style={{ width: size, height: size }}
        >
          <span className="text-gray-500 text-sm">QR 코드를 생성할 수 없습니다</span>
        </div>
      );
    }

    return (
      <div ref={ref} className={cn("p-2 bg-white rounded-md shadow-inner", className)}>
        <QRCodeCanvas
          value={value}
          size={size}
          fgColor={fgColor}
          bgColor={bgColor}
          level={level}
          includeMargin={true}
        />
      </div>
    );
  }
);

QRCode.displayName = "QRCode";

export { QRCode };
