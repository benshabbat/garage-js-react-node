import "./myAccount.css";
import React,{useEffect} from "react";
import { logout, reset } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../features/user/userSlice";
const MyAccount = () => {
  const { _id } = useSelector((state) => state.auth.user);
  const { user} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  useEffect(() => {

    dispatch(getUser(_id));
  }, []);
  return (
    <>
      <button className="dropbtn">My Account</button>
      <div className="dropdown-content">
        <div>
          <Link to={`/account`}>{user?.username}</Link>
        </div>
        <div>
          <button onClick={onLogout}>LogOut</button>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
