import styles from './Header.module.scss';
import HeaderData from './HeaderData';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderData />
    </header>
  );
}

export default Header;
