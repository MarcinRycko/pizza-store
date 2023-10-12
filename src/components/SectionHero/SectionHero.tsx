import { SectionHeroProps } from './types';
import styles from './styles.module.scss';

const { wrapper, wrapper__title } = styles;

const SectionHero: React.FC<SectionHeroProps> = ({ sectionLabel }) => {
  return (
    <>
      <section className={wrapper}>
        <h1 className={wrapper__title}>{sectionLabel}</h1>
      </section>
    </>
  );
};

export default SectionHero;
