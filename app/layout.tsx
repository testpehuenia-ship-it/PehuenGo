import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "PehuenGo | Guía y Delivery en Villa Pehuenia",
  description: "Descubre dónde comer, alojarte y qué hacer en Villa Pehuenia. Pide comida directo por WhatsApp y reserva excursiones al instante.",
  keywords: ["Villa Pehuenia", "turismo", "delivery", "comida", "cabañas", "excursiones", "qué hacer", "dónde comer"],
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${caveat.variable}`}>
      <body>
        <Navbar />
        <main style={{ minHeight: "calc(100vh - 140px)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
