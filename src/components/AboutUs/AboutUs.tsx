import imgSrc from '../../assets/ourRestaurantSecond.jpg';
import styles from './styles.module.scss';

const {
  wrapper,
  wrapper__container,
  heading,
  heading__title,
  heading__description,
  image,
} = styles;

const AboutUs: React.FC = () => {
  return (
    <>
      <section className={wrapper}>
        <div className={wrapper__container}>
          <div className={heading}>
            <h1 className={heading__title}>About Us</h1>
            <p className={heading__description}>
              <span>
                At our Pizzeria, we are passionate about delivering a delightful
                dining experience that revolves around one thing - the love of
                pizza. We take pride in crafting mouthwatering pizzas that
                ignite your taste buds and leave you craving for more.
              </span>
              <span>
                Our menu showcases a wide array of delectable options, ranging
                from classic favorites to innovative creations. Each pizza is
                crafted with precision, using only the finest ingredients
                sourced from trusted suppliers. From the perfect balance of
                flavors to the heavenly aromas that fill our pizzeria, every
                bite is a symphony of taste.
              </span>
              <span>
                Behind the scenes, our team of dedicated chefs pours their
                expertise into every pizza. Their culinary mastery, combined
                with a touch of creativity, ensures that each pie is a work of
                art. Whether you prefer a traditional Margherita or an
                adventurous specialty pizza, we have something to satisfy every
                palate.
              </span>
              <span>
                Step into our warm and inviting space, where the aroma of
                freshly baked pizza wafts through the air. Our attentive staff
                is committed to providing exceptional service, ensuring that
                your dining experience is nothing short of exceptional. We
                strive to create a welcoming atmosphere where friends and
                families can gather, bond, and share the joy of good food.
              </span>
              <span>
                Join us at our Pizzeria and embark on a culinary journey that
                celebrates the magic of pizza. It's not just a meal; it's an
                experience that will leave you with lasting memories. We can't
                wait to serve you and be a part of your pizza adventure!
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

export default AboutUs;
