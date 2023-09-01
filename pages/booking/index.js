import Booking from "@/components/Booking/Booking";
import { Fragment } from "react";
import Head from "next/head";
export default function BookingPage() {
  return (
    <Fragment>
      <Head>
        <title>Booking Details</title>
      </Head>
      <Booking />
    </Fragment>
  );
}
