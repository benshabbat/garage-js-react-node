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
      <div className="item-nav">
        <a href="#home">Home</a>
      </div>
      <div className="item-nav">
        <a href="#reviews">Reviews</a>
      </div>
      <div className="item-nav">
        <a href="#address">Address</a>
      </div>
      <div className="item-nav">
        <a href="#about">About</a>
      </div>
      <div className="item-nav">
        <a href="#services">Services</a>
      </div>
      <div className="item-nav">
        <a href="#contact">Contact</a>
      </div>
      <div className="item-nav">
        <button onClick={handelClick}>Login</button>
        {openModel && <Login handelClick={handelClick} />}
      </div>
    </>
  );
};

export default NavLanding;
