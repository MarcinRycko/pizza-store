import styles from './styles.module.scss';

const { map, map__container, map__iframe } = styles;

const Map: React.FC = () => {
  return (
    <>
      <div className={map}>
        <div className={map__container}>
          <iframe
            className={map__iframe}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5124.203431471232!2d21.9802081408651!3d50.04692584167038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473cfb6de003f789%3A0x519061b90aa3c4af!2sGaleria%20Nowy%20%C5%9Awiat!5e0!3m2!1spl!2spl!4v1679066000092!5m2!1spl!2spl"
            title="map"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
