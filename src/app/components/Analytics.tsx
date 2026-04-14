"use client";

// Analytics gate.
//
// Renders nothing today — Saxoføn has no analytics installed yet. When GA4
// (or any other analytics) is added, drop the script tags inside the
// `consent.analytics` branch below using `next/script` with
// strategy="afterInteractive". The ConsentProvider guarantees this component
// re-renders when the user grants/revokes consent, so scripts are only
// injected into the DOM after explicit opt-in.
//
// Example (do NOT enable until a GA4 ID is provisioned):
//
//   import Script from "next/script";
//   const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
//   if (!GA_ID) return null;
//   return (
//     <>
//       <Script
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
//         strategy="afterInteractive"
//       />
//       <Script id="ga4-init" strategy="afterInteractive">
//         {`window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${GA_ID}', { anonymize_ip: true });`}
//       </Script>
//     </>
//   );

import { useConsent } from "../context/ConsentContext";

export default function Analytics() {
  const { consent, hydrated } = useConsent();

  if (!hydrated) return null;
  if (!consent.analytics) return null;

  // TODO: render GA4 / analytics scripts here once provisioned.
  return null;
}
