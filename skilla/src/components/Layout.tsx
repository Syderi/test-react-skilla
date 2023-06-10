import styles from './Layout.module.scss';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <section className={styles.content}>
        <Header />
      </section>
    </div>
  );
}

export default Layout;
