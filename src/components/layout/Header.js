import React from "react";
import "./../../scss/layout.scss";
import { logo_with_text } from "../../assets";
import Nav from "./Nav";

function Header(props) {
  return (
    <div className="flex flex-row items-center justify-between layout-container px-40">
      <div>
        <img src={logo_with_text} alt="logo" className="logo" />
      </div>
      <Nav />
    </div>
  );
}

Header.propTypes = {};

export default Header;
