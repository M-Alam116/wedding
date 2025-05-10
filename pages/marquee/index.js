import Card from "../../components/Marquee/Card";
import Filter from "../../components/Marquee/Filter";
import { AiTwotoneFilter } from "react-icons/ai";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import useApi from "@/hooks/useApi";
import { CircularProgress } from "@mui/material";
export default function MarqueePage() {
  const { data, fetchData, loading, error } = useApi();

  const [showFilter, setShowFilter] = useState(false);

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

  return (
    <Fragment>
      <Head>
        <title>Find Venue</title>
      </Head>
      <div className="container">
        <div className="flex items-center justify-center bg-[#F3F3F3] w-full py-20">
          <h1 className="secondaryFont heading text-[40px] font-[700] text-primaryColor text-center">
            ALL MARQUEES
          </h1>
        </div>

        {/* ====== Filter ======== */}
        <div
          onClick={() => setShowFilter(!showFilter)}
          className="flex gap-[5px] items-center ml-auto justify-end mt-[20px] mr-[10px] bg-secondaryBg w-fit px-[20px] py-[5px] rounded-sm cursor-pointer lg:hidden"
        >
          <span className="text-[16px] font-[500]">Filter</span>
          <AiTwotoneFilter className="text-[22px] text-primaryColor" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 p-5 gap-6">
          <div className="w-full col-span-1">
            <div className="hidden w-full lg:block">
              <Filter />
            </div>
            <div className="block w-full lg:hidden">{showFilter && <Filter />}</div>
          </div>
          <div className="w-full col-span-3 space-y-4">
            {data?.map((marqueeData, index) => (
              <Card key={index} marqueeData={marqueeData} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
