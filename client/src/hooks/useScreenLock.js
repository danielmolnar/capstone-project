import { useEffect } from 'react';

export default function useScreenLock(open) {
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [open]);
}
