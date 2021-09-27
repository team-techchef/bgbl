import styles from './badgeGroup.module.scss';

const BadgeGroup = ({ badges }) => (
  <div className={styles.container}>
    {badges.map((v) => (
      <div className={styles.badge}>{v}</div>
    ))}
  </div>
);

export default BadgeGroup;
