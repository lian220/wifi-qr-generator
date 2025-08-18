"use client";

import { CardContainer } from "@/components/ui/card-container";
import { QRCode } from "@/components/ui/qr-code";
import { generateWifiQRString } from "@/lib/wifi-qr";

interface WifiCardProps {
  brandName: string;
  ssid: string;
  password?: string;
  bgColor: string;
  encryption?: 'WPA' | 'WEP' | 'nopass';
}

const WifiCard = ({ 
  brandName, 
  ssid, 
  password, 
  bgColor, 
  encryption = 'WPA' 
}: WifiCardProps) => {
  const wifiConfig = {
    ssid,
    password,
    encryption
  };
  
  const qrValue = generateWifiQRString(wifiConfig);

  return (
    <CardContainer backgroundColor={bgColor} data-card-ref="true">
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#1f2937' }}>WIFI 접속</p>
      </div>
      
      <QRCode 
        value={qrValue} 
        size={128} 
        fgColor="#333"
        level="M"
      />
      
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontWeight: '600', color: '#374151' }}>
          {brandName || "브랜드 이름"}
        </p>
      </div>
      
      <span style={{ position: 'absolute', bottom: '8px', right: '12px', fontSize: '12px', color: '#6b7280', opacity: 0.7 }}>
        by lian
      </span>
    </CardContainer>
  );
};

export default WifiCard;