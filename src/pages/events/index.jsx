import { getPageProps } from 'util/api'
import { motion } from 'framer-motion'
import { pageVariants } from 'util/motionVariants'
import styles from './events.module.scss'
import CardCta from 'components/cardCta/cardCta'
import BlockQuote from 'components/blockQuote/blockQuote'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import PlaceholderBlock from 'components/placeholderBlock/PlaceholderBlock'

const Events = ({ data }) => {
  const quotes = data?.reviews?.reviews?.map((v, i) => {
    return <BlockQuote key={`bp${i}`} {...v} />
  })

  return (
    <motion.div
      className={styles.layout}
      initial='initial'
      animate='enter'
      exit='exit'
      variants={pageVariants}
    >
      <h1 className='header-1'>{data?.header}</h1>
      {quotes[0] && quotes.shift()}
      <section>
        <h2 className='header-two'>{data?.upComingEvent?.title}</h2>

        {data?.upComingEvent?.events?.length > 0 ? (
          <div className={styles['card-container']}>
            {data?.upComingEvent?.events?.map((obj, i) => {
              return (
                <div>
                  <CardCta
                    key={i}
                    link={obj?.link}
                    key={`upComingEvent${i}`}
                    image={obj?.image}
                  >
                    <div>
                      <strong>{obj?.title}</strong>
                    </div>
                    <time>{obj?.date}</time> <span>{obj?.location}</span>
                    <a
                      className={styles['card-btn']}
                      href={obj?.link}
                      target='_blank'
                    >
                      Attend this Event
                    </a>
                    {obj?.details && (
                      <a
                        target='_blank'
                        href={obj?.details}
                        className={styles['card-btn']}
                      >
                        See Details
                      </a>
                    )}
                  </CardCta>
                </div>
              )
            })}
          </div>
        ) : (
          <PlaceholderBlock />
        )}
      </section>
      <section>
        <h2 className='header-two'>{data?.pastEvent?.title}</h2>
        {data?.pastEvent?.events?.length > 0 ? (
          <div className={styles['carousel-container']}>
            <Carousel showArrows={true}>
              {data?.pastEvent?.events?.map((obj, i) => {
                return (
                  <div>
                    <img
                      src={obj.image.src}
                      alt={obj.image.alt}
                      className={styles.carousel_image}
                    />
                    <p className='legend'>{obj.title}</p>
                  </div>
                )
              })}
            </Carousel>
          </div>
        ) : (
          <PlaceholderBlock />
        )}
      </section>
      <section>
        <h2 className='header-two'>{data?.reviews?.title}</h2>
        <div className={styles['block-section']}>{quotes}</div>
      </section>
    </motion.div>
  )
}

export const getStaticProps = async () => getPageProps('events')

export default Events
