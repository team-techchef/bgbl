import { getPageProps } from 'util/api';
import { motion } from 'framer-motion';
import { pageVariants } from 'util/motionVariants';
import Panel from 'components/Panel/Panel';
import BlockQuote from 'components/blockQuote/blockQuote';
import CGTD from 'components/CGTD/CGTD';
import styles from './reviews.module.scss';

const ComeGetThisDiversity = ({ data }) => (
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
      <BlockQuote {...data?.list?.blockQuote} />
      <Panel title="Come Get This Diversity">
        <div className={styles['drawer-container']}>
          {data?.list?.newsletters?.map((nl, x) => {
            return (
              <CGTD
                key={`nl${x}`}
                title={nl.title}
                link={nl.link}
                src={nl.img}
                // alt={bk?.alt}
              />
            );
          })}
        </div>
      </Panel>
    </section>
    {/* <section className={styles.section}>
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
    </section> */}
  </motion.div>
);

export const getStaticProps = async () => getPageProps('reviews');

export default ComeGetThisDiversity;
