import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useCloseSidebarOnRouteChange = (
  isOpen: boolean,
  closeFn: () => void
) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!isOpen) return;
    closeFn();
  }, [pathname]);
};
