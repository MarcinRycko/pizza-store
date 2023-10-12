import { useState, useEffect, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    ref.current = document.getElementById('portal') as HTMLElement;
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted && ref.current ? createPortal(children, ref.current) : null;
};

export default ModalPortal;
