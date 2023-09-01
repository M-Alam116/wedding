import SignUp from "@/components/Signup/SignUp";
import { Fragment } from "react";
import Head from "next/head";
export default function SignUpPage() {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUp />
    </Fragment>
  );
}
