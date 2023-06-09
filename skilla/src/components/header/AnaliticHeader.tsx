import { analiticItems } from '../../utils/constants/analiticData';
import styles from './AnaliticHeader.module.scss';
import AnaliticSection from './AnaliticSection';

function AnaliticHeader() {
  return (
    <div className={styles.analiticHeader}>
      {analiticItems.map((analitic) => (
        <AnaliticSection key={analitic.id} analitic={analitic} />
      ))}
    </div>
  );
}

export default AnaliticHeader;
