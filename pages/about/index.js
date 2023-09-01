import About from "@/components/About/About";
import { Fragment } from "react";
import Head from "next/head";
export default function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Us</title>
      </Head>
      <About />
    </Fragment>
  );
}
