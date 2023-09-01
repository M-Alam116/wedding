import Payment from "@/components/Payment/Payment";
import { Fragment } from "react";
import Head from "next/head";
export default function PaymentPage() {
  return (
    <Fragment>
      <Head>
        <title>Payment</title>
      </Head>
      <Payment />
    </Fragment>
  );
}
