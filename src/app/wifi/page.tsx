"use client";

import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import WifiCard from "@/components/wifi-card";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface WifiFormData {
  brandName: string;
  ssid: string;
  password: string;
  bgColor: string;
  imageFormat: "png" | "jpg";
  imageQuality: number;
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
      imageFormat: "png",
      imageQuality: 0.92,
    },
  });

  const formData = watch();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const { addToast } = useToast();

  const onDownload = async () => {
    if (!cardRef.current || isDownloading) return;

    // SSID 필수 검증
    if (!formData.ssid || formData.ssid.trim() === "") {
      addToast("네트워크 이름(SSID)을 입력해주세요.", "error");
      return;
    }

    setIsDownloading(true);
    try {
      // html2canvas 동적 임포트로 번들 크기 최적화
      const html2canvas = (await import("html2canvas")).default;
      
      // html2canvas 설정 최적화
      const canvas = await html2canvas(cardRef.current, {
        scale: formData.imageFormat === "png" ? 2 : 1.5, // PNG는 고품질, JPG는 적절한 크기
        backgroundColor: formData.bgColor,
        useCORS: false,
        allowTaint: false,
        logging: false,
        windowWidth: 192,
        windowHeight: 256,
        onclone: (clonedDoc) => {
          // 클론된 문서에서도 스타일이 제대로 적용되도록 확인
          const clonedElement = clonedDoc.querySelector('[data-card-ref="true"]');
          if (clonedElement) {
            (clonedElement as HTMLElement).style.backgroundColor = formData.bgColor;
          }
        },
      });
      
      // Canvas 생성 실패 확인
      if (!canvas) {
        throw new Error("Canvas 생성에 실패했습니다.");
      }

      // 이미지 포맷에 따른 다운로드
      const link = document.createElement("a");
      const mimeType = formData.imageFormat === "jpg" ? "image/jpeg" : "image/png";
      const quality = formData.imageFormat === "jpg" ? formData.imageQuality : undefined;
      const dataUrl = canvas.toDataURL(mimeType, quality);
      
      if (!dataUrl || dataUrl === "data:,") {
        throw new Error("이미지 변환에 실패했습니다.");
      }

      const extension = formData.imageFormat === "jpg" ? "jpg" : "png";
      link.href = dataUrl;
      link.download = `wifi-qr-${formData.brandName || 'card'}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      addToast("QR 코드 카드가 성공적으로 다운로드되었습니다.", "success");
      
    } catch (error) {
      console.error("이미지 다운로드 에러:", error);
      
      let errorMessage = "이미지 다운로드에 실패했습니다.";
      
      if (error instanceof Error) {
        if (error.message.includes("Canvas")) {
          errorMessage = "이미지 생성에 실패했습니다. 브라우저를 새로고침하고 다시 시도해주세요.";
        } else if (error.message.includes("변환")) {
          errorMessage = "이미지 변환에 실패했습니다. 다른 브라우저에서 시도해주세요.";
        } else {
          errorMessage = error.message;
        }
      }
      
      addToast(errorMessage, "error", 5000);
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
            <form onSubmit={handleSubmit(onDownload)} className="space-y-6" aria-label="WiFi QR 코드 카드 생성 폼">
              <div>
                <label htmlFor="brandName" className="block text-sm font-medium text-gray-700 mb-2">
                  브랜드 이름
                </label>
                <Input
                  id="brandName"
                  {...register("brandName")}
                  placeholder="예: 우리 동네 커피 맛집"
                  className="w-full"
                  aria-label="브랜드 이름 입력"
                  aria-describedby="brandName-description"
                />
                <p id="brandName-description" className="sr-only">
                  카드 하단에 표시될 브랜드명을 입력하세요
                </p>
              </div>
              
              <div>
                <label htmlFor="ssid" className="block text-sm font-medium text-gray-700 mb-2">
                  네트워크 이름 (SSID) <span className="text-red-500" aria-label="필수 항목">*</span>
                </label>
                <Input
                  id="ssid"
                  {...register("ssid", { required: "SSID는 필수 입력 항목입니다." })}
                  placeholder="WiFi-SSID"
                  className="w-full"
                  aria-label="네트워크 이름 입력"
                  aria-required="true"
                  aria-invalid={!!errors.ssid}
                  aria-describedby={errors.ssid ? "ssid-error" : "ssid-description"}
                />
                <p id="ssid-description" className="sr-only">
                  WiFi 네트워크의 SSID를 입력하세요
                </p>
                {errors.ssid && (
                  <p 
                    id="ssid-error" 
                    className="text-red-500 text-sm mt-1" 
                    role="alert"
                    aria-live="polite"
                  >
                    {errors.ssid.message}
                  </p>
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
                  aria-label="WiFi 비밀번호 입력"
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : "password-description"}
                />
                <p id="password-description" className="sr-only">
                  WiFi 접속 비밀번호를 입력하세요 (8자 이상)
                </p>
                {errors.password && (
                  <p 
                    id="password-error" 
                    className="text-red-500 text-sm mt-1" 
                    role="alert"
                    aria-live="polite"
                  >
                    {errors.password.message}
                  </p>
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
              
              <div>
                <label htmlFor="imageFormat" className="block text-sm font-medium text-gray-700 mb-2">
                  이미지 포맷
                </label>
                <select
                  id="imageFormat"
                  {...register("imageFormat")}
                  className="w-full h-9 rounded-md border border-gray-300 bg-transparent px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label="이미지 포맷 선택"
                >
                  <option value="png">PNG (고품질, 투명도 지원)</option>
                  <option value="jpg">JPG (작은 파일 크기)</option>
                </select>
              </div>
              
              {formData.imageFormat === "jpg" && (
                <div>
                  <label htmlFor="imageQuality" className="block text-sm font-medium text-gray-700 mb-2">
                    이미지 품질: {Math.round(formData.imageQuality * 100)}%
                  </label>
                  <input
                    id="imageQuality"
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.01"
                    {...register("imageQuality", { valueAsNumber: true })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    aria-label="이미지 품질 조절"
                    aria-valuemin={10}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(formData.imageQuality * 100)}
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>낮음 (작은 파일)</span>
                    <span>높음 (큰 파일)</span>
                  </div>
                </div>
              )}
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isDownloading}
                size="lg"
                aria-label={isDownloading ? "이미지 저장 중" : "QR 카드 이미지로 저장"}
                aria-busy={isDownloading}
              >
                {isDownloading ? "저장 중..." : "QR 카드 이미지로 저장"}
              </Button>
            </form>
          </div>
          
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-center">미리보기</h3>
              <div 
                ref={cardRef} 
                className="flex justify-center"
                aria-label="QR 코드 카드 미리보기"
              >
                <WifiCard {...formData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 