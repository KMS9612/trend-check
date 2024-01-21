import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "트렌드체크",
  description: "네이버에서 특정 주제어가 얼마나 검색되었는지 알려주는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        style={{ width: "100vw", height: "100vh" }}
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
