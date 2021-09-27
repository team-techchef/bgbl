import styles from './PlaceholderBlock.module.scss';

const PlaceholderBlock = ({ text }) => (
  <div className={styles.container}>
    <div className={styles.block}>{text || 'Coming Soon'}</div>
  </div>
);

export default PlaceholderBlock;
