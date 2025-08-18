"use client";

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
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            border: '2px dashed #d1d5db',
            borderRadius: '6px',
            width: size,
            height: size
          }}
        >
          <span style={{ color: '#6b7280', fontSize: '14px' }}>QR 코드를 생성할 수 없습니다</span>
        </div>
      );
    }

    return (
      <div ref={ref} style={{ padding: '8px', backgroundColor: '#ffffff', borderRadius: '6px', boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)' }}>
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
