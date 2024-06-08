import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Portofolio Sena",
  description: "Create by Sena",
  authors:[{name: "Sena"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden w-full`}>{children}</body>
    </html>
  );
}
