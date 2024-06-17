'use client'
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <Image src={'./icon_log.svg'} width={100} height={100} alt="" />
      <Button as={Link} href="/app/notes" rounded={'full'} px={4} py={2} className="rounded-full px-4 py-2 ">Get Started</Button>
    </main>
  );
}
