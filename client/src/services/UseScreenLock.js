import { useEffect } from 'react';

export default function UseScreenLock(open) {
  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => (document.body.style.overflow = originalStyle);
    }
  }, [open]);
}
