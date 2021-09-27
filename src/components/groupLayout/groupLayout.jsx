import styles from './groupLayout.module.scss';

const GroupLayout = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default GroupLayout;
