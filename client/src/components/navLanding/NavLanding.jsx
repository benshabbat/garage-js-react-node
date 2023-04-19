import React from "react";
// import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import Login from "../../pages/login/Login";
import { useState } from "react";
// import { Link } from "react-router-dom";
const NavLanding = ({ id }) => {
  const [openModel, setOpenModel] = useState(false);
  const handelClick = () => {
    setOpenModel(!openModel);
  };
  return (
    <>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#reviews">Reviews</a>
      </li>
      <li>
        <a href="#address">Address</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      {/* <li>
        <Link  to="/home">Home</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link to="/location">Location</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to={`/services/user/${id}`}>Services</Link>
      </li>
      <li>
        <Link to={`/messages/${id}`}>Contact</Link>
      </li> */}
      <li>
        <button onClick={handelClick}>Login</button>
        {openModel && <Login handelClick={handelClick} />}
      </li>
    </>
  );
};

export default NavLanding;
