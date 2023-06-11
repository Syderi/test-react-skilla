import styles from './ViewContentHeader.module.scss';

function ViewContentHeader() {
  return (
    <div className={styles.viewContentHeader}>
      <div className={styles.check}></div>
      <h4>Тип</h4>
      <h4>Время</h4>
      <h4>Сотрутдник</h4>
      <h4>Звонок</h4>
      <h4>Источник</h4>
      <h4>Оценка</h4>
      <h4>Длительность</h4>
    </div>
  );
}

export default ViewContentHeader;
