import BookingConfirm from "@/components/Booking/BookingConfirm";
import { Fragment } from "react";
import Head from "next/head";
export default function BookingConfirmPage() {
  return (
    <Fragment>
      <Head>
        <title>Confirm Booking</title>
      </Head>
      <BookingConfirm />
    </Fragment>
  );
}
