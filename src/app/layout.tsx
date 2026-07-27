import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
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
  title: "Architect OS | Senior Fullstack Engineer & Data Systems Architect",
  description: "Editorial portfolio of a Senior Fullstack Engineer & Data Systems Architect specializing in real-time telemetry, IoT ingestion, microservices, and distributed sync engines.",
  keywords: ["Senior Fullstack Engineer", "Data Systems Architect", "TypeScript", "IoT", "Microservices", "Editorial Portfolio", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="es" 
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body 
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-black text-white antialiased selection:bg-[#FF4D00] selection:text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
