import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";

import Header from "./components/Header";
import FooterSection from "./components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import { getActiveLanguages, DEFAULT_LANGUAGE } from "@/config/languages";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800","900"], 
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MA Heart Foundation Website",
  description: "Devoted to promoting healthy hearts across communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const activeLangs = getActiveLanguages();

  return (
    <html lang="en">
      <head>
        {activeLangs.map((lang) => (
          <link
            key={lang.code}
            rel="alternate"
            hrefLang={lang.code}
            href={
              lang.code === DEFAULT_LANGUAGE
                ? "/"
                : `/${lang.code}/`
            }
          />
        ))}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <LanguageProvider>
          <Header />
          {children}
          <FooterSection />
        </LanguageProvider>
      </body>
    </html>
  );
}

