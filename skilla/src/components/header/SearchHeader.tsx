import styles from './SearchHeader.module.scss';
import searchImage from '../../assets/image/search_nav.svg';

function SearchHeader() {
  return (
    <div className={styles.searchHeader}>
      <img src={searchImage} alt="search"></img>
    </div>
  );
}

export default SearchHeader;
