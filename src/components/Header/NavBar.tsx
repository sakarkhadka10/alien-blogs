"use client";
import Image from "next/image";
import logoDark from "@/assets/logo/logo-dark.png";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import NavBarSideBar from "../ui/NavBarSideBar";
import Link from "next/link";

const NavBar = () => {
  const navItems = [
    { title: "Home", link: "/" },
    { title: "Posts", link: "/posts" },
    { title: "About", link: "/" },
    { title: "Contacts", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="font-fredoka font-normal ">
      <div className="hidden lg:block">
        <div className="w-full px-4 lg:px-14 py-4">
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <Link href="/">
              <Image
                src={logoDark}
                alt="Dark Logo"
                width={200}
                height={80}
                priority
                className="w-36"
              />
            </Link>
            {/* For Desktop */}
            <div className="flex justify-center items-center gap-9 uppercase text-lg">
              {navItems.map((item, index) => (
                <div key={index}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center gap-4">
              <FaMagnifyingGlass className="text-lg" />
              <Link href="/auth/login">
                <button className="px-4 py-1 bg-amber-200 rounded-md text-xl text-dark font-normal cursor-pointer">
                  Account
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Responsive Nav Bar */}
      <div className="lg:hidden px-6 py-4 w-full">
        <div className="flex items-center justify-between">
          <div>
            <button onClick={() => setOpen(!open)}>
              <FaBars className="text-xl" />
            </button>
          </div>
          <div>
            <Image
              src={logoDark}
              alt="Dark Logo"
              width={132}
              height={40}
              priority
            />
          </div>
          <div>
            <FaMagnifyingGlass className="text-xl " />
          </div>
        </div>
        <NavBarSideBar
          navOpen={open}
          image={logoDark}
          onClose={() => setOpen(false)}
        />
      </div>
    </div>
  );
};

export default NavBar;
