import {
  useDisableBodyScrolling,
  useCloseSidebarOnRouteChange,
  useToggler,
} from '../../hooks';

export const useHeader = () => {
  const {
    isActive: isNavBarOpen,
    toggle: handleToggleOpen,
    setDisabled: handleClose,
  } = useToggler();

  useDisableBodyScrolling(isNavBarOpen);

  useCloseSidebarOnRouteChange(isNavBarOpen, handleToggleOpen);

  return { isNavBarOpen, handleToggleOpen, handleClose };
};
