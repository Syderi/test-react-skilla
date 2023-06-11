import { useEffect, useState } from 'react';
import { IResultCall } from '../../../Types/interface';
import { URL_SKILLA } from '../../../utils/constants/constant';
import styles from './ViewContent.module.scss';
import ViewContentHeader from './ViewContentHeader';
import ViewContentItem from './ViewContentItem';

const urlCalls = `${URL_SKILLA}/mango/getList`;

function ViewContent() {
  const [callsData, setCallsData] = useState<IResultCall[]>([]);

  useEffect(() => {
    const currentDate = new Date();
    const dateStart = new Date(currentDate.getTime() - 2 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split('T')[0];
    const dateEnd = currentDate.toISOString().split('T')[0];

    const headers = new Headers({
      Authorization: 'Bearer testtoken',
      'Content-Type': 'application/json',
    });

    const fetchData = async () => {
      try {
        const response = await fetch(urlCalls, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            date_start: dateStart,
            date_end: dateEnd,
          }),
        });
        const data = await response.json();
        console.log(data);
        setCallsData(data.results);

        // Дальнейшая обработка полученных данных
      } catch (error) {
        throw new Error('Ошибка при выполнении запроса:');
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.viewContent}>
      <ViewContentHeader />
      {callsData.length ? (
        callsData.map((call) => (
          <ViewContentItem key={call.id} callItem={call} />
        ))
      ) : (
        <h3 style={{fontSize: '3rem', textAlign: 'center'}}>Loading</h3>
      )}
    </div>
  );
}

export default ViewContent;
