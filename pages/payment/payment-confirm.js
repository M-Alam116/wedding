import PaymentConfirm from "@/components/Payment/PaymentConfirm";
import { Fragment } from "react";
import Head from "next/head";
export default function PaymentConfirmPage() {
  return (
    <Fragment>
      <Head>
        <title>Confirm Payment</title>
      </Head>
      <PaymentConfirm />
    </Fragment>
  );
}
