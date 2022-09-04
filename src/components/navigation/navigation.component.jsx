import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
// import { ReacComponent as Logo } from '../../../public/assets/shared/logo.svg'

import './navigation.style.scss'

const Navigation = () => {
  const links = [
    {
      path: '/',
      name: 'Home',
      isActive: false,
    },
    {
      path: '/destination',
      name: 'Destination',
      isActive: false,
    },
    {
      path: '/crew',
      name: 'Crew',
      isActive: false,
    },
    {
      path: '/tech',
      name: 'Technology',
      isActive: false,
    }
  ]

  return (
    <Fragment>
      <div className="navigation-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="nav-links">
          {links && links.map((link, i) => {
          return (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "nav-link")}
            >
              0{i} {link.name}
            </NavLink>
          );
          })}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
