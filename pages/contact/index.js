import Contact from "@/components/Contact/Contact";
import { Fragment } from "react";
import Head from "next/head";
export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact</title>
      </Head>
      <Contact />
    </Fragment>
  );
}
