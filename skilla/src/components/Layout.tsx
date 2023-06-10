import styles from './Layout.module.scss';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import CallsContent from './callsContent/CallsContent';

function Layout() {
  return (
    <div className={styles.layout}>
      <Navbar />
      <section className={styles.content}>
        <Header />
        <CallsContent />
      </section>
    </div>
  );
}

export default Layout;
