import Cities from "@/components/Home/Cities";
import HeroSection from "@/components/Home/HeroSection";
import Services from "@/components/Home/Services";
import Working from "@/components/Home/Working";
import { Fragment } from "react";
import Head from "next/head";
import Testimonials from "@/components/Home/Testimonials";
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
      <Testimonials />
    </Fragment>
  );
}
