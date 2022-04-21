import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import TileGroup from 'components/tileGroup/tileGroup'
import styles from './community-reads.module.scss'

const ReadingNow = ({ data }) => (
  <motion.div
    className={styles.layout}
    initial='initial'
    animate='enter'
    exit='exit'
    variants={pageVariants}
  >
    <h1 className='header-1'>{data?.header}</h1>
    <TileGroup tiles={data?.tiles} />
  </motion.div>
)

export const getStaticProps = async () => getPageProps('community-reads')

export default ReadingNow
