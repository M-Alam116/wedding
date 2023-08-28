import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div className="container bgGradient text-[18px] text-[white] font-[500] py-[10px] px-5">
      <div className="flex justify-between items-center">
        <div>
          <Image src='/images/logo.png' width={55} height={55} alt="logo"/>
        </div>

        <ul className="flex gap-[30px]">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About US</li>
          </Link>
          <Link href="contact">
            <li>Contact Us</li>
          </Link>
        </ul>

        <div className="flex gap-[30px]">
          <Link href="/login">
            <button>LogIn</button>
          </Link>
          <Link href="/signup">
            <button>SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
