import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      {/* =========== Top ========= */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-secondaryBg py-[100px]">
        <div className="w-full flex flex-col justify-center items-center gap-[15px] px-[10px] sm:px-[3rem]">
          <h1 className="text-[30px] sm:text-[35px] leading-[40px] sm:leading-[45px] font-[500] text-center sm:text-left w-full lg:w-[70%]">
            Say <span className="font-[700] text-primaryColor">Goodbye</span> to
            Worries,
            <span className="font-[700] text-primaryColor"> Embrace</span>{" "}
            Precious Moments
          </h1>
          <p className="text-[16px] font-[500] text-center sm:text-left text-black opacity-80 w-full lg:w-[70%]">
            Consequuntur magni dolores eos qui ratione voluptatem sequi
            nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam.
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <Image src="/images/about.png" width={320} height={320} alt="" />
        </div>
      </div>
    </div>
  );
}
