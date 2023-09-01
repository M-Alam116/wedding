import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="container bgGradient py-[50px] px-[10px] md:px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
        {/* ========= logo ============= */}
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start col-span-1 md:col-span-2 gap-[20px] w-full md:w-[90%]">
          <Link href="/">
            <Image src="/images/logo.png" width={100} height={100} alt="logo" />
          </Link>
          <p className="text-[16px] font-[500] text-center md:text-left">
            At Da Wedding Whisper, we strive to create a heartfelt planning
            experience, ensuring your wedding day is filled with love and joy.
            With a calm, loving, and professional approach, we guide you through
            the entire process with care and dedication
          </p>
        </div>

        {/* ============= main links ============ */}
        <div className="col-span-1 flex flex-col gap-[10px]">
          <h2 className="text-[20px] font-[600]">Main Menu</h2>
          <Link href="/">
            <li className="text-[16px] font-[500] list-none">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-[16px] font-[500] list-none">About</li>
          </Link>
          <Link href="/">
            <li className="text-[16px] font-[500] list-none">Blog</li>
          </Link>
        </div>

        {/* ======= contact links ============ */}
        <div className="col-span-1 flex flex-col gap-[10px]">
          <h2 className="text-[20px] font-[600]">Support</h2>
          <Link href="/">
            <li className="text-[16px] font-[500] list-none">
              Help and Support
            </li>
          </Link>
          <Link href="/">
            <li className="text-[16px] font-[500] list-none">
              Terms and Conditions
            </li>
          </Link>
          <Link href="/">
            <li className="text-[16px] font-[500] list-none">Privacy Policy</li>
          </Link>
          <Link href="/contact">
            <li className="text-[16px] font-[500] list-none">Contact US</li>
          </Link>
        </div>
      </div>

      {/* ========= copyright ========= */}
      <div className="w-full h-[2px] bg-gray-300 my-[30px]"></div>
      <div className="">
        <h3 className="text-center text-[16px] font-[500]">
          Copyright © Da Wedding Whisper All Rights Reserved {date}
        </h3>
      </div>
      <div className="flex items-center justify-center gap-[15px] mt-[10px]">
        <Link href="/">
          <AiFillTwitterCircle className="w-10 h-10 cursor-pointer" />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100091511314699&mibextid=ZbWKwL" target="_blank">
          <BsFacebook className="w-9 h-9 cursor-pointer" />
        </Link>
        <Link href="https://instagram.com/daweddingwhisper?igshid=YmMyMTA2M2Y=" target="_blank">
          <BsInstagram className="w-8 h-8 cursor-pointer" />
        </Link>
        <Link href="https://www.linkedin.com/company/da-wedding-whisper?originalSubdomain=pk" target="_blank">
          <BsLinkedin className="w-8 h-8 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
