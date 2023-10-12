import imgSrc from '../../assets/ourRestaurant.jpg';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  heading,
  heading__title,
  heading__description,
  image,
} = styles;

const AboutOurRestaurant: React.FC = () => {
  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <div className={heading}>
            <h1 className={heading__title}>about our restaurant</h1>
            <p className={heading__description}>
              <span>
                Welcome to our Pizzeria, where you can indulge in the best
                pizzas in town. Our pizzeria offers authentic Italian flavors,
                prepared with utmost care and passion.
              </span>
              <span>
                Our menu is rich and diverse, encompassing a wide selection of
                traditional and innovative flavor combinations. Our pizzas are
                baked on-site, using the freshest ingredients and top-quality
                cheeses, sauces, and toppings.
              </span>
              <span>
                Our team of chefs consists of experienced specialists who ensure
                that each pizza is perfectly baked, with flavorful crusts and a
                perfect balance of flavors. You can choose from classic
                variations such as Margherita or Capriciosa, or experiment with
                new taste combinations like prosciutto with arugula and goat
                cheese.
              </span>
            </p>
          </div>
          <div className={image}>
            <img src={imgSrc} alt="our restaurant" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutOurRestaurant;
