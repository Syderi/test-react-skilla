import { useEffect, useState, useRef } from 'react';
import styles from './RecordCall.module.scss';
import { URL_SKILLA } from '../../../utils/constants/constant';
import downloadRecord from '../../../assets/image/download_record.svg';
import closeRecord from '../../../assets/image/close_record.svg';
import playRecord from '../../../assets/image/play_record.svg';

interface IRecordCall {
  record: string;
  partnership_id: string;
  time: string;
}

function RecordCall({ record, partnership_id, time }: IRecordCall) {
  const [audioSrc, setAudioSrc] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    const headers = new Headers({
      Authorization: 'Bearer testtoken',
      'Content-type': 'audio/x-mpeg-3',
    });

    const fetchRecord = async () => {
      try {
        const response = await fetch(
          `${URL_SKILLA}/mango/getRecord?record=${record}&partnership_id=${partnership_id}`,
          {
            method: 'POST',
            headers,
          }
        );
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        setAudioSrc(blobUrl);

      } catch (error) {
        throw new Error('Ошибка при выполнении запроса записи разговора:');
      }
    };

    fetchRecord();
  }, [record, partnership_id]);

  return (
    <div className={styles.recordWrapper}>
      <div className={styles.timeCall}>{time}</div>
      <audio ref={audioRef} src={audioSrc} />
      <div className={styles.buttonWrapper}>
        <img src={playRecord} alt="Проигрывать плеер" />
      </div>
      <div className={styles.slider}>
        <div  className={styles.progress}></div>
      </div>
      <a className={styles.buttonWrapper} href={audioSrc} download>
        <img src={downloadRecord} alt="Скачать аудио" />
      </a>
      <div className={styles.buttonWrapper}>
        <img src={closeRecord} alt="Закрыть плеер" />
      </div>
    </div>
  );
}

export default RecordCall;
