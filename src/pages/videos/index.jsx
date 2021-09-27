import { getPageProps } from 'util/api';
import { motion } from 'framer-motion';
import { pageVariants } from 'util/motionVariants';
import VideoPlayer from 'components/videoPlayer/videoPlayer';
import styles from './reviews.module.scss';

const Reviews = ({ data }) => (
  <motion.div
    className={styles.layout}
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
  >
    <h1 className="header-1">{data?.header}</h1>
    <section className={styles.section}>
      <h2 className="header-two">{data?.reviews?.title}</h2>
      <div className={styles['video-container']}>
        {data?.reviews?.videos.map((v, i) => (
          <VideoPlayer
            key={`${v.title}${i}rev`}
            type={v?.type}
            image={v.poster}
            title={v.title}
            link={v.videoLink}
          />
        ))}
      </div>
    </section>
    <section className={styles.section}>
      <h2 className="header-two">{data?.interviews?.title}</h2>
      <div className={styles['video-container']}>
        {data?.interviews?.videos.map((v, i) => (
          <VideoPlayer
            key={`${v.title}${i}int`}
            image={v.poster}
            title={v.title}
            date={v.date}
            link={v.videoLink}
          />
        ))}
      </div>
    </section>
  </motion.div>
);

export const getStaticProps = async () => getPageProps('reviews');

export default Reviews;
