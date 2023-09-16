export default function HeroSection() {
  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="hero-bg py-[14rem]">
        <div className="flex flex-col items-center justify-center pb-[1.5rem]">
          <h1 className="secondaryFont text-[30px] font-[700] text-[#F97B65] text-center leading-[35px] mb-[12px]">
            DA WEDDING WHISPER
          </h1>
          <h2 className="text-[#C54757] font-[600] text-[40px] text-center leading-[42px]">
            ELEVATING YOUR SPECIAL DAY
          </h2>
        </div>

        <form className="flex bg-[#ED7B91] bg-opacity-60 rounded-[40px] w-[95%] mx-auto py-[25px] px-[20px] flex-col justify-center items-center gap-[30px] text-textColor text-[16px] font-[400] lg:w-fit lg:flex-row">
          <select
            name=""
            id=""
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          >
            <option value="">Select City</option>
            <option value="">Islamabad</option>
            <option value="">Rawalpindi</option>
            <option value="">Wah cantt</option>
          </select>

          <input
            type="date"
            placeholder="Select Date"
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          />

          <select
            name=""
            id=""
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          >
            <option value="">Select Time</option>
            <option value="">Lunch</option>
            <option value="">Dinner</option>
          </select>

          <button className="btn bg-primaryColor rounded-[15px] shadow-lg w-[95%] lg:w-fit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
