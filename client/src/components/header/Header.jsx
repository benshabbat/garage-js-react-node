import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavUser, NavLanding } from "../index";
import MyAccount from "../myAccount/MyAccount";
const Header = () => {
  const { user } = useSelector((state) => state.auth);
  // const { _id } = useSelector((state) => state.user.user);

  //   return (
  //     <>
  //       <nav className="header-container">
  //         <div className="logo">
  //           <Link to="/">Garage770</Link>
  //         </div>
  //         <div>{user ? <NavUser /> : <NavLanding />}</div>
  //       </nav>
  //       <Outlet />
  //     </>
  //   );
  // };

  // export default Header;
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Link to="/">Garage770</Link>
        </div>
        <div>{user ? <NavUser /> : <NavLanding />}</div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
