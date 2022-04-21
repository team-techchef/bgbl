import Image from 'components/image/image'
import styles from './cardCta.module.scss'
import { forwardRef } from 'react'

const CardCta = forwardRef(({ image, text, children }) => {
  image = { ...image, isEvent: true }
  return (
    <figure className={styles.card}>
      {image && (
        <div className={styles['img-container']}>
          <Image {...image} />
        </div>
      )}
      <figcaption>
        {text}
        {children}
      </figcaption>
    </figure>
  )
})

export default CardCta
