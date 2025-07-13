# WiFi QR Generator

WiFi 네트워크 정보를 QR 코드로 생성하는 웹 애플리케이션입니다.

## 🚀 기술 스택

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **React**: [React 19](https://react.dev/)

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
│   └── app/
│       ├── layout.tsx      # 루트 레이아웃
│       ├── page.tsx        # 메인 페이지
│       └── globals.css     # 전역 스타일
├── public/                 # 정적 파일
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
