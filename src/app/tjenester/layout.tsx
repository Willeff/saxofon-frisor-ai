import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tjenester og priser – Saxoføn Frisør | Klipp, farge og behandlinger i Oslo",
  description:
    "Se priser for herreklipp, dameklipp, balayage, striper, hårfarge, keratinbehandling og mer. Frisørsalong i Fredensborgveien, sentrale Oslo.",
  alternates: { canonical: "/tjenester" },
};

export default function TjenesterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
