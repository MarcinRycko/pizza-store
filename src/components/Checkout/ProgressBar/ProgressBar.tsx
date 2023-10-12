import { useGlobalStateContext } from '../../../context/globalStateContext';
import { useProgressBar } from './hook';
import styles from './styles.module.scss';

const { wrapper, wrapper__progress } = styles;

const ProgressBar: React.FC = () => {
  const {
    state: {
      globalState: { subtotalPrice, freeDeliveryFrom, isFreeDelivery },
    },
  } = useGlobalStateContext();

  const { ref, progressBarWidth } = useProgressBar(
    subtotalPrice,
    freeDeliveryFrom,
    isFreeDelivery
  );

  return (
    <>
      <div className={wrapper} ref={ref}>
        <div
          style={{ width: `${progressBarWidth}px` }}
          className={wrapper__progress}
        />
      </div>
    </>
  );
};

export default ProgressBar;
