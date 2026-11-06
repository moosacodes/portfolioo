import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Moosa Alam | Portfolio",
  description: "Infrastructure & Systems Engineer — things I've built and things I'm bringing to life.",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable} h-full antialiased`}>
      <body className={`${geist.className} min-h-full bg-[#050505] text-[#f1f5f9]`}>
        {children}
      </body>
    </html>
  );
}
