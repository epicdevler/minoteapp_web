import type { Metadata } from "next";
import SideNav from "./SideNavigation";

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
    <div className="flex flex-col-reverse landscape:flex-row md:flex-row  h-screen w-full">
      <SideNav />
      <main className="w-full h-full p-4 portrait:lg:ps-8 portrait:pe-3 portrait:lg:py-4 landscape:lg:ps-8 landscape:lg:pe-3 landscape:lg:py-4 overflow-auto">
        <p className="text-sm mb-3">Hello Nwadike</p>
        {children}
      </main>
    </div>
    </>
  );
}
