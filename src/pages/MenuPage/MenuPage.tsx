import SectionHero from '../../components/SectionHero/SectionHero';
import MenuSection from '../../components/Menu/MenuSection/MenuSection';

export const MenuPage: React.FC = () => {
  return (
    <>
      <SectionHero sectionLabel="Menu" />
      <MenuSection />
    </>
  );
};
