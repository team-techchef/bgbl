import { getPageProps } from 'util/api';
import { motion } from 'framer-motion';
import { pageVariants } from 'util/motionVariants';
import styles from './publications.module.scss';
import Publication from 'components/Publication/Publication';

const Publications = ({ data }) => {
  return (
    <motion.div
      className={styles.layout}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className={`header-1 ${styles.header}`}>{data?.header}</h1>
      <section className={styles.read}>
        <h2 className="header-two">{data.seeWriting.title}</h2>
        {data.seeWriting.publications?.length > 0 ? (
          <div className={styles.read_pubs}>
            {data.seeWriting.publications.map((pub) => {
              return (
                <Publication
                  title={pub.title}
                  src={pub.image.src}
                  alt={pub.image.alt}
                  link={pub.link}
                  linkText={pub.linkText}
                  type={pub.type}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </section>
      <section className={styles.download}>
        <h2 className="header-two">{data.downloadWriting.title}</h2>
        {data.downloadWriting.publications?.length > 0 ? (
          <div className={styles.download_pubs}>
            {data.downloadWriting.publications.map((pub) => {
              return (
                <Publication
                  title={pub.title}
                  src={pub.image.src}
                  alt={pub.image.alt}
                  link={pub.link}
                  linkText={pub.linkText}
                  type={pub.type}
                />
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </section>
      <p className={styles.subheader}>
        <em>{data.subheader}</em>
      </p>
    </motion.div>
  );
};

export const getStaticProps = async () => getPageProps('publications');

export default Publications;
