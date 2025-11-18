import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 15는 기본적으로 최적화가 잘 되어 있으며,
  // html2canvas 동적 임포트로 번들 크기 최적화가 충분히 이루어집니다.
  // 추가 webpack 설정 없이 기본 설정 사용
};

export default nextConfig;
