import Image from "next/image";
export default function Services() {
  return (
    <div className="container py-[50px] px-[5px]" id="services">
      <div>
        <h1 className="heading text-center mt-[20px]">WHAT WE DO</h1>
      </div>

      <div className="flex flex-wrap gap-[50px] justify-center mt-[40px]">
        <div className="flex flex-col justify-start items-center bg-secondaryBg shadow-xl drop-shadow-xl rounded-[10px] px-[15px] py-[30px] max-w-[350px] w-[95%]">
          <Image src="/images/venue.png" width={50} height={50} alt="" />
          <h3 className="text-[16px] font-[600] my-4 text-center text-primaryColor">
            VENUE BOOKING
          </h3>
          <p className="text-[14px] font-[500] text-black opacity-70 text-center">
            Our venue booking service helps couples easily find, compare and
            book the perfect venue for their wedding day.
          </p>
        </div>

        <div className="flex flex-col justify-start items-center bg-secondaryBg shadow-xl drop-shadow-xl rounded-[10px] px-[15px] py-[30px] max-w-[350px] w-[95%]">
          <Image src="/images/camera.png" width={50} height={50} alt="" />
          <h3 className="text-[16px] font-[600] my-4 text-center text-primaryColor">
            PHOTOGRAPHY & VIDEOGRAPHY
          </h3>
          <span className="font-[800] text-[16px] mb-[1rem]">Coming Soon</span>
          <p className="text-[14px] font-[500] text-black opacity-70 text-center">
            Capture the precious moments of your wedding day with beautiful and
            timeless photography and videography services.
          </p>
        </div>

        <div className="flex flex-col justify-start items-center bg-secondaryBg shadow-xl drop-shadow-xl rounded-[10px] px-[15px] py-[30px] max-w-[350px] w-[95%]">
          <Image src="/images/catering.png" width={50} height={50} alt="" />
          <h3 className="text-[16px] font-[600] my-4 text-center text-primaryColor">
            CATERING SERVICES
          </h3>
          <span className="font-[800] text-[16px] mb-[1rem]">Coming Soon</span>
          <p className="text-[14px] font-[500] text-black opacity-70 text-center">
            Our catering service offers delicious, customized menus to make your
            special day memorable.
          </p>
        </div>
      </div>
    </div>
  );
}
