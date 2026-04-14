import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss – Saxoføn Frisør | Frisørsalong på St. Hanshaugen, Oslo",
  description:
    "Over 17 års erfaring med klipp, farge og behandlinger i Fredensborgveien på St. Hanshaugen. Godkjent lærebedrift med 4.9 på Google og 681 anmeldelser.",
  alternates: { canonical: "/om-oss" },
};

export default function OmOssLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
