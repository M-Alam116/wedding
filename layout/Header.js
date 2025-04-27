import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Avatar } from "@mui/material";

export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();

  const accessToken = Cookies.get("accessToken");
  const [initials, setInitials] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      const user = userData ? JSON.parse(userData) : null;
      const firstName = user?.first_name || "";
      const lastName = user?.last_name || "";
      setInitials(`${firstName[0] || ""}${lastName[0] || ""}`.toUpperCase());
    }
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const handleLogout = () => {
    Cookies.remove("accessToken");
    localStorage.removeItem("userData");
    router.push("/login");
  };

  return (
    <header
      className="container sticky top-0 shadow-md z-[999999]"
      ref={headerRef}
    >
      <div className="bg-white text-[18px] text-black font-[500] py-[5px] px-5">
        <div className="flex justify-between items-center">
          {/* ========== logo ============ */}
          <div>
            <Link href="/">
              <Image src="/images/logo.png" width={55} height={55} alt="logo" />
            </Link>
          </div>

          {/* ========== menu ========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu relative flex gap-[30px]">
              <ImCross className="block absolute top-5 left-5 md:hidden" />
              <Link href="/">
                <li
                  className={
                    router.pathname === "/"
                      ? "active"
                      : "hover:text-primaryColor"
                  }
                >
                  Home
                </li>
              </Link>
              <Link href="/#services">
                <li
                  className={
                    router.pathname === "/#services"
                      ? "active"
                      : "hover:text-primaryColor"
                  }
                >
                  Services
                </li>
              </Link>
              <Link href="/about">
                <li
                  className={
                    router.pathname === "/about"
                      ? "active"
                      : "hover:text-primaryColor"
                  }
                >
                  About Us
                </li>
              </Link>
              <Link href="/marquee">
                <li
                  className={
                    router.pathname === "/marquee"
                      ? "active"
                      : "hover:text-primaryColor"
                  }
                >
                  Marquee
                </li>
              </Link>
              <Link href="/contact">
                <li
                  className={
                    router.pathname === "/contact"
                      ? "active"
                      : "hover:text-primaryColor"
                  }
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>

          {/* =========== right header =========== */}
          <div className="flex items-center gap-[10px] sm:gap-[30px]">
            {accessToken ? (
              <div className="flex items-center gap-4">
                <Avatar style={{ backgroundColor: "gray", color: "white" }}>
                  {initials}
                </Avatar>
                <button
                  onClick={handleLogout}
                  className="btn bg-transparent text-black border-[2px] font-[500] text-[15px] py-[6px] px-[10px] border-primaryColor rounded-[6px]"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <button className="btn bg-transparent text-black border-[2px] font-[500] text-[15px] py-[8px] border-primaryColor rounded-[6px]">
                    Log In
                  </button>
                </Link>

                <Link href="/signup">
                  <button className="btn font-[500] text-[15px] rounded-[6px] hidden sm:inline">
                    Register
                  </button>
                </Link>
              </>
            )}

            <span className="hamburger" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
