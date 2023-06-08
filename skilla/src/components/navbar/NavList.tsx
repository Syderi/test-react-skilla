import { ReactComponent as LogoResults } from '../../assets/image/results.svg';
import { ReactComponent as LogoOrders } from '../../assets/image/orders.svg';
import { NavLink } from 'react-router-dom';
import './NavList.scss';

const navItems = [
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
];

function NavList() {
  return (
    <>
      {navItems.map((nav) => (
        <NavLink className="navlist" to={nav.path} key={nav.id}>
          <nav.logo className="navlistLogo" fill={'white'} fillOpacity={0.56} alt={nav.name} />
          <div>{nav.name}</div>
        </NavLink>
      ))}
    </>
  );
}

export default NavList;
