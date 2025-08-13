"use client";

import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { Input } from "@/components/ui/input";
import WifiCard from "@/components/wifi-card";
import html2canvas from "html2canvas";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface WifiFormData {
  brandName: string;
  ssid: string;
  password: string;
  bgColor: string;
}

export default function WifiPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<WifiFormData>({
    defaultValues: {
      brandName: "",
      ssid: "",
      password: "",
      bgColor: "#ffffff",
    },
  });

  const formData = watch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const onDownload = async () => {
    if (!cardRef.current || isDownloading) return;

    setIsDownloading(true);
    try {
      // html2canvas 옵션 수정 - oklch 색상 문제 해결
      const canvas = await html2canvas(cardRef.current, {
        useCORS: false,
        allowTaint: true,
        scale: 2,
        backgroundColor: formData.bgColor,
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          // 클론된 문서에서 모든 스타일을 인라인으로 변환
          const elements = clonedDoc.querySelectorAll('*');
          elements.forEach((element) => {
            const computedStyle = window.getComputedStyle(element);
            const styles = [];
            
            // 주요 스타일만 인라인으로 적용
            if (computedStyle.backgroundColor && !computedStyle.backgroundColor.includes('oklch')) {
              styles.push(`background-color: ${computedStyle.backgroundColor}`);
            }
            if (computedStyle.color && !computedStyle.color.includes('oklch')) {
              styles.push(`color: ${computedStyle.color}`);
            }
            if (computedStyle.borderColor && !computedStyle.borderColor.includes('oklch')) {
              styles.push(`border-color: ${computedStyle.borderColor}`);
            }
            
            if (styles.length > 0) {
              element.setAttribute('style', styles.join('; '));
            }
          });
        }
      });
      
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `wifi-qr-${formData.brandName || 'card'}.png`;
      link.click();
    } catch (error) {
      console.error("이미지 다운로드 중 오류가 발생했습니다.", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            WiFi QR 코드 카드 생성
          </h1>
          <p className="text-gray-600">
            매장 정보와 WiFi 정보를 입력하여 QR 코드 카드를 생성하세요
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">WiFi 정보 입력</h2>
            <form onSubmit={handleSubmit(onDownload)} className="space-y-6">
              <div>
                <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-2">
                  브랜드 이름
                </label>
                <Input
                  id="brandName"
                  {...register("brandName")}
                  placeholder="예: 우리 동네 커피 맛집"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="ssid" className="block text-sm font-medium text-gray-700 mb-2">
                  네트워크 이름 (SSID) *
                </label>
                <Input
                  id="ssid"
                  {...register("ssid", { required: "SSID는 필수 입력 항목입니다." })}
                  placeholder="WiFi-SSID"
                  className="w-full"
                />
                {errors.ssid && (
                  <p className="text-red-500 text-sm mt-1">{errors.ssid.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  {...register("password", {
                    minLength: {
                      value: 8,
                      message: "비밀번호는 8자 이상이어야 합니다.",
                    },
                  })}
                  placeholder="********"
                  className="w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                )}
              </div>
              
              <div>
                <ColorPicker
                  label="카드 배경색"
                  description="카드의 배경색을 선택하세요"
                  {...register("bgColor")}
                  defaultValue="#ffffff"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isDownloading}
                size="lg"
              >
                {isDownloading ? "저장 중..." : "QR 카드 이미지로 저장"}
              </Button>
            </form>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-center">미리보기</h3>
              <div ref={cardRef} className="flex justify-center">
                <WifiCard {...formData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 