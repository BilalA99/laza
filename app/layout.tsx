import type { Metadata } from "next";
import { Inter, Playfair_Display, Roboto, Bodoni_Moda, EB_Garamond,Cardo,Yeseva_One} from "next/font/google";
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

// Get the base URL for metadata (works both locally and in production)
const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }
  return 'https://lazadessert.cafe';
};

const baseUrl = getBaseUrl();
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  display: "swap",

});

const ebgaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-ebgaramond",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cardo = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
  display: "swap",
});

const yeseva = Yeseva_One({
  subsets: ["latin"],
  variable: "--font-yeseva",
  weight: ["400"],
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "Laza Dessert Cafe - Premium Middle Eastern Desserts & Drinks",
    template: "%s | Laza Dessert Cafe"
  },
  description: "Indulge in premium Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more. Order online for pickup or catering. Experience the sweet taste of tradition.",
  keywords: [
    "laza dessert cafe",
    "laza dessert cafe nyc",
    "laza dessert cafe queens",
    "laza dessert cafe astoria",
    "laza dessert cafe brooklyn",
    "laza dessert cafe bay ridge",
    "laza dessert cafe steinway",
    "laza dessert cafe 5th ave",
    "laza dessert cafe near me",
    "laza dessert cafe hours",
    "directions to laza dessert cafe astoria",
    "directions to laza dessert cafe bay ridge",
    "laza dessert cafe order online",
    "laza dessert cafe delivery",
    "laza dessert cafe pickup",
    "laza by chocolate factory",
    "laza formerly chocolate factory",
    "chocolate factory",
    "the chocolate factory",
    "chocolate factory nyc",
    "chocolate factory queens",
    "chocolate factory astoria",
    "chocolate factory steinway",
    "chocolate factory steinway street",
    "chocolate factory brooklyn",
    "chocolate factory bay ridge",
    "chocolate factory 5th ave",
    "chocolate factory near me",
    "chocolate factory open late",
    "chocolate factory open till 2am",
    "chocolate factory hours",
    "directions to chocolate factory astoria",
    "directions to chocolate factory bay ridge",
    "chocolate factory order online",
    "chocolate factory delivery",
    "chocolate factory pickup",
    "chocolate factory new name laza"
  ],
  authors: [{ name: "Laza Dessert Cafe" }],
  creator: "Laza Dessert Cafe",
  publisher: "Laza Dessert Cafe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(baseUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Laza Dessert Cafe',
    title: 'Laza Dessert Cafe - Premium Middle Eastern Desserts & Drinks',
    description: 'Indulge in premium Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more. Order online for pickup or catering.',
    images: [
      {
        url: `${baseUrl}/default_og.png`,
        width: 1200,
        height: 630,
        alt: 'Laza Dessert Cafe - Premium Middle Eastern Desserts',
        url: '/logosocial.png',
        width: 1200,
        height: 630,
        alt: 'Laza Dessert Cafe - Authentic Middle Eastern Desserts',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laza Dessert Cafe - Premium Middle Eastern Desserts & Drinks',
    description: 'Indulge in premium Middle Eastern desserts at Laza Dessert Cafe. Fresh kunafa, crepes, shakes, and more.',
    images: [`${baseUrl}/default_og.png`],
    creator: '@laza.cafe',
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
        className={`${inter.variable} ${playfair.variable} ${roboto.variable} ${bodoni.variable} ${ebgaramond.variable} ${cardo.variable} ${yeseva.variable} antialiased w-full overflow-none`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
