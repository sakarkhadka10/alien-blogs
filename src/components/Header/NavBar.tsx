"use client";
import Image from "next/image";
import logoDark from "@/assets/logo/logo-dark.png";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import NavBarSideBar from "../ui/NavBarSideBar";

const NavBar = () => {
  const navItems = ["home", "Features", "About", "Contacts"];
  const [open, setOpen] = useState(false);
  return (
    <div className="font-fredoka font-normal ">
      <div className="hidden lg:block">
        <div className="w-full px-14 py-4">
          <div className="flex justify-between items-center">
            {/* Logo  */}
            <div>
              <Image
                src={logoDark}
                alt="Dark Logo"
                width={200}
                height={80}
                priority
                className="w-36"
              />
            </div>
            {/* For Desktop */}
            <div className="flex justify-center items-center gap-9 uppercase text-  xl">
              {navItems.map((item, index) => {
                return (
                  <div key={index}>
                    <a href="#">{item}</a>
                  </div>
                );
              })}
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
