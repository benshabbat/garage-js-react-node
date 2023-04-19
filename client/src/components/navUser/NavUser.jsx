import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
const NavUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <>
      <li>
        <Link to={`/services/user`}>Services</Link>
      </li>
      <li>
        <Link to={`/account`}>Account</Link>
      </li>
      <li>
        <Link to={`/messages`}>Messages</Link>
      </li>
      {/* <li>
        <Link to={`/services/req/${carId}`}>
          <ReqService />
        </Link>
      </li> */}
      <li>
        <button className="" onClick={onLogout}>
          LogOut
        </button>
      </li>
    </>
  );
};

export default NavUser;
