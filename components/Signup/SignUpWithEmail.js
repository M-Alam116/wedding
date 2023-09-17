import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BiShowAlt, BiHide } from "react-icons/bi";
export default function SignUpWithEmail() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const getPasswordInputType = () => {
    return showPassword ? "text" : "password";
  };

  const getPasswordConfirmInputType = () => {
    return showPasswordConfirm ? "text" : "password";
  };

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/*=============== Registration form ========== */}
      <div className="w-full flex flex-col justify-center px-[10px] md:px-[50px] py-[50px]">
        <div className="">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-[2rem] sm:gap-[0px] sm:justify-between mb-[4rem]">
            <div>
              <Link href="/">
                <button className="btn rounded-sm">Go to Home</button>
              </Link>
            </div>
            <div className="flex flex-col">
              <h2 className="text-[16px] font-[500] text-center">
                Having Trouble?
              </h2>
              <Link
                href="/"
                className="text-[16px] font-[500] text-primaryColor text-center"
              >
                Get Help
              </Link>
            </div>
          </div>
          <h1 className="text-[25px] font-[700] text-primaryColor text-left">
            Sign up
          </h1>
        </div>

        <form className="">
          <div className="flex justify-between sm:gap-[3rem] flex-col sm:flex-row">
            <div className="flex flex-col w-full">
              <label
                htmlFor=""
                className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
              >
                First Name <span className="text-black text-[16px]">*</span>
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
                Last Name <span className="text-black text-[16px]">*</span>
              </label>
              <input
                type="text"
                required
                className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Email <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="email"
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Phone Number <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type="tel"
              required
              pattern="[0-9]*"
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor=""
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Create Password <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type={getPasswordInputType()}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
            {showPassword ? (
              <BiShowAlt
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPassword}
              />
            ) : (
              <BiHide
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPassword}
              />
            )}
          </div>

          <div className="flex flex-col relative">
            <label
              htmlFor=""
              className="text-[16px] font-[400] text-black opacity-80 mt-[25px]"
            >
              Confirm Password <span className="text-black text-[16px]">*</span>
            </label>
            <input
              type={getPasswordConfirmInputType()}
              required
              className="p-[5px] rounded-sm border-b-[1.5px] border-b-black focus:border-b-primaryColor opacity-80 outline-none w-full"
            />
            {showPasswordConfirm ? (
              <BiShowAlt
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPasswordConfirm}
              />
            ) : (
              <BiHide
                className="absolute right-0 top-[70%] text-[20px]"
                onClick={handleShowPasswordConfirm}
              />
            )}
          </div>

          <div className="w-full flex flex-col-reverse sm:flex-row justify-center items-center sm:justify-between gap-[2rem] sm:gap-0 mt-[3rem]">
            <div className="w-full flex flex-col">
              <h1 className="text-[16px] font-[500] text-black text-center">
                Already have an account?
              </h1>
              <Link
                href="/login"
                className="text-[16px] font-[500] text-primaryColor text-center"
              >
                Sign In
              </Link>
            </div>

            <div className="w-full flex justify-center sm:justify-end">
              <button className="btn rounded-md">Sign Up</button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-[100%] h-auto hidden md:block">
        <Image
          src="/images/signup.png"
          width={500}
          height={1500}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
