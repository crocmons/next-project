"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-300 text-black bg-transparent relative mx-auto">
      <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-3xl uppercase font-bold cursor-pointer">
          <Image src="/cognito.svg" alt="logo" width={170} height={170} />
        </Link>
        <ul className="hidden lg:inline-flex gap-8 items-center justify-center uppercase font-semibold p-2 text-xl mx-auto">
          <Link href="/">
            <li className="navbarLi">Home</li>
          </Link>
          <Link href="/services">
            <li className="navbarLi">Services</li>
          </Link>
          <Link href="/work">
            <li className="navbarLi">Work</li>
          </Link>
          <Link href="/contact-us">
            <li className="navbarLi">Contact Us</li>
          </Link>
        </ul>
        <div className="hidden lg:inline-flex items-center">
          <button className="w-40 h-14 bg-[#0077B6] text-white uppercase text-md font-semibold rounded-md hover:bg-[#660708]">
            <Link href="/contact-us">Get in Touch</Link>
          </button>
        </div>
        {/* Mobile Menu */}
        <div>
          {click && (
            <div className="lg:hidden block absolute top-20 left-0 right-0 gap-10 items-center uppercase font-semibold p-2 text-xl bg-white z-50">
              <ul className="text-center text-xl p-20">
                <Link href="/">
                  <li className="mbnavbarLi">Home</li>
                </Link>
                <Link href="/services">
                  <li className="mbnavbarLi">Services</li>
                </Link>
                <Link href="/work">
                  <li className="mbnavbarLi">Work</li>
                </Link>
                <Link href="/contact-us">
                  <li className="mbnavbarLi">Contact Us</li>
                </Link>
              <button className="flex items-center justify-center mx-auto mt-2 py-2 px-4 bg-[#0077B6] text-white uppercase text-sm font-semibold rounded hover:bg-[#660708]">
                <Link href="/contact-us">Get in Touch</Link>
              </button>
              </ul>
            </div>
          )}
        </div>
        <button className="block font-bold text-lg sm:hidden transition" onClick={handleClick}>
          {click ? (
            <IoClose className="font-bold text-2xl text-[#0077B6]"/>
          ) : (
            <CiMenuFries className="font-bold text-2xl text-[#0077B6]"/>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
