import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Wifi QR Generator</h1>
        <p className="text-muted-foreground">Shadcn/ui가 성공적으로 초기화되었습니다!</p>
        <Button>테스트 버튼</Button>
        <Button variant="destructive">hello</Button>
      </div>
    </main>
  );
}
