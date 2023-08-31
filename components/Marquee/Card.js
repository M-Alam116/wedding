import Image from "next/image";
import { GrInherit, GrLocation } from "react-icons/gr";
import { PiPersonFill } from "react-icons/pi";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
export default function Card({ marqueeData }) {
  const { title, location, capacity, image, totalPrice, pricePerHead } =
    marqueeData;

  return (
    <div className="flex flex-col gap-[20px] md:flex-row w-full bg-gray-100 shadow-xl mt-[20px]">
      <div className="flex justify-center md:justify-start w-full md:w-[300px]">
        <Image src={image} width={innerWidth} height={innerHeight} alt="" />
      </div>
      <div className="flex flex-col justify-center gap-[10px] p-[10px]">
        <h1 className="text-[20px] font-[600] text-center">{title}</h1>
        <div className="flex items-center gap-[10px]">
          <GrLocation className="w-8 h-8" />
          <p className="text-[16px] font-[500]">{location}</p>
        </div>

        <div className="flex items-center gap-[10px]">
          <PiPersonFill className="w-6 h-6" />
          <p className="text-[16px] font-[500]">{capacity} persons</p>
        </div>

        <h2 className="text-[16px] font-[600]">{totalPrice}</h2>

        <div className="flex justify-between gap-[10px]">
          <h2 className="text-[16px] font-[600]">{pricePerHead} per head</h2>
          <Stack spacing={1}>
            <Rating
              className="text-primaryColor"
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
          </Stack>
        </div>

        <button className="btn md:w-fit mt-[10px]">Book Now</button>
      </div>
    </div>
  );
}
