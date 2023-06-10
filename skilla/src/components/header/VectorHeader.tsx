import styles from './VectorHeader.module.scss';
import vectorArrowDown from '../../assets/image/vector_arrow_down.svg';

function VectorHeader() {
  return (
    <div className={styles.wrapperVector}>
      <img src={vectorArrowDown} alt="vector" />
    </div>
  );
}

export default VectorHeader;
