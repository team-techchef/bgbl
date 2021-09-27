import Image from 'components/image/image';
import styles from './tileGroup.module.scss';

const TileGroup = ({ tiles = [] }) => {
  return (
    <div className={styles.group}>
      {tiles.map((v, i) => (
        <div key={`tile${i}`} className={styles.tile}>
          <div className={styles['img-container']}>
            <Image {...v.image} />
          </div>
          <div className={styles.content}>
            <div className={styles.name}>
              {v.name}
              <span className={styles.location}> from {v.location}</span>
            </div>
            <div className={styles.book}>
              <em>{v.book}</em>
            </div>
            {v.author && <div className={styles.author}>by {v.author}</div>}
            {v.book2 && (
              <>
                <div className={styles.book}>
                  <em>{v.book2}</em>
                </div>
                <div className={styles.author}>by {v.author2}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TileGroup;
