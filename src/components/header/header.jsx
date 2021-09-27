import Link from 'next/link';
import styles from './header.module.scss';
import DrawerMenu from 'components/drawerMenu/drawerMenu';
import { useRef } from 'react';
import { useDisclosure } from '@chakra-ui/core';
import { IoIosMenu } from 'react-icons/io';
import { useRouter } from 'next/router';

const HeaderListItems = ({ navLinks = [] }) => {
  const router = useRouter();
  return navLinks.map(({ href, name }) => (
    <li key={name}>
      <Link href={href} scroll={false}>
        <a
          className={
            (styles.btn,
            `${router.pathname === href ? styles['selected-page'] : ''}`)
          }
        >
          {name}
        </a>
      </Link>
    </li>
  ));
};

const Header = ({ logoImage, navLinks = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <header className={styles['main-header']} role="banner">
        <div className={styles['inner-container']}>
          <div className={styles.logo}>
            <Link href={'/'} scroll={false}>
              <a>
                <img src={logoImage?.src} alt={logoImage?.alt} />
              </a>
            </Link>
          </div>
          <nav className={styles['nav-container']} role="navigation">
            <button
              className={`${styles.btn} ${styles['toggle-menu']}`}
              ref={btnRef}
              onClick={onOpen}
            >
              <IoIosMenu />
              <div className={styles['sub-text']}>menu</div>
            </button>
            <ol className={styles.list}>
              <HeaderListItems navLinks={navLinks} />
            </ol>
          </nav>
        </div>
      </header>
      <DrawerMenu btnRef={btnRef} isOpen={isOpen} onClose={onClose}>
        <ol className={styles['drawer-list']}>
          <HeaderListItems navLinks={navLinks} />
        </ol>
      </DrawerMenu>
    </>
  );
};

export default Header;
