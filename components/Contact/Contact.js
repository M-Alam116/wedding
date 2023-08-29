import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          CALL ME BACK
        </h1>
      </div>

      <div className="py-[5rem] px-[5px]">
        <p className="text-[20px] font-[500] text-textColor text-center">
          Let us know and we will call you back as soon as possible!
        </p>
      </div>

      {/* ======== Contact Form ======= */}
      <div className="grid items-center grid-cols-1 md:grid-cols-4 bg-grayBg px-[5px] py-[50px] md:px-[20px] gap-[20px] lg:gap-[50px]">
        <div className="col-span-1 order-2 md:order-1 mt-[50px] md:mt-[0px]">
          <h1 className="text-[20px] font-[500] text-textColor mb-[20px] text-center">
            "Is there anything you need support with?"
          </h1>
          <div className="flex items-center justify-center gap-[15px]">
            <Link href="/">
              <AiFillTwitterCircle className="w-10 h-10 text-primaryColor cursor-pointer" />
            </Link>
            <Link href="/">
              <BsFacebook className="w-9 h-9 text-primaryColor cursor-pointer" />
            </Link>
            <Link href="/">
              <BsInstagram className="w-8 h-8 text-primaryColor cursor-pointer" />
            </Link>
            <Link href="/">
              <BsLinkedin className="w-8 h-8 text-primaryColor cursor-pointer" />
            </Link>
          </div>
        </div>

        <form className="col-span-3 lg:px-[30px] order-1 md:order-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-[500] my-[5px]">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                required
                className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-[18px] font-[500] my-[5px]">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                required
                className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-[500] my-[5px]">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-[500] my-[5px]">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone Number"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE]"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="" className="text-[18px] font-[500] my-[5px]">
              Notes
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] resize-none"
            ></textarea>
          </div>

          <button className="btn rounded-full mt-[20px]">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
