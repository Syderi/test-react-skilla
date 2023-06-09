import styles from './ProgressIndicator.module.scss';

interface IProgressIndicatorProps {
  color: string;
  width: string;
}

function ProgressIndicator({ color, width }: IProgressIndicatorProps) {
  return (
    <div className={styles.progress}>
      <div
        className={styles.percentage}
        style={{ backgroundColor: color, width: width }}
      ></div>
    </div>
  );
}

export default ProgressIndicator;
