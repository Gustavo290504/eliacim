import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Iglesia Bautista Eliacim | Fe, Amor y Esperanza",
  description:
    "Bienvenido a Iglesia Bautista Eliacim. Una comunidad de fe comprometida con el amor de Cristo, la enseñanza de la Palabra y el servicio al prójimo.",
  keywords: [
    "iglesia bautista",
    "eliacim",
    "iglesia",
    "fe",
    "sermones",
    "eventos",
    "comunidad cristiana",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
