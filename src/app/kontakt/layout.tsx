import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt oss – Saxoføn Frisør | Fredensborgveien 22, Oslo",
  description:
    "Bestill time eller ta kontakt med Saxoføn Frisør på St. Hanshaugen. Åpent mandag–lørdag 10–18. Ring 455 55 898 eller bestill online.",
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
