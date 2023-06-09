
import { NavLink } from 'react-router-dom';
import { navItems } from '../../utils/constants/navData';
import './NavList.scss';

function NavList() {
  return (
    <>
      {navItems.map((nav) => (
        <NavLink className="navlist" to={nav.path} key={nav.id}>
          <div className="navlistLogo_left"/>
          <nav.logo className="navlistLogo" fill={'white'} fillOpacity={0.56} alt={nav.name} />
          <div>{nav.name}</div>
          <div className="navlistLogo_rigth"/>
        </NavLink>
      ))}
    </>
  );
}

export default NavList;
