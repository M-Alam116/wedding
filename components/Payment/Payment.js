import { AiFillCreditCard } from "react-icons/ai";
import { FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
export default function Payment() {
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

      {/* ========== payment ============ */}
      <div className="py-[50px] px-[10px] md:px-[20px]">
        <h1 className="text-[22px] font-[600] text-textColor mb-[20px]">
          PAYMENT
        </h1>
        <div className="flex justify-around ">
          <AiFillCreditCard className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer" />
          <FaCcApplePay className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer" />
          <FaCcPaypal className="w-[70px] h-[70px] md:w-[100px] md:h-[100px] cursor-pointer" />
        </div>

        <div className="flex justify-center items-center mx-auto mt-[70px] w-[90%] md:w-[500px]">
          <Image src="/images/credit.png" width={500} height={300} alt="" />
        </div>

        <form className="mt-[50px] flex flex-col justify-center items-center gap-[20px]">
          <div className="w-full md:w-[500px] flex flex-col md:flex-row items-center justify-between gap-[30px]">
            <label htmlFor="" className="text-[16px] font-[600]">
              CREDIT HOLDER:
            </label>
            <input
              type="text"
              placeholder="Name"
              required
              className="border-none outline-none p-[10px] bg-gray-200"
            />
          </div>

          <div className="w-full md:w-[500px] flex flex-col md:flex-row items-center justify-between gap-[30px]">
            <label htmlFor="" className="text-[16px] font-[600]">
              CREDIT NUMBER:
            </label>
            <input
              type="text"
              placeholder="Credit Number"
              required
              className="border-none outline-none p-[10px] bg-gray-200"
            />
          </div>

          <div className="w-full md:w-[500px] flex flex-col md:flex-row items-center justify-between gap-[30px]">
            <label htmlFor="" className="text-[16px] font-[600]">
              EXPIRE DATE:
            </label>
            <input
              type="text"
              placeholder="Expire Date"
              required
              className="border-none outline-none p-[10px] bg-gray-200"
            />
          </div>

          <div className="w-full md:w-[500px] flex flex-col md:flex-row items-center justify-between gap-[30px]">
            <label htmlFor="" className="text-[16px] font-[600]">
              CVV:
            </label>
            <input
              type="number"
              placeholder="CVV"
              required
              className="border-none outline-none p-[10px] bg-gray-200"
            />
          </div>
          <div className="">
            <Link href="/payment/payment-confirm">
              <button className="btn mt-[20px]">PAY NOW</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
