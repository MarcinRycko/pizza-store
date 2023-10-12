import AboutOurRestaurant from '../../components/AboutOurRestaurant/AboutOurRestaurant';
import HomeHero from '../../components/HomeHero/HomeHero';
import InfoBox from '../../components/InfoBox/InfoBox';

export const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />
      <InfoBox />
      <AboutOurRestaurant />
    </>
  );
};
