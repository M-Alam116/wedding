import Image from "next/image";
import { GrLocation } from "react-icons/gr";
import { PiCarFill, PiWheelchairFill } from "react-icons/pi";
import { MdOutlineEventAvailable } from "react-icons/md";
import Link from "next/link";

export default function Card({ marqueeData }) {
  const {
    name,
    location,
    min_price,
    max_price,
    amenities,
    parking_space,
    wheelchair_accessible,
    photos,
    id,
  } = marqueeData;

  const BACKEND_BASE_URL = "https://daww.azurewebsites.net";
  const firstImage =
    photos?.length > 0 ? `${BACKEND_BASE_URL}${photos[0].image}` : null;    

  return (
    <div className="w-full max-w-sm h-fit bg-white shadow-lg rounded-lg overflow-hidden mt-6 flex flex-col">
      <div className="relative w-full h-[200px] bg-gray-100">
        {firstImage ? (
          <Image
            src={firstImage}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="hover:scale-105 transition-all duration-300"
          />
        ) : (
          <div className="flex justify-center items-center w-full h-full text-gray-500">
            Image not available
          </div>
        )}
      </div>

      <div className="flex flex-col p-5 gap-4">
        <div>
          <h2 className="text-xl font-bold text-primaryColor">{name}</h2>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <GrLocation className="text-lg" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold text-gray-700">
            PKR {min_price?.toLocaleString()} - {max_price?.toLocaleString()}
          </h3>
        </div>

        <div className="flex flex-col gap-3 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <PiCarFill className="text-lg" />
            <span>{parking_space} Parking</span>
          </div>
          <div className="flex items-center gap-2">
            <PiWheelchairFill className="text-lg" />
            {wheelchair_accessible === "Y" ? (
              <span>Wheelchair Accessible</span>
            ) : (
              <span>No Wheelchair Access</span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEventAvailable className="text-lg" />
            <span>{amenities}</span>
          </div>
        </div>

        <div className="mt-4">
          <Link href={`/marquee/${id}`}>
            <button className="w-full bg-primaryColor text-white px-4 py-2 rounded-md hover:bg-primaryColor-dark transition duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
