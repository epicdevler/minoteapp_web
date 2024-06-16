import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <Image src={'./icon_log.svg'} width={100} height={100} alt="" />
      <Link href="/app/notes" className="rounded-full px-4 py-2 bg-slate-800">Get Started</Link>
    </main>
  );
}
