"use client";

import { CardContainer } from "@/components/ui/card-container";
import { QRCode } from "@/components/ui/qr-code";
import { generateWifiQRString } from "@/lib/wifi-qr";
import { useMemo, memo } from "react";

interface WifiCardProps {
  brandName: string;
  ssid: string;
  password?: string;
  bgColor: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
}

const WifiCard = memo(({ 
  brandName, 
  ssid, 
  password, 
  bgColor, 
  encryption = 'WPA' 
}: WifiCardProps) => {
  const wifiConfig = useMemo(() => ({
    ssid,
    password,
    encryption
  }), [ssid, password, encryption]);
  
  const qrValue = useMemo(() => generateWifiQRString(wifiConfig), [wifiConfig]);

  return (
    <CardContainer 
      backgroundColor={bgColor} 
      data-card-ref="true"
      role="img"
      aria-label={`WiFi QR 코드 카드: ${brandName || '브랜드 이름'} - ${ssid} 네트워크`}
    >
      <header style={{ textAlign: 'center' }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '18px', color: '#1f2937', margin: 0 }}>
          WIFI 접속
        </h2>
      </header>
      
      <div aria-label="WiFi QR 코드">
        <QRCode 
          value={qrValue} 
          size={128} 
          fgColor="#333"
          level="M"
        />
      </div>
      
      <footer style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: '600', color: '#374151', margin: 0 }}>
          {brandName || "브랜드 이름"}
        </p>
      </footer>
      
      <span 
        style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '12px', color: '#6b7280', opacity: 0.7 }}
        aria-label="제작자: lian"
      >
        by lian
      </span>
    </CardContainer>
  );
});

WifiCard.displayName = "WifiCard";

export default WifiCard;