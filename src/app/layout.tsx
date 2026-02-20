import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/premium/blocks/Header";
import { Footer } from "@/components/premium/blocks/Footer";
import Script from "next/script";

const GA_ID = 'G-1JC1XFS3NY';

const siteUrl = "https://kurtkoyhaliyikama.net";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

// Manrope: sıcak, modern, geometrik sans-serif — ev + temizlik hissi
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kurtköy Halı Yıkama | Sağlık Odaklı Profesyonel Temizlik',
  description: 'Halı yıkatmak bir temizlik değil, bir sağlık kararıdır. Kurtköy Halı Yıkama ile bakterilerden arınmış, %100 hijyenik ve doğal şampuanlı temizlik. 1 haftada teslim garantisi.',
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: 'Kurtköy Halı Yıkama | Sağlık Odaklı Temizlik',
    description: 'Bakterilere karşı cerrahi titizlik. Ücretsiz servis ve profesyonel kurutma süreci ile 1 haftada teslim.',
    url: siteUrl,
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: "/images/hero_studio_light_gray.png",
        width: 1200,
        height: 630,
        alt: "Kurtköy Halı Yıkama",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurtköy Halı Yıkama | Sağlık Odaklı Temizlik",
    description: "Bakterilere karşı cerrahi titizlik ve kapalı alan kurutma süreci.",
    images: ["/images/hero_studio_light_gray.png"],
  },
  keywords: ['kurtköy halı yıkama', 'pendik halı yıkama', 'hijyenik halı yıkama', 'doğal halı yıkama', 'koltuk yıkama kurtköy'],
  icons: {
    icon: '/favicon.webp',
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kurtköy Halı Yıkama",
  url: siteUrl,
  image: `${siteUrl}/images/hero_studio_light_gray.png`,
  telephone: "+905424025123",
  email: "info@kurtkoyhaliyikama.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Velibaba Mh. Aydos Cd. No:71",
    addressLocality: "Pendik",
    addressRegion: "İstanbul",
    postalCode: "34896",
    addressCountry: "TR",
  },
  areaServed: [
    "Kurtköy", "Pendik", "Velibaba", "Kaynarca", "Çınardere",
    "Uydukent", "Tepeören", "Akfırat", "Tuzla", "Yenişehir",
    "Esenyalı", "Güzelyalı"
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Halı Yıkama" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Koltuk Yıkama" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stor Perde Yıkama" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Yorgan & Battaniye Yıkama" } },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${jakarta.variable} ${manrope.variable} antialiased`}
      >
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
