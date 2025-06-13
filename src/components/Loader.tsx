import styles from "../styles/shared/loader.module.less";
import gearImg from "../../src/assets/img/red/svg/main_gear.svg"

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}>
                <img className={styles.gear} src={gearImg} alt="Loading..."/>
            </div>
        </div>
    );
};

export default Loader;