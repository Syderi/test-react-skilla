import styles from './Filters.module.scss';
import { ReactComponent as ArrowDown } from '../../../../assets/image/vector_arrow_down.svg';

function AllGrades() {
  return (
    <div className={styles.filterWrapper}>
      <p className={styles.filterText}>Все оценки</p>
      <div className={styles.arrowWrapper}>
        <ArrowDown style={{ width: '10px', height: '6px' }} />
      </div>
    </div>
  );
}

export default AllGrades;
