import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout({ children, showHeaderAndFooter = true }) {
  return (
    <Fragment>
      {showHeaderAndFooter && <Header />}
      <main>{children}</main>
      {showHeaderAndFooter && <Footer />}
    </Fragment>
  );
}
