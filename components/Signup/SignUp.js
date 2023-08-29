import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
export default function SignUp() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[10rem] md:h-[15rem]">
        <h1 className="secondaryFont heading text-[35px] font-[700] text-white text-center">
          SIGN UP TO DA WEDDING WHISPER
        </h1>
      </div>

      {/* ======== Sign up options =========== */}
      <div className="flex flex-col items-center justify-center py-[50px] px-[10px]">
        <Link href="/">
          <div className="w-[300px] bg-primaryColor flex justify-between items-center py-[10px] px-[20px] rounded-sm cursor-pointer">
            <FcGoogle className="w-[2rem] h-[2rem]" />
            <h3 className="text-[16px] font-[600]">SIGN UP WITH GOOGLE</h3>
          </div>
        </Link>

        <div className="flex items-center my-[30px]">
          <div className="w-[120px] h-[1px] bg-black"></div>
          <span className="text-[18px] font-[600] mx-[20px]">Or</span>
          <div className="w-[120px] h-[1px] bg-black"></div>
        </div>

        <Link href="/signup/signup">
          <div className="w-[300px] bg-[#D9D9D9] text-primaryColor text-[16px] font-[500] flex justify-center items-center py-[10px] px-[20px] rounded-sm cursor-pointer">
            Continue With E-mail
          </div>
        </Link>

        <div className="w-full md:w-[40%] mt-[50px]">
          <p className="text-[16px] text-[500] text-primaryColor text-center">
            By creating an account you agree with our Terms of Service, Privacy
            Policy, and our default Notification Settings.
          </p>
          <h1 className="text-[18px] font-[700] text-primaryColor text-center mt-[10px]">
            Already have an account? <Link href="/login">Log In</Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
