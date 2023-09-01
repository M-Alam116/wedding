import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { ImCross } from "react-icons/im";
export default function Header() {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="sticky top-0 shadow-md" ref={headerRef}>
      <div className="container bgGradient text-[18px] text-[white] font-[500] py-[10px] px-5">
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
                <li>Home</li>
              </Link>
              <Link href="/marquee">
                <li>Find Hall</li>
              </Link>
              <Link href="/about">
                <li>About US</li>
              </Link>
              <Link href="contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          {/* =========== right header =========== */}
          <div className="flex items-center gap-[30px]">
            <Link href="/login">
              <button>LogIn</button>
            </Link>

            <Link href="/signup">
              <button>SignUp</button>
            </Link>

            <span className="block md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-8 h-8 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
