import styles from './index.module.scss';
import { getPageProps } from 'util/api';
import { motion } from 'framer-motion';
import { pageVariants } from 'util/motionVariants';
import Accordion from 'components/accordion/accordion';
import AccordionPanel from 'components/accordionPanel/accordionPanel';
import BlockQuote from 'components/blockQuote/blockQuote';
import CtaBtn from 'components/cta-btn/ctaBtn';
import CardCta from 'components/cardCta/cardCta';
import GroupLayout from 'components/groupLayout/groupLayout';
import Link from 'next/link';
import PlaceholderBlock from 'components/placeholderBlock/PlaceholderBlock';
import AccNotice from 'components/accNotice/AccNotice';
import NBWD from 'components/NBWD/NBWD';
import CGTD from 'components/CGTD/CGTD';

const Home = ({ data }) => {
  const { mainHeader, drawer, blockQuote, callToActionCards = [] } = data;
  return (
    <motion.div
      className={styles.layout}
      initial="initial"
      animate="enter"
      exit="exit"
      variants={pageVariants}
    >
      <h1 className="header-1">{mainHeader}</h1>
      <BlockQuote {...blockQuote} />
      <CtaBtn link={blockQuote?.link} text={blockQuote?.cta_text} />

      <Accordion>
        {drawer.map((obj, i) => {
          return (
            <AccordionPanel
              idx={`ap${i}`}
              key={`ACC${i}`}
              title={obj?.list?.label}
            >
              {obj.list.id === 'nbwd' ? (
                <div className={styles['drawer-container']}>
                  {obj?.list?.books?.map((bk, x) => {
                    return (
                      <NBWD
                        key={`${i}book${x}`}
                        title={bk.title}
                        link={bk.link}
                        src={bk.img}
                        // alt={bk?.alt}
                      />
                    );
                  })}
                </div>
              ) : (
                <div className={styles['drawer-container']}>
                  {obj?.list?.newsletters?.map((nl, x) => {
                    return (
                      <CGTD
                        key={`${i}nl${x}`}
                        title={nl.title}
                        link={nl.link}
                        src={nl.img}
                        // alt={bk?.alt}
                      />
                    );
                  })}
                </div>
              )}
              {console.log(JSON.stringify(obj.list.newsletters?.length))}
            </AccordionPanel>
          );
        })}
      </Accordion>
      <GroupLayout>
        {callToActionCards.map(({ image, caption, link }, i) => {
          const relativePath = /^\//.test(link);
          return relativePath ? (
            <Link href={link} key={`card${i}`} passHref>
              <CardCta image={image} text={caption} />
            </Link>
          ) : (
            <CardCta
              key={`card${i}`}
              href={link}
              image={image}
              text={caption}
            />
          );
        })}
      </GroupLayout>
    </motion.div>
  );
};

export const getStaticProps = async ({ preview, previewData }) =>
  getPageProps('index', preview, previewData);

export default Home;
