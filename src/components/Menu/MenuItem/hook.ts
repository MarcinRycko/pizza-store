import { useDisableBodyScrolling, useToggler } from '../../../hooks';

export const useModal = () => {
  const {
    isActive: isModalOpen,
    setActive: openModal,
    setDisabled: closeModal,
  } = useToggler();

  useDisableBodyScrolling(isModalOpen);

  return { isModalOpen, openModal, closeModal };
};
