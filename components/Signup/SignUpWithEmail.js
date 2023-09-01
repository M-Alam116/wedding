import Link from "next/link";
export default function SignUpWithEmail() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[10rem] md:h-[15rem]">
        <h1 className="secondaryFont heading text-[35px] font-[700] text-white text-center">
          SIGN UP TO DA WEDDING WHISPER
        </h1>
      </div>

      {/*=============== Registration form ========== */}
      <div className="py-[50px] flex flex-col justify-center items-center px-[10px]">
        <form className="">
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[18px] font-[500] my-[5px] text-primaryColor"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] w-[300px]"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[18px] font-[500] my-[5px] text-primaryColor"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[18px] font-[500] my-[5px] text-primaryColor"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[18px] font-[500] my-[5px] text-primaryColor"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] w-[300px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-[18px] font-[500] my-[5px] text-primaryColor"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="p-[10px] rounded-sm border-none outline-none bg-[#EEEEEE] w-[300px]"
            />
          </div>

          <button className="btn w-[300px] rounded-sm mt-[30px]">
            CREATE ACCOUNT
          </button>
        </form>

        <div className="w-full md:w-[40%] mt-[50px]">
          <p className="text-[16px] text-[500] text-primaryColor text-center">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.By creating an account you agree with our
            Terms of Service, Privacy Policy, and our default Notification
            Settings.
          </p>
          <h1 className="text-[18px] font-[700] text-primaryColor text-center mt-[10px]">
            Already have an account? <Link href="/login">Log In</Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
