import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aminote",
  description: "Create Notes effortlessly",
};

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
        <>
        {children}
        </>
  );
}
