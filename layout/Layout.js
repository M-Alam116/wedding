import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children, showHeaderAndFooter = true }) {
  return (
    <Fragment>
      {showHeaderAndFooter && <Header />}
      <main>{children}</main>
      {showHeaderAndFooter && <Footer />}
    </Fragment>
  );
}
