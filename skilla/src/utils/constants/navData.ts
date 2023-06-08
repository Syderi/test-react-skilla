import { ReactComponent as LogoResults } from '../../assets/image/results.svg';
import { ReactComponent as LogoOrders } from '../../assets/image/orders.svg';
import { ReactComponent as LogoMail } from '../../assets/image/mail_outline-24px.svg';
import { ReactComponent as LogoCalls } from '../../assets/image/calls-24px.svg';
import { ReactComponent as LogoPeople } from '../../assets/image/contr-people-24px.svg';
import { ReactComponent as LogoDocuments } from '../../assets/image/documents-24px.svg';
import { ReactComponent as LogoPermIdentity } from '../../assets/image/perm_identity_24dp.svg';
import { ReactComponent as LogoBriefcaseOutline } from '../../assets/image/briefcase-outline.svg';
import { ReactComponent as LogoLibrary } from '../../assets/image/local_library_black_24dp.svg';
import { ReactComponent as LogoSettings } from '../../assets/image/settings-24px.svg';

export const navItems = [
  {
    id: 1,
    name: 'Итоги',
    path: '/results',
    logo: LogoResults,
  },
  {
    id: 2,
    name: 'Заказы',
    path: '/orders',
    logo: LogoOrders,
  },
  {
    id: 3,
    name: 'Сообщения',
    path: '/mails',
    logo: LogoMail,
  },
  {
    id: 4,
    name: 'Звонки',
    path: '/calls',
    logo: LogoCalls,
  },
  {
    id: 5,
    name: 'Контрагенты',
    path: '/people',
    logo: LogoPeople,
  },
  {
    id: 6,
    name: 'Документы',
    path: '/documents',
    logo: LogoDocuments,
  },
  {
    id: 7,
    name: 'Исполнители',
    path: '/permidentity',
    logo: LogoPermIdentity,
  },
  {
    id: 8,
    name: 'Отчеты',
    path: '/briefcaseoutline',
    logo: LogoBriefcaseOutline,
  },
  {
    id: 9,
    name: 'База знаний',
    path: '/library',
    logo: LogoLibrary,
  },
  {
    id: 10,
    name: 'Настройка',
    path: '/settings',
    logo: LogoSettings,
  },
];
