import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import styles from './publications.module.scss'
import Publication from 'components/Publication/Publication'
import BlockQuote from 'components/blockQuote/blockQuote'

const Publications = ({ data }) => {
  return (
    <motion.div
      className={styles.layout}
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageVariants}
    >
      <div className={styles.wrapper}>
        <BlockQuote {...data.blockQuote} />
        <section className={styles.read}>
          <h2 className='header-two'>{data.bookReviews.title}</h2>
          {data.bookReviews.publications?.length > 0 ? (
            <div className={styles.read_pubs}>
              {data.bookReviews.publications.map((pub) => {
                return (
                  <Publication
                    title={pub.title}
                    src={pub.image.src}
                    alt={pub.image.alt}
                    link={pub.link}
                    linkText={pub.linkText}
                    type={pub.type}
                  />
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </section>
        <section className={styles.download}>
          <h2 className='header-two'>{data.essaysArticles.title}</h2>
          {data.essaysArticles.publications?.length > 0 ? (
            <div className={styles.download_pubs}>
              {data.essaysArticles.publications.map((pub) => {
                return (
                  <Publication
                    title={pub.title}
                    src={pub.image.src}
                    alt={pub.image.alt}
                    link={pub.link}
                    linkText={pub.linkText}
                    type={pub.type}
                  />
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </section>
        <section className={styles.fiction}>
          <h2 className='header-two'>{data.fiction.title}</h2>
          {data.fiction.publications?.length > 0 ? (
            <div className={styles.fiction_pubs}>
              {data.fiction.publications.map((pub) => {
                return (
                  <Publication
                    title={pub.title}
                    src={pub.image.src}
                    alt={pub.image.alt}
                    link={pub.link}
                    linkText={pub.linkText}
                    type={pub.type}
                  />
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </section>
      </div>
      <p className={styles.subheader}>
        <em>{data.subheader}</em>
      </p>
    </motion.div>
  )
}

export const getStaticProps = async () => getPageProps('publications')

export default Publications
