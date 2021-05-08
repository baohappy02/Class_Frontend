import { React, Header, Footer } from "./";

function Layout(props) {
  return (
    <div className="sm:container w-full min-w-full">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
