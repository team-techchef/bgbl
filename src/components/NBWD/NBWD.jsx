import styles from './NBWD.module.scss';
import Image from 'components/image/image';

const NBWD = ({ title, src, alt, link, ytLink }) => {
  return (
    <a
      className={styles.nbwd}
      rel="noopener noreferrer"
      href={link}
      target="_blank"
    >
      <div>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.img}>
          <Image src={src} alt={alt} />
        </div>
        {ytLink && <a href={ytLink}>SEE ON YOUTUBE</a>}
      </div>
    </a>
  );
};

export default NBWD;
