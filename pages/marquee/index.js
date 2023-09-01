import Card from "../../components/Marquee/Card";
import Filter from "../../components/Marquee/Filter";
import { marqueeDetails } from "../../Data/marqueeDetails";

export default function MarqueePage() {
  return (
    <div className="container">
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          MARQUEE DETAILS
        </h1>
      </div>

      <div className="px-[10px] py-[50px] flex flex-col lg:flex-row gap-[20px]">
        <div className="w-full lg:w-[25%] relative z-[-1]">
          <Filter />
        </div>
        <div className="w-full lg:w-[72%]">
          {marqueeDetails.map((marqueeData) => (
            <Card key={marqueeData.id} marqueeData={marqueeData} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center md:mr-[2rem] mb-[2rem] md:justify-end md:items-end">
        <button className="btn">VIEW MORE</button>
      </div>
    </div>
  );
}
