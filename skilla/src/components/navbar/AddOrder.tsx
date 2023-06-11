import styles from './AddOrder.module.scss'
import Button from '../common/Button';
import addOrder from '../../assets/image/add_order.svg';


function AddOrder() {
  return (
    <div>
      <Button>
        <p className={styles.textButton}>Добавить заказ</p>
        <img className={styles.imageButton} src={addOrder} alt="add order" />
      </Button>
    </div>
  );
}

export default AddOrder;
