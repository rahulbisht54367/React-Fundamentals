import { useEffect, useState } from 'react';

// Persists a piece of state to localStorage so tracked sessions survive reloads.
export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore write errors (e.g. private mode / quota exceeded).
    }
  }, [key, value]);

  return [value, setValue];
}
