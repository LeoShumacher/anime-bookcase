import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anime Bookcase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="w-screen h-screen">{children}</body>
    </html>
  );
}
