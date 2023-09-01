import Link from "next/link";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
export default function Booking() {
  return (
    <div className="container">
      <div className="grid md:grid-cols-4">
        {/* ======= left gradient ========== */}
        <div className="col-span-1 w-full bgGradient h-[15rem] md:h-full flex flex-col justify-center items-center">
          <h1 className="secondaryFont heading text-[30px] font-[700] text-white text-center">
            DA WEDDING WHISPER
          </h1>
          <Link href="/">
          <div className="flex items-center gap-[10px] cursor-pointer">
            <BsFillArrowLeftCircleFill className="w-7 h-7 mx-auto mt-[10px]" />
            <p className="text-[18px] font-[600] mt-[7px]">Home</p>
          </div>
        </Link>
        </div>

        {/* ============ right form ========= */}
        <form className="col-span-1 flex flex-col items-center md:col-span-3 px-[10px] md:px-[20px] py-[50px]">
          <h1 className="secondaryFont text-[20px] font-[600]">
            BOOKING DETAILS
          </h1>
          <div className="flex flex-col">
            <label
              htmlFor="date"
              className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]"
            >
              BOOKING DATE:
            </label>
            <input
              type="date"
              id="date"
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="rent"
              className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]"
            >
              HALL RENT:
            </label>
            <input
              type="number"
              id="rent"
              min={0}
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="guest"
              className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]"
            >
              EXPECTED GUESTS:
            </label>
            <input
              type="number"
              id="guest"
              min={0}
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px]">
              SHIFT:
            </label>
            <select
              name=""
              id="shift"
              required
              className="bg-gray-200 rounded-sm border-none outline-none p-[10px] w-[300px]"
            >
              <option value="">Select</option>
              <option value="">Lunch</option>
              <option value="">Dinner</option>
            </select>
          </div>

          <p className="text-[16px] font-[500] my-[10px]">
            Check availability first*
          </p>

          <div className="mt-[40px]">
            <label className="text-primaryColor text-[16px] font-[500] mt-[20px] mb-[10px] block">
              PAID SERVICES
            </label>

            <div className="flex gap-[10px] items-center">
              <input type="checkbox" id="Sound" className="w-4 h-4" />
              <label htmlFor="Sound" className="text-[16px] font-[500]">
                DJ and Sound system
              </label>
            </div>

            <div className="flex gap-[10px] items-center">
              <input type="checkbox" id="Theme" className="w-4 h-4" />
              <label htmlFor="Theme" className="text-[16px] font-[500]">
                Theme Decoration
              </label>
            </div>

            <div className="flex gap-[10px] items-center">
              <input type="checkbox" id="Generator" className="w-4 h-4" />
              <label htmlFor="Generator" className="text-[16px] font-[500]">
                Backup Generator
              </label>
            </div>
          </div>

          <div className="mt-[30px]">
            <Link href="/booking/booking-confirm">
              <button className="btn">NEXT</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
