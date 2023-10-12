import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  wrapper__heading,
  wrapper__heading__title,
  list,
  list__item,
  list__item__title,
  list__item__description,
  list__item__signature,
} = styles;

const SpecialOffer: React.FC = () => {
  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <div className={wrapper__heading}>
            <h1 className={wrapper__heading__title}>Special Offer</h1>
          </div>
          <ul className={list}>
            <li className={list__item}>
              <h2 className={list__item__title}>free shipping and packaging</h2>
              <p className={list__item__description}>
                Place an order of at least 100zł and get free packaging and
                delivery. You can check the order value in the cart.
              </p>
              <div className={list__item__signature}>
                <span>Available at:</span>
                <span>deliver, restaurant</span>
              </div>
            </li>
            <li className={list__item}>
              <h2 className={list__item__title}>loyalty program</h2>
              <p className={list__item__description}>
                Collect stamps and get a free pizza. For every 50zł spent you
                will receive a stamp. Collect 5 of them and get a free medium
                pizza.
              </p>
              <div className={list__item__signature}>
                <span>Available at:</span>
                <span>deliver, restaurant</span>
              </div>
            </li>
            <li className={list__item}>
              <h2 className={list__item__title}>free sauces</h2>
              <p className={list__item__description}>
                Place an order for a 35cm or 45cm pizza and get free sauce or
                oil!
              </p>
              <div className={list__item__signature}>
                <span>Available at:</span>
                <span>deliver, restaurant</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
