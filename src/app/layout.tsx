import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tamnugsian 12 - สายมูสร้างเงินล้าน",
  description: "ศูนย์รวมผู้เชี่ยวชาญด้านโหราศาสตร์ตำหนักเซียน 12 องค์เทพ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${inter.className} bg-black text-white`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1 pt-16 md:pt-20 max-w-[1920px] mx-auto w-full">
              <Sidebar />
              <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
