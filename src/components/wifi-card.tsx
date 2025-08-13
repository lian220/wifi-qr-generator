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
    <CardContainer backgroundColor={bgColor}>
      <div className="text-center">
        <p className="font-bold text-lg text-gray-800">WIFI 접속</p>
      </div>
      
      <QRCode 
        value={qrValue} 
        size={128} 
        fgColor="#333"
        level="M"
      />
      
      <div className="text-center">
        <p className="font-semibold text-gray-700">
          {brandName || "브랜드 이름"}
        </p>
      </div>
      
      <span className="absolute bottom-2 right-3 text-xs text-gray-500 opacity-70">
        by lian
      </span>
    </CardContainer>
  );
};

export default WifiCard;