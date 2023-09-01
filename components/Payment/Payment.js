import { AiFillCreditCard } from "react-icons/ai";
import { FaCcPaypal, FaCcApplePay } from "react-icons/fa";
import Image from "next/image";
export default function Payment() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          PAYMENT
        </h1>
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

        <div className="flex mx-auto mt-[70px] w-[90%] md:w-[500px]">
          <Image
            src="/images/credit.png"
            width={innerWidth}
            height={innerHeight}
            alt=""
          />
        </div>

        <form className="mt-[50px] flex flex-col justify-center items-center gap-[20px]">
          <div className="w-full md:w-[500px] flex items-center justify-between gap-[30px]">
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

          <div className="w-full md:w-[500px] flex items-center justify-between gap-[30px]">
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

          <div className="w-full md:w-[500px] flex items-center justify-between gap-[30px]">
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

          <div className="w-full md:w-[500px] flex items-center justify-between gap-[30px]">
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
            <button className="btn mt-[20px]">PAY NOW</button>
          </div>
        </form>
      </div>
    </div>
  );
}
