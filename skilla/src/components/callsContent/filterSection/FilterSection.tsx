import styles from './FilterSection.module.scss';
import SearchFilter from './SearchFilter';
import SelectFilters from './SelectFilters';

function FilterSection() {
  return (
    <div className={styles.filterSection}>
      <SearchFilter />
      <SelectFilters />
    </div>
  );
}

export default FilterSection;
