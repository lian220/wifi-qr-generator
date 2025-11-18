import { Footer } from "./footer";
import { Header } from "./header";
import { ToastProvider } from "@/components/ui/toast";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
} 