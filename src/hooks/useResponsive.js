import { useEffect, useState } from 'react';

const useResponsive = (breakpoint = '(max-width: 768px)') => {
  const [isMobileOrPortrait, setIsMobileOrPortrait] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(breakpoint);
    const handler = () => setIsMobileOrPortrait(mediaQuery.matches);

    handler(); // Check once on load
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [breakpoint]);

  return isMobileOrPortrait;
};

export default useResponsive;
