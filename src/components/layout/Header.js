import React from "react";
import { Link } from "gatsby";
import Nav from "./Nav";

function Header(props) {
  return (
    <div className="flex flex-row items-center justify-between h-16 px-4 sm:px-10 xl:px-40">
      <button className="p-3 border rounded-full font-medium text-lg bg-green-400 hover:bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
      leading-4-5 font-semibold text-custom-text-black hover:text-indigo-800
      ">
        <Link to="/">Register Page</Link>
      </button>
      <Nav/>
    </div>
  );
}


Header.propTypes = {};

export default Header;
