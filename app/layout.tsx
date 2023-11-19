import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className}  text-black bg-white `}>
        <main className="mx-auto min-h-screen flex flex-col max-w-screen-xl ">
          <Header />

          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
