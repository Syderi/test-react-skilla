import AllCalls from './filters/AllCalls';
import AllEmployees from './filters/AllEmployees';
import AllErrors from './filters/AllErrors';
import AllGrades from './filters/AllGrades';
import AllSources from './filters/AllSources';
import AllTypes from './filters/AllTypes';
import styles from './SelectFilters.module.scss';

function SelectFilters() {
  return (
    <div className={styles.selectFilters}>
      <AllTypes />
      <AllEmployees />
      <AllCalls />
      <AllSources />
      <AllGrades />
      <AllErrors />
    </div>
  );
}

export default SelectFilters;
