import styles from './CallsContent.module.scss';
import InfoSection from './infoSection/InfoSection';

function CallsContent() {
  return (
    <main className={styles.callsContent}>
      <InfoSection />
    </main>
  );
}

export default CallsContent;
