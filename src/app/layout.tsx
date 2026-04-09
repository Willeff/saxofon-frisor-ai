import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saxoføn Frisør – Oslo",
  description:
    "Moderne frisørsalong i hjertet av Oslo. Dameklipp, herreklipp, balayage og fargelegging. Bestill time i dag.",
  icons: {
    icon: [
      { url: "/saxofon-icon/favicon-dark.ico", sizes: "any" },
      { url: "/saxofon-icon/icon-dark-32.png", sizes: "32x32", type: "image/png" },
      { url: "/saxofon-icon/icon-dark-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/saxofon-icon/icon-dark-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/saxofon-icon/icon-dark-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/saxofon-icon/icon-dark-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
