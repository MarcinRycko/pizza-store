import styles from './styles.module.scss';

const { wrapper, wrapper__message } = styles;

const EmptyCart: React.FC = () => {
  return (
    <>
      <div className={wrapper}>
        <p className={wrapper__message}>Cart is empty</p>
      </div>
    </>
  );
};

export default EmptyCart;
