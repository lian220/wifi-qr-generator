import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            WiFi QR 코드 카드 생성기
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            매장에서 사용할 WiFi QR 코드 카드를 간편하게 생성하세요. 
            브랜드 정보와 WiFi 정보를 입력하면 미니멀한 디자인의 QR 코드 카드가 완성됩니다.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Link href="/wifi">
              <Button size="lg" className="px-8 py-3">
                QR 카드 생성하기
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">📝</div>
            <h3 className="text-lg font-semibold mb-2">간편한 정보 입력</h3>
            <p className="text-gray-600">
              브랜드명, WiFi SSID, 비밀번호만 입력하면 됩니다. 
              실시간으로 미리보기를 확인할 수 있어요.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2">커스터마이징</h3>
            <p className="text-gray-600">
              카드 배경색을 자유롭게 선택할 수 있습니다. 
              매장 분위기에 맞는 색상으로 맞춤 제작하세요.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-blue-600 text-2xl mb-4">📱</div>
            <h3 className="text-lg font-semibold mb-2">즉시 사용 가능</h3>
            <p className="text-gray-600">
              생성된 QR 코드를 스마트폰으로 스캔하면 
              바로 WiFi에 연결할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">사용 방법</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-sm text-gray-600">정보 입력</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <p className="text-sm text-gray-600">미리보기 확인</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">3</span>
              </div>
              <p className="text-sm text-gray-600">이미지 다운로드</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">4</span>
              </div>
              <p className="text-sm text-gray-600">인쇄 후 부착</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
