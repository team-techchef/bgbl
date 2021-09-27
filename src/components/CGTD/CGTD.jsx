import styles from './CGTD.module.scss';
import Image from 'components/image/image';

const CGTD = ({ title, src, alt, link, ytLink }) => {
  return (
    <a
      className={styles.cgtd}
      rel="noopener noreferrer"
      href={link}
      target="_blank"
    >
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.img}>
          <Image src={src} alt={alt} />
        </div>
        {ytLink && (
          <a href={ytLink} rel="noopener noreferrer">
            SEE ON YOUTUBE
          </a>
        )}
      </div>
    </a>
  );
};

export default CGTD;
