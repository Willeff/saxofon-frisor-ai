import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personvern – Saxoføn Frisør",
  description:
    "Personvernerklæring for saxofonfrisor.no. Hvilke opplysninger vi behandler, bruk av analyseverktøy, samtykke og dine rettigheter.",
  robots: { index: true, follow: true },
};

export default function PersonvernLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
