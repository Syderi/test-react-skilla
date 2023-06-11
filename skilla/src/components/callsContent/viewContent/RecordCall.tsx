import { useEffect, useState, useRef } from 'react';
import styles from './RecordCall.module.scss';
import { URL_SKILLA } from '../../../utils/constants/constant';
import downloadRecord from '../../../assets/image/download_record.svg';
import closeRecord from '../../../assets/image/close_record.svg';
import playRecord from '../../../assets/image/play_record.svg';
import pauseRecord from '../../../assets/image/pause.svg';

interface IRecordCall {
  record: string;
  partnership_id: string;
  time: string;
  onClose: () => void;
}

function RecordCall({ record, partnership_id, time, onClose }: IRecordCall) {
  const [audioSrc, setAudioSrc] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

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
        setIsLoading(false);
        setAudioSrc(blobUrl);
      } catch (error) {
        throw new Error('Ошибка при выполнении запроса записи разговора:');
      }
    };

    fetchRecord();
  }, [record, partnership_id]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    let currentAudioRef = audioRef.current;

    if (currentAudioRef) {
      currentAudioRef.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (currentAudioRef) {
        currentAudioRef.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, []);

  const calculateProgressBarWidth = () => {
    if (audioRef.current) {
      const progress = (currentTime / audioRef.current.duration) * 100;
      return `${progress}%`;
    }
    return '0%';
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.recordWrapper} onClick={handleSliderClick}>
      <div className={styles.timeCall}>{time}</div>
      <audio ref={audioRef} src={audioSrc} />
      {isLoading ? (
        <div className={styles.timeCall} style={{ marginLeft: '10px' }}>
          Идет загрузка аудио...
        </div>
      ) : (
        <>

          <div className={styles.buttonWrapper} onClick={handlePlayPause}>
            <img
              src={isPlaying ? pauseRecord : playRecord}
              alt="Проигрывать плеер"
            />
          </div>
          <div className={styles.slider}>
            <div
              className={styles.progress}
              style={{ width: calculateProgressBarWidth() }}
            ></div>
          </div>
          <a className={styles.buttonWrapper} href={audioSrc} download>
            <img src={downloadRecord} alt="Скачать аудио" />
          </a>
          <div className={styles.buttonWrapper} onClick={onClose}>
            <img src={closeRecord} alt="Закрыть плеер" />
          </div>
        </>
      )}
    </div>
  );
}

export default RecordCall;
