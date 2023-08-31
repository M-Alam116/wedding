import { HiLocationMarker } from "react-icons/hi";
import { PiPersonFill } from "react-icons/pi";
import { ImPriceTags } from "react-icons/im";
import Image from "next/image";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { RiArrowDownSLine } from "react-icons/ri";
export default function MarqueeDetail() {
  return (
    <div className="container">
      {/* ========= Top Gradient =========== */}
      <div className="flex items-center justify-center bgGradient w-full h-[15rem] md:h-[20rem]">
        <h1 className="secondaryFont heading text-[40px] font-[700] text-white text-center">
          PESHAWAR GATHERING HALL
        </h1>
      </div>

      {/* =========== Hall Details =========== */}
      <div className="px-[10px] md:mx-[20px] py-[50px] text-textColor">
        {/* ============ Description ================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-[10px]">
            <h1 className="text-textColor font-[700] text-[22px]">
              DESCRIPTION
            </h1>
            <h2 className="font-[700] text-[18px]">Peshawar Gathering Hall</h2>
            <h3 className="text-[16px] font-[500] flex gap-[10px]">
              <HiLocationMarker className="w-10 h-10 md:w-7 md:h-6" />
              <span>
                Opp Gulbahar police station near Al Mansoor Hotel GT road,
                Peshawar
              </span>
            </h3>
            <span className="text-[16px] text-textColor flex gap-[10px]">
              <ImPriceTags className="w-6 h-6" />
              <span>PKR. 110000</span>
            </span>
            <span className="text-[16px] text-textColor flex gap-[10px]">
              <PiPersonFill className="w-6 h-6" />
              <span>Capacity: 800 persons</span>
            </span>
            <ul className="text-[16px] font-[500]">
              <span className="text-[16px] font-[600]">On Menu Booking:</span>
              <li className="">i) Guest&gt;350, hall will be free</li>
              <li className="">
                ii) Guest&lt;350, hall charges will be 40000Rs
              </li>
              <li className="">iii) Guest&lt;200 then full hall charges.</li>
              <p className="">
                Discount on working days (Mon to Thursday) Peshawar Gathering
                hall provides cooperative staff, tasty food, two halls separate
                for male and females, ladies and gents waiters, full theme
                decoration, vast parking. We are located on GT road in a very
                comfortable location for customers.
              </p>
            </ul>
          </div>
          <div className="col-span-1 flex justify-center md:justify-end w-full h-[250px]">
            <Image
              src="/images/peshawarGatheringhall2.png"
              width={500}
              height={200}
              alt=""
            />
          </div>
        </div>

        {/* ================ Features list =============== */}
        <div className="mt-[40px] ml-[20px]">
          <h2 className="text-[18px] font-[700]">Features List</h2>
          <ul className="list-decimal text-[16px] font-[500]">
            <li>Dj and sound system</li>
            <li>Theme Decoration</li>
            <li>Round and Square Tables</li>
            <li>Male and Females Waiters</li>
            <li>Female DJ</li>
            <li>Backup generator</li>
            <li>Car Parking</li>
            <li>Heater & AC</li>
            <li>Nikah Room</li>
            <li>Multimedia and Screens etc</li>
          </ul>
        </div>

        {/* ========== map ========== */}
        <div className="mt-[40px]">
          <h1 className="text-[18px] font-[700] mb-[10px]">LOCATION</h1>
          <Image src="/images/map.png" width={400} height={250} alt="" />
        </div>

        {/* =========== menu ======== */}
        <div className="mt-[40px] w-full md:w-[30rem] flex flex-col gap-[10px]">
          <h1 className="text-[18px] font-[700] mb-[10px]">MENU</h1>
          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu1"
              id="menu1"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  MEHNDI MENU 1
                </span>{" "}
                <span className="text-primaryColor ml-[50px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu2"
              id="menu2"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  MEHNDI MENU 2
                </span>{" "}
                <span className="text-primaryColor ml-[50px]">PKR 18,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu3"
              id="menu3"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  MEHNDI MENU 3
                </span>{" "}
                <span className="text-primaryColor ml-[50px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu4"
              id="menu4"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  RECEPTION MENU 1
                </span>{" "}
                <span className="text-primaryColor ml-[20px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu5"
              id="menu5"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  RECEPTION MENU 2
                </span>{" "}
                <span className="text-primaryColor ml-[20px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu6"
              id="menu6"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  ONE DISH MENU 1
                </span>{" "}
                <span className="text-primaryColor ml-[35px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<RiArrowDownSLine className="w-5 h-5" />}
              aria-controls="menu7"
              id="menu7"
            >
              <Typography>
                <span className="text-gray-600 text-[16px] font-[500]">
                  ONE DISH MENU 2
                </span>{" "}
                <span className="text-primaryColor ml-[35px]">PKR 19,00</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="">
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">
                    MAIN COURSE
                  </h2>
                  <p>
                    Chicken Boti, Aaloo Achari, Lahori Chanay, Puri Assorted
                    Salads, Assorted Sauces, Assorted Naan & Roti{" "}
                  </p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DRINKS</h2>
                  <p>Soft drinks, Mineral Water, Green Tea</p>
                </div>
                <div className="">
                  <h2 className="text-[16px] font-[600] my-[5px]">DESSERTS</h2>
                  <p>Suji Halwa</p>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex justify-center mt-[50px]">
          <button className="btn">BOOK NOW</button>
        </div>
      </div>
    </div>
  );
}
