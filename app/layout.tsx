import type { Metadata } from "next";
import Header from '@/components/Header';
import { Footer} from '@/components/Footer';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'iKids Guardería | Educación Infantil de Calidad',
  description: 'Somos iKids la mejor guardería en Quito, Ecuador. Ofrecemos cuidado infantil profesional, educación temprana y actividades lúdicas para el desarrollo integral de tus hijos.',
  keywords: "guardería Quito, jardín infantil Quito, cuidado de niños, educación temprana, guardería infantil, iKids Ecuador, centros infantiles Quito"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
