import "./navUser.css";
import React, { useCallback, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import MyAccount from "../myAccount/MyAccount";
// import MyAccount from "../myAccount/MyAccount";
const NavUser = () => {
  // const [showAccount, setShowAccount] = useState(false);
  // const toggleAccount = useCallback(() => {
  //   setShowAccount((current) => !current);
  // }, []);

  return (
    <>
      <div className="item-nav">
        <Link to={`/services/user`}>Services</Link>
      </div>
      <div className="item-nav">
        <Link to={`/account`}>Account</Link>
      </div>
      <div className="item-nav">
        <Link to={`/messages`}>Messages</Link>
      </div>
      <div className="item-nav dropdown">
        <MyAccount />
      </div>
    </>
  );
};

export default NavUser;
