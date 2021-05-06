import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="container w-full min-w-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
