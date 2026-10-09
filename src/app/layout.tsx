import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Isfan Fajar Anugrah // Web Portfolio",
  description: "Isfan Fajar Anugrah - Python Developer. Healthcare IT, automation, data tools.",
  keywords: ["Python", "Flutter", "Healthcare IT", "Automation", "Developer", "Portfolio", "BPJS", "Streamlit"],
  authors: [{ name: "Isfan Fajar Anugrah" }],
  openGraph: {
    title: "Isfan Fajar Anugrah // Web Portfolio",
    description: "Python Developer. Healthcare IT, automation, data tools. No buzzwords, just code.",
    url: "https://isfanfajar.dev",
    siteName: "Isfan Fajar Anugrah Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Isfan Fajar Anugrah // Web Portfolio",
    description: "Python Developer. Healthcare IT, automation, data tools.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceMono.variable}`}>
      <body className="zine-grain">{children}</body>
    </html>
  );
}
