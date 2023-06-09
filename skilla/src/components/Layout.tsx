import { BrowserRouter } from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './header/Header';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Navbar />
        <section className={styles.content}>
          <Header />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
