import AgentActive from './AgentActive';
import AgentAvatar from './AgentAvatar';
import AnaliticHeader from './AnaliticHeader';
import styles from './Header.module.scss';
import HeaderData from './HeaderData';
import SearchHeader from './SearchHeader';

function Header() {
  return (
    <header className={styles.header}>
      <HeaderData />
      <AnaliticHeader />
      <SearchHeader />
      <AgentActive />
      <AgentAvatar />
    </header>
  );
}

export default Header;
