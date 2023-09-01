import Image from "next/image";
import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function BookingConfirm() {
  return (
    <div className="container">
      {/* =========== Top Gradient ============= */}
      <div className="flex flex-col items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[30px] font-[700] text-white text-center">
          BOOKING SUMMARY
        </h1>
        <Link href="/">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <BsFillArrowLeftCircleFill className="w-7 h-7 mx-auto mt-[10px]" />
            <p className="text-[18px] font-[600] mt-[7px]">Home</p>
          </div>
        </Link>
      </div>

      {/* ========== booking summary ========= */}
      <div className="flex gap-[20px] justify-between flex-col lg:flex-row py-[50px] px-[10px] md:px-[20px]">
        <div className="">
          <div className="my-[20px]">
            <label htmlFor="" className="text-[16px] font-[500]">
              BOOKING ON:{" "}
              <span className="text-primaryColor ml-[40px]">12/5/2024</span>
            </label>
            <div className="h-[2px] w-[300px] bg-gray-400 mt-[10px]"></div>
          </div>

          <div className="my-[20px]">
            <label htmlFor="" className="text-[16px] font-[500]">
              GUESTS: <span className="text-primaryColor ml-[40px]">350</span>
            </label>
            <div className="h-[2px] w-[300px] bg-gray-400 mt-[10px]"></div>
          </div>

          <div className="my-[20px]">
            <label htmlFor="" className="text-[16px] font-[500]">
              TIMING: <span className="text-primaryColor ml-[40px]">LUNCH</span>
            </label>
            <div className="h-[2px] w-[300px] bg-gray-400 mt-[10px]"></div>
          </div>

          <div className="my-[20px]">
            <label htmlFor="" className="text-[16px] font-[500]">
              MENU NAME:{" "}
            </label>
            <div className="h-[2px] w-[300px] bg-gray-400 mt-[10px]"></div>
          </div>

          <div className="my-[20px]">
            <label htmlFor="" className="text-[16px] font-[500]">
              SERVICES NAME:{" "}
            </label>
            <div className="h-[2px] w-[300px] bg-gray-400 mt-[10px]"></div>
          </div>

          <div className="flex justify-between gap-[20px]">
            <button>EDIT</button>
            <button className="btn">CONFIRM</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-[20px] md:gap-[50px]">
          <div className="">
            <Image
              src="/images/peshawarGatheringhall2.png"
              width={300}
              height={200}
              alt=""
            />
          </div>
          <div className="">
            <div className="">
              <h2 className="text-[18px] font-[600]">
                PESHAWAR GATHERING HALL
              </h2>
              <label
                htmlFor=""
                className="block text-[16px] font-[500] my-[5px]"
              >
                Meal (350x0) :{" "}
                <span className="text-primaryColor ml-[40px]">0.00</span>
              </label>
              <label
                htmlFor=""
                className="block text-[16px] font-[500] my-[5px]"
              >
                Hall Rent :{" "}
                <span className="text-primaryColor ml-[40px]">0.00</span>
              </label>
              <label
                htmlFor=""
                className="block text-[16px] font-[500] my-[5px]"
              >
                Services :{" "}
                <span className="text-primaryColor ml-[40px]">0.00</span>
              </label>
              <label
                htmlFor=""
                className="block text-[16px] font-[500] my-[5px]"
              >
                This Booking Total :{" "}
                <span className="text-primaryColor ml-[40px]">0.00</span>
              </label>
              <label
                htmlFor=""
                className="block text-[16px] font-[500] my-[5px]"
              >
                10% Booking Advance :{" "}
                <span className="text-primaryColor ml-[40px]">0.00</span>
              </label>

              <div className="my-[30px]">
                <div className="w-full h-[2px] bg-gray-300"></div>
                <h2 className="text-[18px] font-[600] my-[10px]">
                  GRAND TOTAL :{" "}
                  <span className="text-primaryColor ml-[40px]">0.00</span>
                </h2>
                <div className="w-full h-[2px] bg-gray-300"></div>
              </div>

              <div className="">
                <h2 className="text-[16px] font-[600] my-[10px]">
                  Discount :{" "}
                  <span className="text-primaryColor ml-[40px]">0.00</span>
                </h2>
                <h2 className="text-[16px] font-[600] my-[10px]">
                  Total Payable Amount :{" "}
                  <span className="text-primaryColor ml-[40px]">0.00</span>
                </h2>
              </div>

              <div className="">
                <p className="text-[16px] font-[500] text-primaryColor my-[5px]">
                  *Pay 10% Booking Advance to confirm your booking
                </p>
                <p className="text-[16px] font-[500] text-primaryColor my-[5px]">
                  *Extra hours services will be charged separately
                </p>
                <p className="text-[16px] font-[500] text-primaryColor my-[5px]">
                  *Excess number of guests may be charged separately
                </p>
                <p className="text-[16px] font-[500] text-primaryColor my-[5px]">
                  *Price of some services will be decided on venue
                </p>
                <p className="text-[16px] font-[500] text-primaryColor my-[5px]">
                  *Service charges applied on venue
                </p>
              </div>

              <div className="flex justify-center items-center mt-[40px]">
                <Link href="/payment">
                  <button className="btn">PLACE BOOKING</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
