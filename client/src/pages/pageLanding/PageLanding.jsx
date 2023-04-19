import "./pageLanding.css";
import React from "react";
import Home from "../home/Home";
import {
  Reviews,
  Address,
  About,
  ServicesLanding,
  Contact,
} from "../../components";

const PageLanding = () => {
  return (
    <div className="main">
      <Home />
      <Address />
      <About />
      <ServicesLanding />
      <Contact />
      <Reviews />
      <footer>Written By Menachem & DavidChen</footer>
    </div>
  );
};

export default PageLanding;
