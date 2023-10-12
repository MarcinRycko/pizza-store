import SectionHero from '../../components/SectionHero/SectionHero';
import AboutUs from '../../components/AboutUs/AboutUs';

export const AboutUsPage: React.FC = () => {
  return (
    <>
      <SectionHero sectionLabel="About Us" />
      <AboutUs />
    </>
  );
};
