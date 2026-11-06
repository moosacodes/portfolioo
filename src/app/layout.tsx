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
  metadataBase: new URL("https://moosaalam.dev"),
  title: {
    default: "Moosa Alam | Cloud Infrastructure & Systems Engineer",
    template: "%s | Moosa Alam",
  },
  description:
    "Moosa Alam is a University of Guelph computer science student and cloud infrastructure, systems, and software engineer building reliable networks, AI tools, and distributed systems.",
  keywords: [
    "Moosa Alam",
    "cloud infrastructure engineer",
    "systems engineer",
    "software engineer",
    "networking engineer",
    "distributed systems",
    "AI systems",
    "University of Guelph",
  ],
  authors: [{ name: "Moosa Alam", url: "https://moosaalam.dev" }],
  creator: "Moosa Alam",
  publisher: "Moosa Alam",
  alternates: {
    canonical: "https://moosaalam.dev",
  },
  openGraph: {
    type: "profile",
    url: "https://moosaalam.dev",
    title: "Moosa Alam | Cloud Infrastructure & Systems Engineer",
    description:
      "Portfolio of Moosa Alam, a systems and software engineer focused on cloud infrastructure, networking, reliability, and AI systems.",
    siteName: "Moosa Alam",
    locale: "en_CA",
    images: [
      {
        url: "/moosa-profile.png",
        width: 512,
        height: 512,
        alt: "Moosa Alam",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Moosa Alam | Cloud Infrastructure & Systems Engineer",
    description:
      "Systems and software engineering portfolio focused on cloud infrastructure, networking, reliability, and AI systems.",
    images: ["/moosa-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png", type: "image/png", sizes: "512x512" }],
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
