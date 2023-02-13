import Link from "next/link";
import React, { useState } from "react";
import Theme from "../widgets/Theme";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:px-36 lg:py-10 md:px-20 md:py-10 px-5 py-10">
      <div className="border border-gray-100 flex justify-between rounded-[40px] px-3 h-14 md:h-20 lg:h-20 md:pt-[12px] lg:pt-[12px] pt-[8px] pb-[8px] md:pb-0 lg:pb-0 shadow-md bg-white dark:bg-black dark:shadow-slate-300 dark:border-black">
        <Link
          href="/"
          className="pt-[5px] lg:pt-[14px] md:pt-[14px] border rounded-full md:h-14 md:w-14  lg:h-14 lg:w-14  text-center bg-gray-600 cursor-pointer"
        >
          <p className="text-white font-bold">Logo</p>
        </Link>
        <div className="pt-2 hidden md:block lg:block">
          <div className="flex gap-4 md:gap-10 lg:gap-16 py-2 overflow-hidden">
            <Link href="/">
              <p className="hover:text-primary-500 cursor-pointer overflow-hidden">
                Home
              </p>
            </Link>
            <Link href="/about">
              <p className="hover:text-primary-500 cursor-pointer overflow-hidden">
                About
              </p>
            </Link>
            <Link href="/blog">
              <p className="hover:text-primary-500 cursor-pointer overflow-hidden">
                Blog
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-primary-500 cursor-pointer overflow-hidden">
                Contact
              </p>
            </Link>
            <div>
              <Theme />
            </div>
          </div>
        </div>
        <Link href="/book" className="hidden lg:block md:block">
          <div className="border font-bold w-[100px] h-14 py-2 bg-primary-500 pt-[14px] rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300">
            Book
          </div>
        </Link>
        <div className="md:hidden lg:hidden">
          {open ? (
            <div
              onClick={() => setOpen(!open)}
              className="w-14 h-14 px-3 pt-1"
            >
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="css-i6dzq1"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setOpen(!open)}
              className="w-14 h-14 px-3 pt-1"
            >
              <svg
                viewBox="0 0 24 24"
                width="30"
                height="30"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="css-i6dzq1"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          )}
        </div>
      </div>
      {!open && (
        <div className="flex justify-center pt-1 ">
          <div className="w-[70%] md:hidden lg:hidden font-semibold bg-white shadow-md border dark:bg-gray-800 dark:shadow-white text-center py-3 rounded-lg absolute">
            <div className="flex justify-end pr-5">
              <Theme />
            </div>
            <div className="pb-1">
              <Link onClick={() => setOpen(!open)} href="/">Home</Link>
            </div>
            <div onClick={() => setOpen(!open)} className="pb-1">
              <Link href="/about">About</Link>
            </div>
            <div className="pb-1">
              <Link onClick={() => setOpen(!open)} href="/blog">Blog</Link>
            </div>
            <div className="pb-2">
              <Link onClick={() => setOpen(!open)} href="/contact">Contact</Link>
            </div>
            <div>
              <Link onClick={() => setOpen(!open)} href="/book" className="flex justify-center">
                <div className="border font-bold w-[100px] h-10 py-2 bg-primary-500 rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300">
                  Book
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
