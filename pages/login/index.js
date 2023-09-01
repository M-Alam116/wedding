import Login from "@/components/Login/Login";
import { Fragment } from "react";
import Head from "next/head";
export default function LoginPage() {
  return (
    <Fragment>
      <Head>
        <title>Log In</title>
      </Head>
      <Login />
    </Fragment>
  );
}
