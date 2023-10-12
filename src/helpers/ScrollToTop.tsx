import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
