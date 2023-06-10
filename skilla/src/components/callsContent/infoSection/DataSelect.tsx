import styles from './DataSelect.module.scss';
import { ReactComponent as LeftArrow } from '../../../assets/image/vector_arrow_left.svg';
import { ReactComponent as RightArrow } from '../../../assets/image/vector_arrow_right.svg';
import { ReactComponent as CalendarIcon } from '../../../assets/image/icon-calendar.svg';

function DataSelect() {
  return (
    <div className={styles.dataSelect}>
      <div className={styles.wrappLeftArrow}>
        <LeftArrow className={styles.arrow} />
      </div>
      <CalendarIcon className={styles.calendarIcon}/>
      <p className={styles.changeDate}>3 дня</p>
      <div className={styles.wrappRightArrow}>
        <RightArrow className={styles.arrow} />
      </div>
    </div>
  );
}

export default DataSelect;
