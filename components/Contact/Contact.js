import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container">
      <div className="bg-secondaryBg py-[2rem]">
        <h1 className="text-[28px] font-[600] text-primaryColor text-center">
          Reach Out Us
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 py-[30px] gap-[5rem] lg:gap-[10px]">
        {/* ========= contact info ============ */}
        <div className="flex flex-col items-center justify-center order-2 lg:order-1">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-[2rem]">
            <div className="bg-primaryColor flex flex-col justify-center items-center max-w-[250px] w-[98%] px-[10px] py-[20px] rounded-[15px]">
              <AiOutlineMail className="h-7 w-9 text-white" />
              <h2 className="text-[16px] font-[500] text-white">Email us</h2>
              <p className="text-[14px] font-[500] text-white mt-[10px]">
                daweddingwhisper@gmail.com
              </p>
            </div>
            <div className="bg-primaryColor flex flex-col justify-center items-center max-w-[250px] w-[95%] px-[10px] py-[20px] rounded-[15px]">
              <FiPhoneCall className="h-7 w-9 text-white" />
              <h2 className="text-[16px] font-[500] text-white">Call us</h2>
              <p className="text-[14px] font-[500] text-white mt-[10px]">
                +92 348 1856617
              </p>
            </div>
          </div>

          <div className="mt-[4rem]">
            <h1 className="text-[28px] font-[500] text-primaryColor text-center">
              Follow us on
            </h1>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[1rem] justify-center mt-[4rem]">
              <Link
                href="https://instagram.com/daweddingwhisper?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <div className="bg-primaryColor flex justify-between items-center gap-[10px] p-[10px] rounded-[15px]">
                  <BsInstagram className="w-7 h-7 text-white" />
                  <span className="text-[14px] text-white">
                    daweddingwhisper
                  </span>
                </div>
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=100091511314699&mibextid=ZbWKwL"
                target="_blank"
              >
                <div className="bg-primaryColor flex justify-between items-center gap-[10px] p-[10px] rounded-[15px]">
                  <BsFacebook className="w-7 h-7 text-white" />
                  <span className="text-[14px] text-white">
                    daweddingwhisper
                  </span>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/company/da-wedding-whisper?originalSubdomain=pk"
                target="_blank"
              >
                <div className="bg-primaryColor flex justify-between items-center gap-[10px] p-[10px] rounded-[15px]">
                  <BsLinkedin className="w-7 h-7 text-white" />
                  <span className="text-[14px] text-white">
                    daweddingwhisper
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ======== form ============= */}
        <div className="flex justify-center items-center mx-auto border-none shadow-2xl rounded-[20px] max-w-[600px] w-[98%] order-1 lg:order-2">
          <form className="w-full py-[1.5rem] px-[2rem]">
            <div className="flex justify-between sm:gap-[3rem] flex-col sm:flex-row">
              <div className="flex flex-col w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
                >
                  Your Name <span className="text-black text-[16px]">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
                />
              </div>
              <div className="flex flex-col w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
                >
                  Your Email <span className="text-black text-[16px]">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
                />
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor=""
                className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
              >
                Subject <span className="text-black text-[16px]">*</span>
              </label>
              <input
                type="text"
                required
                className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
              />
            </div>

            <div className="flex flex-col w-full">
              <label
                htmlFor=""
                className="text-[16px] font-[400] text-black opacity-80 my-[25px]"
              >
                Message <span className="text-black text-[16px]">*</span>
              </label>
              <textarea
                rows={7}
                required
                className="p-[5px] rounded-sm border-[1.5px] border-black focus:border-primaryColor opacity-80 outline-none w-full"
              />
            </div>
            <div className="w-full flex justify-center sm:justify-start mt-[2rem]">
              <button className="btn rounded-md">SEND MASSAGE</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
