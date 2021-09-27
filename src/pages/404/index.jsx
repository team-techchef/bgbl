import { getPageProps } from 'util/api';
import styles from './404.module.scss';

const Page404 = () => (
  <div className={styles.container}>
    <h1 className={styles.header}>404</h1>
    <p className={styles.message}>Sorry, the page is not found</p>
  </div>
);

export const getStaticProps = async () => getPageProps('404');

export default Page404;
