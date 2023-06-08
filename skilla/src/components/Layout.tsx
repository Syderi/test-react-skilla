import { BrowserRouter } from 'react-router-dom';
import styles from './Layout.module.scss';
import Navbar from './navbar/Navbar';

function Layout() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Navbar />
      </div>
    </BrowserRouter>
  );
}

export default Layout;
