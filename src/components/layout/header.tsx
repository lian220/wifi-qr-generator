import Link from "next/link";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-gray-900">
              WiFi QR Generator
            </h1>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              홈
            </Link>
            <Link
              href="/wifi"
              className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              QR 생성
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 