import styles from './ViewContent.module.scss';
import ViewContentHeader from './ViewContentHeader';

function ViewContent() {
  return (
    <div className={styles.viewContent}>
      <ViewContentHeader />
    </div>
  );
}

export default ViewContent;
