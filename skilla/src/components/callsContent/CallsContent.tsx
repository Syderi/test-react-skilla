import styles from './CallsContent.module.scss';
import FilterSection from './filterSection/FilterSection';
import InfoSection from './infoSection/InfoSection';
import ViewCintent from './viewCintent/ViewCintent';

function CallsContent() {
  return (
    <main className={styles.callsContent}>
      <InfoSection />
      <FilterSection />
      <ViewCintent />
    </main>
  );
}

export default CallsContent;
