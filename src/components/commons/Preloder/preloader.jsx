import preloader from '../../../img/preloader.gif';
import styles from './preloader.module.css';

const Preloader = props => {
	return <img className={styles.preloader} src={preloader} />;
};

export default Preloader;
