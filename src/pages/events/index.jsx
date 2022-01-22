import { getPageProps } from 'util/api'
import { useEffect, useState } from 'react'
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
                  <div className={styles['card-btn']}>Attend this Event</div>
                </CardCta>
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
                // return (
                //   <CardCta key={`pastEvents${i}`} image={obj?.image}>
                //     <div>
                //       <strong>{obj?.title}</strong>
                //     </div>
                //     <time>{obj?.date}</time> <span>{obj?.location}</span>
                //     <div className={styles['card-btn']}>View Past Event</div>
                //   </CardCta>
                // );
              })}
            </Carousel>
          </div>
        ) : (
          <PlaceholderBlock />
        )}
      </section>
      <section>
        <h2 className='header-two'>{data?.reviews?.title}</h2>
        <div className={styles['block-section']}>
          {quotes}
          {/* {data?.reviews?.reviews?.map((v, i) => {
            if (i === 0) setTopQuote(<BlockQuote key={`bp${i}`} {...v} />);
            else return <BlockQuote key={`bp${i}`} {...v} />;
          })} */}
        </div>
      </section>
    </motion.div>
  )
}

export const getStaticProps = async () => getPageProps('events')

export default Events
