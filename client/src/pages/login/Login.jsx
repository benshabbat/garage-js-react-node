import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner";
import CancelIcon from "@mui/icons-material/Cancel";
import "./login.css";

const Login = ({ handelClick }) => {
  const [formData, setFormData] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) toast.error(message);
    if (isSuccess || user) navigate("/account");
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };
  const labelData = (name, type) => {
    return (
      <label className="login-label">
        <span className="title-label">{name}</span>
        <input
          placeholder="UserName for the user"
          className="form-control"
          type={type}
          name={name}
          onChange={handleChange}
          required
        />
      </label>
    );
  };
  if (isLoading) return <Spinner />;
  return (
    <div className="login-background">
      <div className="login-container">
        <form className="login-form" onSubmit={onSubmit}>
        <CancelIcon onClick={handelClick} className="review-close" />
          <h1 className="header">Login</h1>
          {labelData("username", "text")}
          {labelData("password", "password")}
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
