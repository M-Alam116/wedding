import Image from "next/image";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function PaymentConfirm() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex flex-col items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          PAYMENT
        </h1>
        <Link href="/">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <BsFillArrowLeftCircleFill className="w-7 h-7 mx-auto mt-[10px]" />
            <p className="text-[18px] font-[600] mt-[7px]">Home</p>
          </div>
        </Link>
      </div>

      {/* ========= payment confirm ========== */}
      <div className="py-[50px] px-[10px] md:px-[20px]">
        <h1 className="text-[22px] font-[600] text-textColor mb-[20px]">
          PAYMENT
        </h1>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[20px] font-[700] text-center">
            PAYMENT CONFIRMED
          </h1>
          <p className="text-[16px] font-[500] text-center">
            Hall Successfully Booked
          </p>
          <div className="w-[90%] md:w-[100] flex justify-center">
            <Image src="/images/payment.png" width={400} height={300} alt="" />
          </div>
          <h2 className="text-[18px] font-[600] text-center my-[30px]">
            confirmation of the booking is sent to your e-mail
          </h2>
          <Link href="/">
            <button className="btn">Back to HomePage</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
