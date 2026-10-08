import { useEffect } from 'react';

/**
 * Custom hook to set document title dynamically.
 * Automatically appends " | Eddy" suffix.
 */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Eddy`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
