import styles from './Balans.module.scss';
import addButton from '../../../assets/image/add_button.png';

function Balans() {
  return (
    <div className={styles.balans}>
      <p className={styles.text}>
        Баланс: <span className={styles.span}>272 ₽</span>
      </p>
      <img src={addButton} alt="add button" />
    </div>
  );
}

export default Balans;
