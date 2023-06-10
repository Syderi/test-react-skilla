import styles from './SearchFilter.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/image/search_icon.svg';

function SearchFilter() {
  return (
    <div className={styles.searchFilter}>
      <SearchIcon className={styles.searchIcon} />
      <p className={styles.searchTitle}>Поиск по звонкам</p>
    </div>
  );
}

export default SearchFilter;
