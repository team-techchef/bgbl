import Image from 'components/image/image'
import styles from './cardCta.module.scss'
import { forwardRef } from 'react'

const CardCta = forwardRef(({ image, text, children, link }) => (
  <a target='_blank' className={styles.link} href={link}>
    <figure className={styles.card}>
      <div className={styles['img-container']}>
        <Image {...image} />
      </div>
      <figcaption>
        {text}
        {children}
      </figcaption>
    </figure>
  </a>
))

export default CardCta
