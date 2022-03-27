import styles from './badgeGroup.module.scss'

const BadgeGroup = ({ badges }) => (
  <div className={styles.container}>
    {badges.map(({ text, link }) => {
      if (!link) {
        return <div className={styles.badge}>{text}</div>
      }
      return (
        <div className={styles.badge}>
          <a target='_blank' href={link}>
            {text}
          </a>
        </div>
      )
    })}
  </div>
)

export default BadgeGroup
