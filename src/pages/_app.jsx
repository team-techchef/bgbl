import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Layout from 'components/layout/layout';
import 'themes/global.scss';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  // during build process these properties are null and can cause errors
  const { navLinks = [], data = {}, logoImage = {} } = pageProps;

  return (
    <ThemeProvider>
      <CSSReset />
      <Layout logoImage={logoImage} data={data} navLinks={navLinks}>
        <AnimatePresence initial={false} exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
