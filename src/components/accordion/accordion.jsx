import styles from './accordion.module.scss';
import { Children, isValidElement, cloneElement, useState } from 'react';

const Accordion = ({ children }) => {
  // This can hold a number or false
  const [sel, setSel] = useState(0);
  return (
    <div className={styles.accordion}>
      {Children.map(children, (child, i) => {
        if (isValidElement(child)) {
          const props = {
            index: i,
            open: sel === undefined ? i === 0 : sel === i,
            onSel: (v) => {
              setSel(v);
            },
          };
          return cloneElement(child, props);
        }

        return child;
      })}
    </div>
  );
};

export default Accordion;
