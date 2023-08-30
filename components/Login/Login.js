import Link from "next/link";
export default function Login() {
  return (
    <div className="container">
      {/* ======== Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[10rem] md:h-[15rem]">
        <h1 className="secondaryFont heading text-[35px] font-[700] text-white text-center">
          LOG IN TO DA WEDDING WHISPER
        </h1>
      </div>

      {/*=============== Login form ========== */}
      <div className="py-[50px] flex flex-col justify-center items-center px-[10px]">
        <form className="">
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

          <div className="flex justify-between mt-[20px]">
            <div className="flex items-center gap-1">
              <input type="checkbox" id="remember" className="w-4 h-4" />
              <label
                htmlFor="remember"
                className="text-primaryColor text-[16px] font-[500]"
              >
                Remember me
              </label>
            </div>
            <Link href="/">
              <p className="text-primaryColor text-[16px] font-[500]">
                Forgot Password?
              </p>
            </Link>
          </div>
          <button className="btn w-[300px] rounded-sm mt-[30px]">LOG IN</button>
        </form>

        <div className="w-full md:w-[40%] mt-[50px]">
          <h1 className="text-[18px] font-[700] text-primaryColor text-center mt-[10px]">
            Don’t have an account? <Link href="/signup">Sign Up</Link>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
}
