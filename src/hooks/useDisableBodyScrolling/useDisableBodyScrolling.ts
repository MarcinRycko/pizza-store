import { useEffect, useLayoutEffect, useRef } from 'react';
import './disabledBodyScrollingStyles.scss';

export const useDisableBodyScrolling = (isActive: boolean) => {
  const ref = useRef<HTMLBodyElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    ref.current = document.querySelector('body');
  }, []);

  useLayoutEffect(() => {
    if (!ref.current) return;

    if (typeof document === 'undefined') return;
    const documentWidth = document.documentElement.clientWidth;

    if (typeof window === 'undefined') return;
    const windowWidth = window.innerWidth;

    if (!documentWidth || !windowWidth) return;
    const scrollBarWidth = windowWidth - documentWidth;

    if (isActive) {
      ref.current.classList.add('disableBodyScrolling');
      ref.current.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      ref.current.classList.remove('disableBodyScrolling');
      ref.current.style.paddingRight = `0px`;
    }
  }, [isActive]);
};
