import styles from './CallsContent.module.scss';
import FilterSection from './filterSection/FilterSection';
import InfoSection from './infoSection/InfoSection';

function CallsContent() {
  return (
    <main className={styles.callsContent}>
      <InfoSection />
      <FilterSection />
    </main>
  );
}

export default CallsContent;
