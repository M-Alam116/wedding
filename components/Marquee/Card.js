import Image from "next/image";
import data from "../../Data/marqueeDetails";
import { GrLocation } from "react-icons/gr";
import { PiPersonFill } from "react-icons/pi";
import Rating from "@mui/material/Rating";
export default function Card() {
  return (
    <div className="flex flex-col gap-[20px] md:flex-row w-full md:w-[45rem] bg-gray-100 shadow-xl">
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/peshawarGatheringhall.png"
          width={300}
          height={500}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center gap-[10px] p-[10px]">
        <h1 className="text-[20px] font-[600] text-center">
          Peshawar Gathering Hall
        </h1>
        <div className="flex items-center gap-[10px]">
          <GrLocation className="w-8 h-8" />
          <p className="text-[16px] font-[500]">
            Opp Gulbahar police station near Al Mansoor Hotel GT road, Pehsawar{" "}
          </p>
        </div>

        <div className="flex items-center gap-[10px]">
          <PiPersonFill className="w-6 h-6" />
          <p className="text-[16px] font-[500]">350-800 persons</p>
        </div>

        <h2 className="text-[16px] font-[600]">PKR.110000</h2>

        <div className="flex justify-between gap-[10px]">
          <h2 className="text-[16px] font-[600]">PKR.499-850 per head</h2>
          <Rating name="read-only" value={5} readOnly />
        </div>

        <button className="btn md:w-fit mt-[10px]">Book Now</button>
      </div>
    </div>
  );
}
