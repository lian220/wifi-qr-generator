import { MainLayout } from "@/components/layout/main-layout";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WiFi QR Generator - WiFi QR 코드 카드 생성 서비스",
  description: "매장에서 사용할 WiFi QR 코드 카드를 생성하는 웹 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
