import styles from './AddOrder.module.scss'
import Button from '../common/Button';
import pay from '../../assets/image/pay.svg';


function AddOrder() {
  return (
    <div>
      <Button>
        <p style={{marginLeft: '25px'}} className={styles.textButton}>Оплата</p>
        <img className={styles.imageButton} src={pay} alt="pay order" />
      </Button>
    </div>
  );
}

export default AddOrder;
