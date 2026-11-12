"use client";

import { useState, useCallback, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [stored, setStored] = useState<T>(initialValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        const parsed = JSON.parse(item) as T;
        // An empty array means someone deleted everything in edit mode;
        // fall back to defaults instead of rendering an empty site.
        const wiped =
          Array.isArray(parsed) &&
          parsed.length === 0 &&
          Array.isArray(initialValue) &&
          initialValue.length > 0;
        if (wiped) {
          window.localStorage.removeItem(key);
        } else {
          setStored(parsed);
        }
      }
    } catch {}
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      setStored((prev) => {
        const valueToStore = value instanceof Function ? value(prev) : value;
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
        return valueToStore;
      });
    },
    [key]
  );

  return [stored, setValue, hydrated] as const;
}
