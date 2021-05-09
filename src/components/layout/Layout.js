import { React, Header, Footer } from "./";

function Layout(props) {
  return (
    <div className="container min-h-full w-full min-w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
