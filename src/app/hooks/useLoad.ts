import { useEffect, useState } from 'react';

type Result<T> = { key: string; data: T | null; failed: boolean };

// Loads data from the API and tracks loading / error.
// `key` says what is being loaded (e.g. "booking-1001"): when it changes, the data is loaded again.
export function useLoad<T>(load: () => Promise<T>, key: string) {
  const [result, setResult] = useState<Result<T> | null>(null);

  useEffect(() => {
    let isCurrent = true; // ignore the answer if the page moved on to another key meanwhile
    load()
      .then((data) => isCurrent && setResult({ key, data, failed: false }))
      .catch(() => isCurrent && setResult({ key, data: null, failed: true }));
    return () => {
      isCurrent = false;
    };
    // Only reload when `key` changes, not on every render (`load` is a new function each time)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // A result for an older key doesn't count: still loading the new one
  const current = result?.key === key ? result : null;
  return { data: current?.data ?? null, isLoading: !current, failed: current?.failed ?? false };
}
