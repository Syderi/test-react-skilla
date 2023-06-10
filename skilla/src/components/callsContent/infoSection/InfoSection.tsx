import styles from './InfoSection.module.scss'
import Balans from './Balans';
import DataSelect from './DataSelect';

function InfoSection() {
  return (
    <div className={styles.infosection}>
      <Balans />
      <DataSelect />
    </div>
  );
}

export default InfoSection;
