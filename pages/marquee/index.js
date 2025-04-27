import Card from "../../components/Marquee/Card";
import Filter from "../../components/Marquee/Filter";
import { marqueeDetails } from "../../Data/marqueeDetails";
import { AiTwotoneFilter } from "react-icons/ai";
import { Fragment, useEffect } from "react";
import Head from "next/head";
import useApi from "@/hooks/useApi";
import { CircularProgress } from "@mui/material";
export default function MarqueePage() {
  const { data, fetchData, loading, error } = useApi();

  const getAllMarquee = () => {
    fetchData({
      method: "GET",
      url: "/api/marquees/",
    });
  };

  useEffect(() => {
    getAllMarquee();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-10 px-4 flex justify-center items-center min-h-[50vh]">
        <CircularProgress size={40} thickness={3} />
      </div>
    );
  }  

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4 text-center text-red-500">
        {error.response?.data?.message || "Failed to fetch data."}
      </div>
    );
  }

  console.log("data", data);
  

  return (
    <Fragment>
      <Head>
        <title>Find Venue</title>
      </Head>
      <div className="container">
        <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
          <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
            MARQUEE DETAILS
          </h1>
        </div>

        {/* ====== Filter ======== */}
        <div className="flex gap-[5px] items-center ml-auto justify-end mt-[20px] mr-[10px] bg-secondaryBg w-fit px-[20px] py-[5px] rounded-sm cursor-pointer lg:hidden">
          <span className="text-[16px] font-[500]">Filter</span>
          <AiTwotoneFilter className="text-[22px] text-primaryColor" />
        </div>

        <div className="px-[10px] py-[50px] flex flex-col lg:flex-row gap-[20px]">
          <div className="w-full lg:w-[25%]">
            <Filter />
          </div>
          <div className="w-full lg:w-[72%] flex justify-center flex-wrap gap-4">
            {data?.map((marqueeData, index) => (
              <Card key={index} marqueeData={marqueeData} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
