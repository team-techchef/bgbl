import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import styles from './about.module.scss'
import Profile from 'components/profile/profile'
import BadgeGroup from 'components/badgeGroup/badgeGroup'
import BlockQuote from 'components/blockQuote/blockQuote'

const About = ({ data, content }) => {
  return (
    <motion.div
      className={styles.layout}
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageVariants}
    >
      <section className={styles.profile}>
        <Profile markup={content} image={data?.authorImage} />
      </section>
      <section className={styles.socials}>
        <h2 className='header-two'>{data?.socials?.title}</h2>
        <BadgeGroup badges={data?.socials?.items} />
      </section>
      <section className={styles.siteFacts}>
        <h2 className={'header-two'}>{data?.siteFacts?.title}</h2>
        <BadgeGroup badges={data?.siteFacts?.facts} />
      </section>
      <div className={styles.quote}>
        <BlockQuote {...data.blockQuote} />
      </div>
    </motion.div>
  )
}

export const getStaticProps = async () => getPageProps('about')

export default About
