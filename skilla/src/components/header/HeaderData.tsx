import styles from './HeaderData.module.scss';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeDotAtEnd(str: string): string {
  return str.replace(/\.$/, '');
}

function HeaderData() {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  };
  const ruLocale = 'ru-RU';
  const formattedDate = date.toLocaleDateString(ruLocale, options);

  const weekday = capitalizeFirstLetter(formattedDate.split(',')[0]);
  const restOfDate = removeDotAtEnd(formattedDate.split(',')[1].trim());

  const formattedHeader = `${weekday}, ${restOfDate}`;

  return <div className={styles.headerData}>{formattedHeader}</div>;
}

export default HeaderData;
