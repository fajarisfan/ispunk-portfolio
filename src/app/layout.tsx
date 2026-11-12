import type { Metadata } from "next";
import { Anton, Space_Mono } from "next/font/google";
import { SITE_URL, GITHUB_URL } from "@/lib/site";
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

const title = "Isfan Fajar Anugrah // Web Portfolio";
const description =
  "Isfan Fajar Anugrah - Python Developer. Healthcare IT, automation, data tools.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ["Python", "Flutter", "Healthcare IT", "Automation", "Developer", "Portfolio", "BPJS", "Streamlit"],
  authors: [{ name: "Isfan Fajar Anugrah" }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: "Python Developer. Healthcare IT, automation, data tools. No buzzwords, just code.",
    url: "/",
    siteName: "Isfan Fajar Anugrah Portfolio",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Isfan Fajar Anugrah — Python Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Isfan Fajar Anugrah",
  jobTitle: "Python Developer",
  description,
  url: SITE_URL,
  email: "mailto:isfanfajara@gmail.com",
  sameAs: [
    GITHUB_URL,
    "https://www.linkedin.com/in/isfan-fajar-anugrah-1b4191280/",
  ],
  knowsAbout: ["Python", "Flutter", "Healthcare IT", "Automation", "Streamlit", "PostgreSQL"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceMono.variable}`}>
      <body className="zine-grain">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
