import styles from "./accNotice.module.scss";

const AccNotice = ({children}) => {
    return <div className={styles.accNotice}>{children}</div>
}

export default AccNotice