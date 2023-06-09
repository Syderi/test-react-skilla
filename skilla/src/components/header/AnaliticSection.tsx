import ProgressIndicator from './ProgressIndicator';
import styles from './AnaliticSection.module.scss';

interface IAnaliticSectionProps {
  analitic: {
    id: number;
    title: string;
    result: string;
    colorResult: string;
    percentage: number;
    colorPercentage: string;
  };
}

function AnaliticSection({ analitic }: IAnaliticSectionProps) {
  return (
    <div>
      <p className={styles.analiticSection}>
        {analitic.title} <span style={{ color: analitic.colorResult }}>{analitic.result}</span>
      </p>
      <ProgressIndicator color={analitic.colorPercentage} width={`${analitic.percentage}px`} />
    </div>
  );
}

export default AnaliticSection;
