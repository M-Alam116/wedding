import "@/styles/globals.css";
import { useEffect, useState } from "react";
import Layout from "@/layout/Layout";
import Cookies from "js-cookie";

export default function App({ Component, pageProps, router }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const showHeaderAndFooter = ![
    "/signup",
    "/signup/signup",
    "/login",
    "/booking",
    "/booking/booking-confirm",
    "/payment",
    "/payment/payment-confirm",
  ].includes(router.pathname);

  const checkAuthentication = () => {
    const token = Cookies.get("accessToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthentication();

    const authPages = ["/login", "/signup", "/signup/signup"];
    if (isAuthenticated && authPages.includes(router.pathname)) {
      router.push("/");
    }
  }, [router.pathname, isAuthenticated]);

  return (
    <Layout showHeaderAndFooter={showHeaderAndFooter}>
      <Component {...pageProps} />
    </Layout>
  );
}
