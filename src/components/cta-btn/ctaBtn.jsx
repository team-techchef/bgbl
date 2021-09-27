import Link from 'next/link';
import styles from './ctaBtn.module.scss';

const CtaBtn = ({ link, text }) => (
  <Link href={link}>
    <a className={styles.cta}>{text}</a>
  </Link>
);

export default CtaBtn;
