import React from "react";
import "./../../scss/header.scss";
import { logo_with_text } from "../../assets";
import { Nav } from "./";
import { Link } from "gatsby";
import { LINKINPLACE } from '../../utils/router'
// import Example from "./MenuExample";
import NavTest from "./NavTest";

function Header(props) {
  return (
    <div className="flex flex-row items-center justify-between header-layout px-4 sm:px-10 xl:px-40">
      <div>
        <Link to={LINKINPLACE}>
          <img src={logo_with_text} alt="logo" className="logo" />
        </Link>
      </div>
      <Nav/>
      {/* <Example /> */}
      <NavTest/>
    </div>
  );
}


Header.propTypes = {};

export default Header;
