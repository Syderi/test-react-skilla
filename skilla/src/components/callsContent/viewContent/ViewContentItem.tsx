import styles from './ViewContentItem.module.scss';
import call_dawn from '../../../assets/image/call_dawn.png';
import call_out from '../../../assets/image/call_out.png';
import noavatar from '../../../assets/image/noavatar.jpg';
import { IResultCall } from '../../../Types/interface';
import { formatDuration } from '../../../utils/formatDuration';
import ButtonGrade from '../../common/ButtonGrade';

const ImagePathsCalls = {
  0: call_out, // исходящий звонок
  1: call_dawn, // входящий звонок
};

interface IViewContentItemProps {
  callItem: IResultCall;
}

function ViewContentItem({ callItem }: IViewContentItemProps) {
  const {
    in_out,
    date,
    person_avatar,
    from_number,
    to_number,
    contact_name,
    contact_company,
    source,
    errors,
    time,
  } = callItem;

  console.log(errors)

  return (
    <div className={styles.viewContentHeader}>
      <div className={styles.check}>{callItem.id}</div>
      <div>
        <div className={styles.typeCallWrapper}>
          <img
            src={!in_out ? ImagePathsCalls[0] : ImagePathsCalls[1]}
            alt="type call"
          />
        </div>
      </div>
      <div className={styles.timeCall}>{date.slice(11, 16)}</div>
      <div className={styles.worker}>
        <img src={person_avatar || noavatar} alt="worker" />
      </div>
      <div className={styles.timeCall}>
        {contact_name || (!!in_out ? from_number : to_number)}{' '}
        <span className={styles.contactCompany}>{contact_company}</span>
      </div>
      <div className={styles.source}>{source}</div>
      <div className={styles.grade}>{errors[0] ? errors[0] : <ButtonGrade />}</div>
      <div className={styles.timeCall}>{formatDuration(time)}</div>
    </div>
  );
}

export default ViewContentItem;
