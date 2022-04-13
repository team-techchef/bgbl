import styles from './blockQuote.module.scss'
import Image from 'components/image/image'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const BlockQuote = ({ image, quote, book, author, location }) => (
  <blockquote className={`${styles.blockquote} ${image || styles.color}`}>
    {image && (
      <div className={styles['img-container']}>
        <Image src={image.src} alt={image.alt} />
      </div>
    )}
    <p>
      <span className={`${styles.quote} ${styles.left}`}>
        {author && author.length > 0 && <FaQuoteLeft />}
      </span>
      {quote}
      <span className={`${styles.quote} ${styles.right}`}>
        {author && author.length > 0 && <FaQuoteRight />}
      </span>
    </p>
    <footer>
      {author && author !== 'LAM' && <>- {author}</>}
      {book && (
        <>
          , <cite>{book}</cite>
        </>
      )}
      {location && (
        <>
          {' '}
          at{' '}
          <strong>
            <em>{location}</em>
          </strong>
        </>
      )}
    </footer>
  </blockquote>
)

export default BlockQuote
