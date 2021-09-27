import styles from './profile.module.scss';
import Image from 'components/image/image';
import ReactMarkdown from 'react-markdown';

const Profile = ({ markup, image }) => (
  <div className={styles.profile}>
    <div className={styles['img-container']}>
      <Image src={image?.src} alt={image?.alt} />
    </div>
    <ReactMarkdown>{markup}</ReactMarkdown>
  </div>
);

export default Profile;
