import styles from './AgentActive.module.scss';
import VectorHeader from './VectorHeader';

function AgentActive() {
  return (
    <div className={styles.agentActive}>
      <p className={styles.agentActiveTitle}>
        ИП Сидорова Александра Михайловна
      </p>
      <VectorHeader />
    </div>
  );
}

export default AgentActive;
