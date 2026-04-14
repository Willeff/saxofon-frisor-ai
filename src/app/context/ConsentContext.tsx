"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type ConsentState = {
  analytics: boolean;
  decided: boolean;
};

type ConsentContextType = {
  consent: ConsentState;
  // True once we've read localStorage on the client. Components should gate
  // any UI that depends on the persisted choice on this flag to avoid
  // hydration mismatches.
  hydrated: boolean;
  // True when the banner should be visible (no decision yet, or user reopened).
  bannerOpen: boolean;
  acceptAnalytics: () => void;
  declineAnalytics: () => void;
  reopen: () => void;
};

const DEFAULT_STATE: ConsentState = { analytics: false, decided: false };

const STORAGE_KEY = "saxofon_cookie_consent_v1";

const ConsentContext = createContext<ConsentContextType>({
  consent: DEFAULT_STATE,
  hydrated: false,
  bannerOpen: false,
  acceptAnalytics: () => {},
  declineAnalytics: () => {},
  reopen: () => {},
});

function isConsentState(value: unknown): value is ConsentState {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return typeof v.analytics === "boolean" && typeof v.decided === "boolean";
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_STATE);
  const [hydrated, setHydrated] = useState(false);
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (isConsentState(parsed)) {
          setConsent(parsed);
        }
      }
    } catch {}
    setHydrated(true);
  }, []);

  const persist = useCallback((next: ConsentState) => {
    setConsent(next);
    setReopened(false);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  }, []);

  const acceptAnalytics = useCallback(() => {
    persist({ analytics: true, decided: true });
  }, [persist]);

  const declineAnalytics = useCallback(() => {
    persist({ analytics: false, decided: true });
  }, [persist]);

  const reopen = useCallback(() => {
    setReopened(true);
  }, []);

  const bannerOpen = hydrated && (!consent.decided || reopened);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        hydrated,
        bannerOpen,
        acceptAnalytics,
        declineAnalytics,
        reopen,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  return useContext(ConsentContext);
}
