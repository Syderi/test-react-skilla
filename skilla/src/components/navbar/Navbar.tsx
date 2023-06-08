import styles from './Navbar.module.scss';
import logo from '../../assets/image/logo skilla.svg';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} alt="logo"></img>
    </div>
  );
}

export default Navbar;
