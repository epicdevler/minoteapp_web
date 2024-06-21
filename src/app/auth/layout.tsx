import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import Loader from "../_components/Loader";

export const metadata: Metadata = {
  title: "Aminote | Authentication",
  description: "Create Notes effortlessly",
};

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className=" bg-[url('/auth_bg.png')] bg-center bg-cover bg-no-repeat min-h-dvh w-full">
        <div className="bg-black/70 min-h-dvh w-full ">
          <section className="md:w-11/12 lg:w-8/12 mx-auto min-h-dvh justify-end grid grid-cols-1 md:grid-cols-2 gap-3 md:pt-10 lg:pt-20">
            <aside className="p-3 pt-10 ">
              <Image src={'/icon_text_logo.svg'} width={150} height={150} alt="" />
              <h1 className="mt-15 mt-20 mb-7 text-3xl">
                Building for the Future...
              </h1>
              <p className="text-sm opacity-85">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem voluptas officiis quibusdam in dolor est enim fugit eligendi illo, explicabo provident, aliquid deleniti eos sint porro necessitatibus dignissimos repudiandae deserunt.</p>
            </aside>
            <aside className="bg-white text-black p-5 rounded-t-3xl overflow-auto w-full">
              <Suspense fallback={<Loader />} >
              { children }
              </Suspense>
            </aside>
          </section>
        </div>
      </main>
    </>
  );
}
