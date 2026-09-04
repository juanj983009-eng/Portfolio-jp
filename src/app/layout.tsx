import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Juan Parra | Desarrollo de software y análisis de datos",
  description:
    "Portafolio de Juan Parra: proyectos académicos y personales de desarrollo de software, bases de datos y análisis de datos.",
  keywords: [
    "Desarrollo de software",
    "Análisis de datos",
    "TypeScript",
    "IoT",
    "Microservices",
    "Editorial Portfolio",
    "Next.js",
  ],
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased selection:bg-[#FF4D00] selection:text-black`}
        suppressHydrationWarning
      >
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
