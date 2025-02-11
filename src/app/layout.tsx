import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/app/globals.css";
import Footer from "@components/sections/Footer";

const noto = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caylu - La mejor comida cerca de ti",
  description: "Caylu, la mejor app de comida cerca de ti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={noto.className + " bg-gray-800"}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
