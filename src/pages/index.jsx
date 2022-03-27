import styles from './index.module.scss'
import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import Accordion from 'components/accordion/accordion'
import Panel from 'components/Panel/Panel'
import BlockQuote from 'components/blockQuote/blockQuote'
import CardCta from 'components/cardCta/cardCta'
import GroupLayout from 'components/groupLayout/groupLayout'
import NBWD from 'components/NBWD/NBWD'
import Newsletter from 'components/newsletter/Newsletter'

const Home = ({ data }) => {
  const { mainHeader, drawer, blockQuote, callToActionCards = [] } = data
  return (
    <motion.div
      className={styles.layout}
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageVariants}
    >
      <h1 className='header-1'>{mainHeader}</h1>
      <Newsletter />
      <Accordion>
        {drawer.map((obj, i) => {
          return (
            <Panel idx={`ap${i}`} key={`ACC${i}`} title={obj?.list?.label}>
              {obj.list.id === 'nbwd' ? (
                <div className={styles['drawer-container']}>
                  {obj?.list?.books?.map((bk, x) => {
                    return (
                      <NBWD
                        key={`${i}book${x}`}
                        title={bk.title}
                        link={bk.link}
                        src={bk.img}
                      />
                    )
                  })}
                </div>
              ) : null}
            </Panel>
          )
        })}
      </Accordion>
      <GroupLayout>
        {callToActionCards.map(({ image, caption, link }, i) => {
          return (
            <a href={link} key={`card${i}`} passHref>
              <CardCta
                key={`card${i}`}
                href={link}
                image={image}
                text={caption}
              />
            </a>
          )
        })}
      </GroupLayout>
      <BlockQuote {...blockQuote} />
    </motion.div>
  )
}

export const getStaticProps = async ({ preview, previewData }) =>
  getPageProps('index', preview, previewData)

export default Home
