import styles from "../styles/shared/loader.module.less";

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}>
                <img className={styles.gear} src="../src/assets/img/red/svg/main_gear.svg" alt="Loading..."/>
            </div>
        </div>
    );
};

export default Loader;