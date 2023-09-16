import SignUpWithEmail from "@/components/Signup/SignUpWithEmail";
import { Fragment } from "react";
import Head from "next/head";
export default function SignUp() {
  return (
    <Fragment>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpWithEmail />
    </Fragment>
  );
}
