export default function HeroSection() {
  return (
    <div className="container bgGradient py-[7rem]">
      <div className="flex flex-col items-center justify-center pb-[3rem]">
        <h1 className="secondaryFont text-[40px] font-[700] text-white text-center">
          DA WEDDING WHISPER
        </h1>
        <h2 className="text-white font-[600] text-[20px] text-center">
          ELEVATING YOUR SPECIAL DAY
        </h2>
      </div>

      <form className="flex flex-col justify-center items-center gap-[20px] md:gap-[50px] text-textColor text-[16px] font-[400] md:flex-row">
        <select
          name=""
          id=""
          required
          className="py-[10px] px-[15px] w-[12rem] rounded-[15px] outline-none"
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
          className="py-[10px] px-[15px] w-[12rem] rounded-[15px] outline-none"
        />

        <select
          name=""
          id=""
          required
          className="py-[10px] px-[15px] w-[12rem] rounded-[15px] outline-none"
        >
          <option value="">Select Time</option>
          <option value="">Lunch</option>
          <option value="">Dinner</option>
        </select>

        <button className="btn bg-yellow-400 rounded-[15px] shadow-lg md:bg-primaryColor">Search</button>
      </form>
    </div>
  );
}
