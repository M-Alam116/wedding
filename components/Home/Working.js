import Image from "next/image";

export default function Working() {
  return (
    <div className="container bg-grayBg py-[50px] px-[5px]">
      <div>
        <h1 className="heading text-center">HOW IT WORKS</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-[80px] lg:gap-[30px] mt-[50px]">
        <div className="relative z-[-999] flex flex-col justify-center items-center border-[2px] border-gray-300 shadow-xl py-[40px] px-[10px] w-[18rem] rounded-[10px]">
          <Image src="/images/search.png" width={50} height={50} alt="" />
          <h2 className="text-[16px] font-[700] my-[10px]">Search</h2>
          <p className="text-[14px] font-[500] text-textColor text-center">
            Search for photographers and venues
          </p>
          <span className="flex items-center justify-center absolute top-[-25px] w-[3rem] h-[3rem] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            1
          </span>
        </div>

        <div className="relative z-[-999] flex flex-col items-center border-[2px] border-gray-300 shadow-xl py-[40px] px-[10px] w-[18rem] rounded-[10px]">
          <Image src="/images/compare.png" width={50} height={50} alt="" />
          <h2 className="text-[16px] font-[700] my-[10px]">Compare</h2>
          <p className="text-[14px] font-[500] text-textColor text-center">
            Compare there rates and reviews
          </p>
          <span className="flex items-center justify-center absolute top-[-25px] w-[3rem] h-[3rem] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            2
          </span>
        </div>

        <div className="relative z-[-999] flex flex-col items-center border-[2px] border-gray-300 shadow-xl py-[40px] px-[10px] w-[18rem] rounded-[10px]">
          <Image src="/images/contact.png" width={100} height={100} alt="" />
          <h2 className="text-[16px] font-[700] my-[10px]">Contact</h2>
          <p className="text-[14px] font-[500] text-textColor text-center">
            Contact and book them directly
          </p>
          <span className="flex items-center justify-center absolute top-[-25px] w-[3rem] h-[3rem] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            3
          </span>
        </div>

        <div className="relative z-[-999] flex flex-col items-center border-[2px] border-gray-300 shadow-xl py-[40px] px-[10px] w-[18rem] rounded-[10px]">
          <Image src="/images/relax.png" width={50} height={50} alt="" />
          <h2 className="text-[16px] font-[700] my-[10px]">Relax</h2>
          <p className="text-[14px] font-[500] text-textColor text-center">
            Sit back and Relax!
          </p>
          <span className="flex items-center justify-center absolute top-[-25px] w-[3rem] h-[3rem] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            4
          </span>
        </div>
      </div>
    </div>
  );
}
