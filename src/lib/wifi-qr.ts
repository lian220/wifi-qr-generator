export interface WifiConfig {
  ssid: string;
  password?: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden?: boolean;
}

export function generateWifiQRString(config: WifiConfig): string {
  const { ssid, password, encryption, hidden = false } = config;
  
  // WiFi QR 코드 형식: WIFI:S:<SSID>;T:<WPA|WEP|nopass>;P:<password>;H:<true|false>;;
  let qrString = `WIFI:S:${ssid};T:${encryption}`;
  
  if (password) {
    qrString += `;P:${password}`;
  }
  
  if (hidden) {
    qrString += `;H:true`;
  }
  
  qrString += ';;';
  
  return qrString;
}

export function validateWifiConfig(config: WifiConfig): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  
  if (!config.ssid || config.ssid.trim() === '') {
    errors.push('SSID는 필수 입력 항목입니다.');
  }
  
  if (config.ssid && config.ssid.length > 32) {
    errors.push('SSID는 32자 이하여야 합니다.');
  }
  
  if (config.password && config.password.length > 64) {
    errors.push('비밀번호는 64자 이하여야 합니다.');
  }
  
  if (config.encryption === 'WPA' && (!config.password || config.password.length < 8)) {
    errors.push('WPA 암호화를 사용할 경우 비밀번호는 8자 이상이어야 합니다.');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
} 