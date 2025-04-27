import { HiLocationMarker } from "react-icons/hi";
import {
  PiCarFill,
  PiTicketFill,
  PiUsersFill,
  PiWheelchairFill,
} from "react-icons/pi";
import { ImPriceTags } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { RiCloseCircleFill } from "react-icons/ri";
import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import useApi from "@/hooks/useApi";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";
import { MdFastfood, MdOutlineEventAvailable } from "react-icons/md";
import { BsArrowRightCircleFill, BsFillCheckCircleFill } from "react-icons/bs";

const BACKEND_BASE_URL = "https://daww.azurewebsites.net";

export default function MarqueeDetailPage() {
  const { data, fetchData, loading, error } = useApi();
  const { data: menuData, fetchData: fetchMenuData } = useApi();
  const router = useRouter();
  const { id } = router.query;

  const [selectedMenuId, setSelectedMenuId] = useState(null);

  const handleMenuSelect = (menuId) => {
    setSelectedMenuId(menuId);
  };

  const selectedMenu = menuData?.find((menu) => menu.id === selectedMenuId);

  const handleBooking = () => {
    if (!selectedMenuId) {
      alert("Please select a menu before booking!");
      return;
    }
    router.push({
      pathname: "/booking",
      query: {
        marqueeId: id,
        menuId: selectedMenuId,
        total_price: selectedMenu.price,
      },
    });
  };

  const getMenus = () => {
    if (id) {
      fetchMenuData({
        method: "GET",
        url: `/api/api/marquees/${id}/menus/`,
      });
    }
  };

  const getSingleMarquee = () => {
    if (id) {
      fetchData({
        method: "GET",
        url: `/api/marquees/${id}/`,
      });
    }
  };

  useEffect(() => {
    if (id) {
      getSingleMarquee();
      getMenus();
    }
  }, [id]);

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

  const renderStaff = () => {
    if (data?.staff === "M") return "Male Staff";
    if (data?.staff === "F") return "Female Staff";
    if (data?.staff === "MF") return "Male & Female Staff";
    return "Staff details not available";
  };

  const renderCancelationPolicy = () => {
    if (data?.cancelation_policy === "PR") return "Partial Refundable";
    if (data?.cancelation_policy === "FR") return "Fully Refundable";
    return "Non-refundable";
  };

  const renderCatering = () => {
    return data?.catering === "IN" ? "Internal Catering" : "External Catering";
  };

  console.log(menuData);

  return (
    <Fragment>
      <Head>
        <title>{data?.name}</title>
      </Head>

      <div className="container">
        <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
          <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
            {data?.name}
          </h1>
        </div>

        <div className="px-[10px] md:mx-[20px] py-[50px] text-textColor">
          <div className="flex flex-col gap-2">
            <h1 className="text-textColor font-[700] text-[22px]">
              DESCRIPTION
            </h1>
            <h2 className="font-[700] text-[18px]">{data?.description}</h2>
            <h3 className="text-[16px] font-[500] flex gap-[10px]">
              <HiLocationMarker className="w-10 h-10 md:w-7 md:h-6" />
              <span>{data?.location}</span>
            </h3>
            <span className="text-[16px] text-textColor flex gap-[10px]">
              <ImPriceTags className="w-6 h-6" />
              <h3 className="text-md font-semibold text-gray-700">
                PKR {data?.min_price?.toLocaleString()} -{" "}
                {data?.max_price?.toLocaleString()}
              </h3>
            </span>
            <div className="flex items-center gap-2">
              <PiCarFill className="text-lg" />
              <span>{data?.parking_space} Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <PiWheelchairFill className="text-lg" />
              {data?.wheelchair_accessible === "Y" ? (
                <span>Wheelchair Accessible</span>
              ) : (
                <span>No Wheelchair Access</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineEventAvailable className="text-lg" />
              <span>{data?.amenities}</span>
            </div>
            <div className="flex items-center gap-2">
              <PiUsersFill className="text-lg" />
              <span>{data?.owner} Owners</span>
            </div>

            <div className="flex items-center gap-2">
              <PiUsersFill className="text-lg" />
              <span>{renderStaff()}</span>
            </div>

            <div className="flex items-center gap-2">
              {data?.cancelation_policy === "PR" ? (
                <PiTicketFill className="text-lg" />
              ) : data?.cancelation_policy === "FR" ? (
                <BsFillCheckCircleFill className="text-lg" />
              ) : (
                <RiCloseCircleFill className="text-lg" />
              )}
              <span>{renderCancelationPolicy()}</span>
            </div>

            <div className="flex items-center gap-2">
              {data?.catering === "IN" ? (
                <MdFastfood className="text-lg" />
              ) : (
                <BsArrowRightCircleFill className="text-lg" />
              )}
              <span>{renderCatering()}</span>
            </div>

            <div className="text-[16px] font-[500] mt-4">
              <h2 className="text-textColor font-[700] text-[22px]">
                Additional Information
              </h2>
              <p>{data?.additional_information}</p>
            </div>
          </div>

          <div>
            {menuData && menuData.length > 0 && (
              <div className="mt-10">
                <h2 className="text-textColor font-[700] text-[24px] mb-4">
                  Menus
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {menuData.map((menu) => (
                    <div
                      key={menu.id}
                      className={`border p-6 rounded-lg shadow-md bg-white cursor-pointer
                      ${
                        selectedMenuId === menu.id
                          ? "border-pink-500 ring-2 ring-pink-400"
                          : ""
                      }
                    `}
                      onClick={() => handleMenuSelect(menu.id)}
                    >
                      <h3 className="text-lg font-bold mb-2">{menu.name}</h3>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Price:</span> PKR{" "}
                        {menu.price.toLocaleString()}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Starters:</span>{" "}
                        {menu.starters}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Main Course:</span>{" "}
                        {menu.main}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Drinks:</span>{" "}
                        {menu.drinks}
                      </p>
                      <p className="text-gray-700 mb-1">
                        <span className="font-semibold">Desserts:</span>{" "}
                        {menu.desserts}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <h2 className="text-textColor font-[700] text-[24px] mb-4 mt-6">
            Images
          </h2>
          <div className="flex flex-wrap gap-4">
            {data?.photos?.map((photo, index) => (
              <Image
                key={index}
                src={`${BACKEND_BASE_URL}${photo.image}`}
                alt={`Marquee Image ${index + 1}`}
                width={500}
                height={300}
                className="object-cover rounded-md"
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button onClick={handleBooking} className="btn">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
