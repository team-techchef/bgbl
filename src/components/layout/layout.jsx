import Head from 'next/head';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './layout.module.scss';
import { useRouter } from 'next/router';

const Layout = ({ data, logoImage, navLinks, children }) => {
  const { title = '', description = '' } = data;
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="next,sean,panda"></meta>
        <link rel="canonical" href={router.pathname}></link>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </Head>
      <Header logoImage={logoImage} navLinks={navLinks} />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
