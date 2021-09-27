import styles from './accordionPanel.module.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  open: { opacity: 1, height: '640px' },
  collapsed: { opacity: 0, height: 0 },
};

const AccordionPanel = ({
  idx,
  index,
  title,
  children,
  open = false,
  onSel,
}) => (
  <>
    <button
      onClick={() => {
        onSel(open ? false : index);
      }}
      aria-expanded={open}
      className={styles['trigger']}
      aria-controls={`sect${idx}`}
      id={`accordion${idx}`}
    >
      <div className={styles['title']}>
        <span className={styles['icon']}>
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </span>
        {title}
      </div>
    </button>

    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          id={`sect${idx}`}
          role="region"
          aria-labelledby={`accordion${idx}`}
          className={styles.panel}
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={variants}
          transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default AccordionPanel;
