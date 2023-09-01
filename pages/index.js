import Cities from "@/components/Home/Cities";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Working from "@/components/Home/Working";
import { Fragment } from "react";
import Head from "next/head";
export default function HomePage() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
      </Head>
      <HeroSection />
      <Cities />
      <Working />
      <Services />
    </Fragment>
  );
}
