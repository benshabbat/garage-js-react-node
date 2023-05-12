import "./header.css";
import { Link, Outlet } from "react-router-dom";
import { MyAccount, NavAdmin, NavUser, NavLanding } from "../index";

const Header = ({ userAuth = null, user = null }) => {
  if (userAuth && user?.isAdmin === undefined) {
    return null;
  }
  return (
    <>
      <div className="main-header">
        <div className="navbar">
          <div className="logo">
            <Link to="/">Garage770</Link>
          </div>
          {console.log(user?.isAdmin)}
          {console.log(userAuth)}
          <div>
            {!userAuth || user?.isAdmin === undefined ? (
              <NavLanding />
            ) : (
              <>
                {!!user.isAdmin ? <NavAdmin /> : <NavUser />}
                <div className="item-nav">
                  <Link to={`/messages`}>Messages</Link>
                </div>
                <div className="item-nav dropdown">
                  <MyAccount user={user} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
