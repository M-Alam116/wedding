import useApi from "@/hooks/useApi";
import { useState } from "react";
import Card from "../Marquee/Card";

export default function HeroSection() {
  const { data, fetchData, loading, error } = useApi();

  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!city || !date || !time) return;

    fetchData({
      method: "GET",
      url: `/api/api/search_marquees?city=${city}&date=${date}&time=${time.toLowerCase()}`,
    });
  };

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

        <form
          onSubmit={handleSearch}
          className="flex bg-[#ED7B91] bg-opacity-60 rounded-[40px] w-[95%] mx-auto py-[25px] px-[20px] flex-col justify-center items-center gap-[30px] text-textColor text-[16px] font-[400] lg:w-fit lg:flex-row"
        >
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          >
            <option value="">Select City</option>
            <option value="islamabad">Islamabad</option>
            <option value="rawalpindi">Rawalpindi</option>
            <option value="wahCantt">Wah Cantt</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          />

          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="py-[10px] px-[15px] w-[95%] lg:w-[12rem] rounded-[15px] outline-none"
          >
            <option value="">Select Time</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <button
            type="submit"
            className="btn bg-primaryColor rounded-[15px] shadow-lg w-[95%] lg:w-fit"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>
      </div>

      {error && (
        <p className="text-red-500 mt-4 text-center">{error.message}</p>
      )}
      <div className="w-full  my-10 space-y-4 px-4">
        {data?.map((marqueeData, index) => (
          <Card key={index} marqueeData={marqueeData} />
        ))}
      </div>
    </div>
  );
}
