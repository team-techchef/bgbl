import Image from 'components/image/image';
import styles from './cardCta.module.scss';
import { forwardRef } from 'react';

const CardCta = forwardRef(({ image, text, children, href, onClick }, ref) => (
  <figure className={styles.card}>
    <a className={styles.link} href={href} onClick={onClick} ref={ref}>
      <div className={styles['img-container']}>
        <Image {...image} />
      </div>
      <figcaption>
        {text}
        {children}
      </figcaption>
    </a>
  </figure>
));

export default CardCta;
