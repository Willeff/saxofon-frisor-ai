"use client";

import Script from "next/script";
import { useConsent } from "../context/ConsentContext";

// Global tracking gate.
//
// GTM is the single entry point for all tracking. GA4 (or any other tag)
// lives inside the GTM container — never directly in this codebase. The tag
// is only injected into the DOM after the user has granted analytics consent,
// so nothing fires before opt-in.

export default function Analytics() {
  const { consent, hydrated } = useConsent();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  console.log("GTM ID DEBUG:", gtmId);

  if (!hydrated) return null;
  if (!consent.analytics) return null;
  if (!gtmId) return null;

  return (
    <Script
      id="gtm-loader"
      strategy="afterInteractive"
    >
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
    </Script>
  );
}