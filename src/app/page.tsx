import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoice List</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">sign in</Link>
        </Button>
      </p>
    </main>
  );
}
