import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Saxoføn Frisør – Frisør i Oslo | Klipp, farge og behandlinger",
    template: "%s – Saxoføn Frisør",
  },
  description:
    "Frisørsalong på St. Hanshaugen i sentrale Oslo. Herreklipp, dameklipp, balayage, hårfarge og keratinbehandling. 4.9 på Google med over 680 anmeldelser. Bestill time i dag.",
  icons: {
    icon: [
      { url: "/saxofon-icon/favicon-dark.ico", sizes: "any" },
      { url: "/saxofon-icon/icon-dark-32.png", sizes: "32x32", type: "image/png" },
      { url: "/saxofon-icon/icon-dark-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/saxofon-icon/icon-dark-180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/saxofon-icon/icon-dark-192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/saxofon-icon/icon-dark-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Saxoføn Frisør",
  image: "https://saxofonfrisor.no/saxofon-hero.jpg",
  url: "https://saxofonfrisor.no",
  telephone: "+4745555898",
  email: "saxofon@hotmail.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fredensborgveien 22",
    addressLocality: "Oslo",
    postalCode: "0177",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 59.9225,
    longitude: 10.7468,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    ratingCount: "681",
  },
  priceRange: "$$",
  areaServed: {
    "@type": "City",
    name: "Oslo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
