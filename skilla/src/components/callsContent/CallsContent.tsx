import styles from './CallsContent.module.scss';
import FilterSection from './filterSection/FilterSection';
import InfoSection from './infoSection/InfoSection';
import ViewContent from './viewContent/ViewContent';


function CallsContent() {
  return (
    <main className={styles.callsContent}>
      <InfoSection />
      <FilterSection />
      <ViewContent />
    </main>
  );
}

export default CallsContent;
