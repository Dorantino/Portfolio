

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seth Dorant - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-zinc-950 to-black text-white">
        {children}
      </body>
    </html>
  );
}
