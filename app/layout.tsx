import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import '@/components/embla.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});
export const metadata: Metadata = {
  title: "Laza Desserts",
  description: "Laza Desserts",
};
// Primary : #2C4B7E
// Accent : #F1F1F1
// Highlight : #E3B952

// xl:padding-x-20 
// padding-y-20
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable}`}>
      <body
        className={`${inter.variable} ${playfair.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
