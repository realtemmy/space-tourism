import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/shared/logo.svg";
import { ReactComponent as Hamburger } from "../../assets/shared/icon-hamburger.svg";
import { ReactComponent as CloseBtn } from "../../assets/shared/icon-close.svg";
// import { DataContext } from "../../contexts/data-context";

import "./navigation.style.scss";
import { useState } from "react";

const Navigation = () => {
  // const { toggleState, setToggleState } = useContext(DataContext)
  const [ toggleState, setToggleState ] = useState(false);
  

  const links = [
    {
      path: "/",
      name: "Home",
      isActive: false,
    },
    {
      path: "/destination",
      name: "Destination",
      isActive: false,
    },
    {
      path: "/crew",
      name: "Crew",
      isActive: false,
    },
    {
      path: "/tech",
      name: "Technology",
      isActive: false,
    },
  ];


  // console.log('this is window width', window.innerWidth);
  window.addEventListener('resize', () => {
     window.innerWidth > 525 ? setToggleState(true) : setToggleState(false);
  })

  // window.innerWidth > 525 ? setToggleState(false) : setToggleState(true)
  // useEffect(() => {
  //   console.log(windowWidth);
  //   if (windowWidth >= 525) {
  //     setToggleState(true);
  //   } else {
  //     setToggleState(false);
  //   }
  // }, [windowWidth]);

  return (
    <Fragment>
      <div className="navigation-container">
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="toggle-container" onClick={() => setToggleState(!toggleState)}>
          {
            !toggleState ? <Hamburger className="hamburger" /> :<CloseBtn className="close-btn" />
          }
          
        </div>
        <div className={toggleState ? "nav-links" : ""}>
          {toggleState &&
            links.map((link, i) => {
              return (
                <NavLink
                  key={i}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "nav-link"
                  }
                >
                  <span className="nav-num">0{i} </span> {link.name}
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
