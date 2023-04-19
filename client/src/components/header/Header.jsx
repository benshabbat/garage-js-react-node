import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavUser, NavLanding } from "../index";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  // const { _id } = useSelector((state) => state.user.user);

  return (
    <>
      <header className="header-container">
        <div className="logo">
          <Link to="/">Garage770</Link>
        </div>
        <ul>{user ? <NavUser /> : <NavLanding />}</ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
