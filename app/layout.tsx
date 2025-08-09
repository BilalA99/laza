import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import '@/components/embla.css'
import Footer from "@/components/Footer";

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
  title: {
    default: "Laza Dessert Cafe - Authentic Middle Eastern Desserts & Drinks",
    template: "%s | Laza Dessert Cafe"
  },
  description: "Indulge in authentic Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more. Order online for pickup or catering. Experience the sweet taste of tradition.",
  keywords: [
    "Middle Eastern desserts",
    "kunafa",
    "crepes",
    "dessert cafe",
    "authentic desserts",
    "fresh desserts",
    "dessert catering",
    "dessert delivery",
    "sweet treats",
    "dessert shop",
    "baklava",
    "ferro shake",
    "dessert menu",
    "dessert restaurant"
  ],
  authors: [{ name: "Laza Dessert Cafe" }],
  creator: "Laza Dessert Cafe",
  publisher: "Laza Dessert Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lazadessert.cafe'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lazadessert.cafe',
    siteName: 'Laza Dessert Cafe',
    title: 'Laza Dessert Cafe - Authentic Middle Eastern Desserts & Drinks',
    description: 'Indulge in authentic Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more. Order online for pickup or catering.',
    images: [
      {
        url: '/logosocial.png',
        width: 1200,
        height: 630,
        alt: 'Laza Dessert Cafe - Authentic Middle Eastern Desserts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laza Dessert Cafe - Authentic Middle Eastern Desserts & Drinks',
    description: 'Indulge in authentic Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more.',
    images: ['/lazacafehero.png'],
    creator: '@lazacafe',
    site: '@lazacafe',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  icons: {
    icon: [
      { url: '/lazabluelogo.png', sizes: '32x32', type: 'image/png' },
      { url: '/lazabluelogo.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/lazabluelogo.png',
    apple: [
      { url: '/lazabluelogo.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/lazabluelogo.png',
        color: '#1B3A6B',
      },
    ],
  },
  manifest: '/manifest.json',
  category: 'food and beverage',
  classification: 'restaurant',
  other: {
    'theme-color': '#1B3A6B',
    'msapplication-TileColor': '#1B3A6B',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Laza Dessert Cafe',
    'application-name': 'Laza Dessert Cafe',
    'mobile-web-app-capable': 'yes',
  },
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
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" /></head>
      <body
        className={`${inter.variable} ${playfair.variable} ${roboto.variable} antialiased w-full overflow-none`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
