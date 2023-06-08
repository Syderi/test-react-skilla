import styles from './Layout.module.scss';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
    </div>
  );
}

export default Layout;
