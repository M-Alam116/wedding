import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
export default function SignUp() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/* ======== Sign up options =========== */}
      <div className="w-full flex flex-col px-[10px] md:px-[50px] py-[50px]">
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

        <Link href="/">
          <div className="max-w-[300px] w-[95%] bg-[#D9D9D9] flex gap-[2rem] items-center py-[10px] px-[20px] rounded-lg cursor-pointer mx-auto">
            <FcGoogle className="w-[2rem] h-[2rem]" />
            <h3 className="text-[16px] font-[500] text-center">
              Sign up with Google
            </h3>
          </div>
        </Link>

        <div className="flex items-center my-[30px] mx-auto max-w-[300px] w-[95%]">
          <div className="w-[120px] h-[1px] bg-black"></div>
          <span className="text-[18px] font-[600] mx-[20px]">Or</span>
          <div className="w-[120px] h-[1px] bg-black"></div>
        </div>

        <Link href="/signup/signup">
          <div className="max-w-[300px] w-[95%] bg-primaryColor text-white text-[16px] font-[500] flex gap-[2rem] items-center py-[10px] px-[20px] rounded-lg cursor-pointer mx-auto">
            <AiOutlineMail className="w-[2rem] h-[2rem]" />
            <h3 className="text-[16px] font-[500] text-center">
              Sign up with E-mail
            </h3>
          </div>
        </Link>

        <div className="w-full flex flex-col mt-[5rem]">
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
