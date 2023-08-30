import Card from "./Card";
import Filter from "./Filter";

export default function Marquee() {
  return (
    <div className="container">
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          MARQUEE DETAILS
        </h1>
      </div>

      <div className="px-[10px] py-[50px] flex flex-col lg:flex-row gap-[20px]">
        <div className="w-full lg:w-[30%]">
          <Filter />
        </div>
        <div className="w-full lg:w-[70%]">
          <Card />
        </div>
      </div>
    </div>
  );
}
