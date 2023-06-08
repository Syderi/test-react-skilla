import styles from './Navbar.module.scss';

import { ReactComponent as Logo } from '../../assets/image/logo_skilla.svg';

import { COLOR_LOGO } from '../../utils/constants/constant';
import NavList from './NavList';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo className={styles.logo} fill={COLOR_LOGO} alt="logo" />
      <NavList />
    </div>
  );
}

export default Navbar;
