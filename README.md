# WiFi QR Generator

WiFi 네트워크 정보를 QR 코드로 생성하고 미니멀한 디자인의 카드로 다운로드할 수 있는 웹 애플리케이션입니다.

## ✨ 주요 기능

- **WiFi QR 코드 생성**: SSID와 비밀번호를 입력하여 WiFi 접속용 QR 코드 생성
- **카드 커스터마이징**: 배경 색상을 자유롭게 선택하여 브랜드에 맞는 디자인 제작
- **실시간 미리보기**: 입력값 변경 시 즉시 카드 디자인 미리보기
- **이미지 다운로드**: 생성된 카드를 고품질 이미지로 다운로드
- **미니멀한 디자인**: 깔끔하고 심플한 UI/UX로 직관적인 사용성

## 🚀 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **React**: [React 19](https://react.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **QR Code**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Image Generation**: [html2canvas](https://html2canvas.hertzen.com/)

## 📋 요구사항

- Node.js 18.17 이상
- npm, yarn, pnpm 또는 bun

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
# 또는
bun install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 📁 프로젝트 구조

```
wifi-qr-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃
│   │   ├── page.tsx            # 메인 페이지
│   │   ├── wifi/
│   │   │   └── page.tsx        # WiFi QR 생성 페이지
│   │   ├── test/
│   │   │   └── page.tsx        # 테스트 페이지
│   │   └── globals.css         # 전역 스타일
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header.tsx      # 헤더 컴포넌트
│   │   │   ├── footer.tsx      # 푸터 컴포넌트
│   │   │   └── main-layout.tsx # 메인 레이아웃
│   │   ├── ui/
│   │   │   ├── button.tsx      # 버튼 컴포넌트
│   │   │   ├── input.tsx       # 입력 필드 컴포넌트
│   │   │   ├── color-picker.tsx # 색상 선택기
│   │   │   ├── qr-code.tsx     # QR 코드 컴포넌트
│   │   │   ├── card-container.tsx # 카드 컨테이너
│   │   │   └── badge.tsx       # 배지 컴포넌트
│   │   └── wifi-card.tsx       # WiFi 카드 컴포넌트
│   ├── lib/
│   │   ├── utils.ts            # 유틸리티 함수
│   │   └── wifi-qr.ts          # WiFi QR 코드 생성 로직
│   └── spec/
│       └── prd.md              # 프로젝트 요구사항 문서
├── public/                     # 정적 파일
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.js
└── README.md
```

## 🔧 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션용 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint로 코드 검사

## 🎨 주요 컴포넌트

### WiFi 카드 디자인
- **크기**: 256px 기준 (실제 크기: 192px × 256px)
- **비율**: 가로:세로 = 3:4
- **레이아웃**:
  - 상단: "WIFI 접속" 텍스트
  - 중앙: WiFi 정보가 포함된 QR 코드
  - 하단: 브랜드 이름
  - 하단 우측: "by lian" 레이블

### 입력 필드
- **브랜드 이름**: 카드 하단에 표시될 브랜드명
- **네트워크 이름**: WiFi 네트워크 SSID
- **비밀번호**: WiFi 접속 비밀번호
- **카드 배경 색**: QR 코드 카드의 배경 색상

## 🚀 배포

### Vercel (권장)

[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하여 쉽게 배포할 수 있습니다.

### 기타 플랫폼

다른 플랫폼에 배포하려면 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

## 🤝 기여하기

1. 이 저장소를 포크합니다
2. 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'feat: 새로운 기능 추가'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. Pull Request를 생성합니다

## 📚 추가 리소스

- [Next.js 문서](https://nextjs.org/docs) - Next.js 기능과 API에 대해 알아보기
- [Next.js 학습](https://nextjs.org/learn) - 인터랙티브 Next.js 튜토리얼
- [Tailwind CSS 문서](https://tailwindcss.com/docs) - Tailwind CSS 사용법
- [React Hook Form 문서](https://react-hook-form.com/) - 폼 관리 라이브러리
- [QR Code 표준](https://github.com/zxing/zxing/wiki/Barcode-Contents#wi-fi-network-config-android-ios-11) - WiFi QR 코드 형식
