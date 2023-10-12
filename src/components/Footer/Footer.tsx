import Map from './Map/Map';
import Newsletter from './Newsletter/Newsletter';
import Adress from './Adress/Adress';
import styles from './styles.module.scss';

const { footer } = styles;

const Footer: React.FC = () => {
  return (
    <>
      <footer className={footer}>
        <Newsletter />
        <Adress />
        <Map />
      </footer>
    </>
  );
};

export default Footer;
