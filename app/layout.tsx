import type { Metadata } from "next";
import {
  Fraunces,
  JetBrains_Mono,
  Manrope,
  Montserrat,
} from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-family-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-family-fraunces",
  weight: "variable",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-family-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-family-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mountain Helicopter",
  description: "Mountain Helicopter frontend",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        className={`${manrope.variable} ${fraunces.variable} ${montserrat.variable} ${jetbrainsMono.variable} min-h-full flex flex-col`}
      >
        {/* reCAPTCHA removed */}
        {/* RootProvider is reserved for the later dynamic/admin phase. */}
        {children}
      </body>
    </html>
  );
}
