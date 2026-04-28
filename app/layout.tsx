import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Explobyte — Software que transforma tu negocio",
  description:
    "Construimos software de alta calidad: aplicaciones web, móviles, APIs, automatización y soluciones cloud. Transformamos tu visión en productos tecnológicos de impacto.",
  keywords: [
    "desarrollo de software",
    "aplicaciones web",
    "desarrollo móvil",
    "APIs",
    "automatización",
    "cloud",
    "startup tecnológica",
  ],
  openGraph: {
    title: "Explobyte — Software que transforma tu negocio",
    description:
      "Construimos software de alta calidad que transforma negocios. Aplicaciones web, móviles, APIs y soluciones cloud.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explobyte — Software que transforma tu negocio",
    description:
      "Construimos software de alta calidad que transforma negocios.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
