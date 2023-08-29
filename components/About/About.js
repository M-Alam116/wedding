import Image from "next/image";
export default function About() {
  return (
    <div className="container">
      {/* ========= Top Gradient ========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          WELCOME TO OUR SITE
        </h1>
      </div>

      {/* =========== About Info ============ */}
      <div className="flex items-center flex-col-reverse md:flex-row justify-between gap-[50px] px-[10px] md:px-[30px] py-[50px]">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <p className="text-[18px] font-[500] text-center">
            At Da Wedding Whisper, we strive to create a heartfelt planning
            experience, ensuring your wedding day is filled with love and joy.
            With a calm, loving, and professional approach, we guide you through
            the entire process with care and dedication
          </p>
          <button className="btn rounded-sm mt-[20px]">Read More</button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image src="/images/aboutpic.png" width={300} height={300} alt="" />
        </div>
      </div>

      {/* ========== About Details ========== */}
      <div className="flex flex-col-reverse md:flex-row justify-center gap-[20px] px-[10px] py-[50px] bg-grayBg">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src="/images/event.png" width={300} height={200} alt="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <span className="w-[3rem] h-[3rem] text-center p-[10px] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            01
          </span>
          <h2 className="text-[18px] font-[600] my-[10px]">Event Planning</h2>
          <p className="text-textColor text-[16px] font-[500] text-center md:text-left">
            We are dedicated to crafting a comprehensive design plan for your
            wedding, encompassing everything from attire and stationery to
            personalized details, florals, and rentals. Our aim is to create a
            harmonious and cohesive look for your special event.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-[20px] px-[10px] py-[50px]">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <span className="w-[3rem] h-[3rem] text-center p-[10px] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            02
          </span>
          <h2 className="text-[18px] font-[600] my-[10px]">
            Virtual Planning Hub
          </h2>
          <p className="text-textColor text-[16px] font-[500] text-center md:text-left">
            Our Virtual planning hub is the central repository for all your
            wedding details and tasks. It houses your checklist, timeline,
            budget, guest list tracking, seating arrangements, contacts, and
            additional notes, ensuring everything is conveniently organized in
            one place.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src="/images/virtual.png" width={300} height={200} alt="" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center gap-[20px] px-[10px] py-[50px] bg-grayBg">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src="/images/photo.png" width={300} height={200} alt="" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <span className="w-[3rem] h-[3rem] text-center p-[10px] text-white bg-primaryColor text-[20px] font-[700] rounded-full">
            03
          </span>
          <h2 className="text-[18px] font-[600] my-[10px]">Photography</h2>
          <p className="text-textColor text-[16px] font-[500] text-center md:text-left">
            We specialize in capturing the magic of your wedding day through the
            lens of creativity and passion. Our team of experienced
            photographers understands the significance of each moment, from the
            heartfelt exchange of vows to the joyous celebration with your loved
            ones.
          </p>
        </div>
      </div>
    </div>
  );
}
