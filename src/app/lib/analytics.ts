// Tiny dataLayer helper. All tracking goes through GTM, so this is the only
// place in the codebase that touches window.dataLayer.

type DataLayerEntry = Record<string, unknown>;

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

export function pushEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });
}
