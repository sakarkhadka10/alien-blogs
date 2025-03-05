import Image, { StaticImageData } from "next/image";
import React from "react";
import {
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXmark,
} from "react-icons/fa6";
import AnimatedButton from "./AnimatedButton";

interface NavBarSideBarProps {
  navOpen: boolean;
  image: StaticImageData;
  onClose: () => void;
}

const NavBarSideBar = ({ navOpen, image, onClose }: NavBarSideBarProps) => {
  const socials = [
    { name: "linkedine", link: "https:google.com", icon: FaLinkedin },
    { name: "google", link: "https:google.com", icon: FaGoogle },
    { name: "instagram", link: "https:google.com", icon: FaInstagram },
    { name: "tiktok", link: "https:google.com", icon: FaTiktok },
  ];
  const navItems = ["home", "Features", "About", "Contacts"];

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          navOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-[var(--color-dark)] px-4 py-4 
          transform transition-all duration-300 ease-in-out z-55
          ${navOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center">
          <div>
            <Image src={image} alt="logo" width={132} height={40} priority />
          </div>
          <div className="text-2xl">
            <button onClick={onClose}>
              <FaXmark />
            </button>
          </div>
        </div>

        <div className="py-14 flex flex-col justify-between h-full">
          <div className="text-xl uppercase">
            {navItems.map((list, index) => {
              return (
                <div key={index}>
                  <a href="#">
                    <h2 className="pr-[20px] w-[calc(100% - 20px)] mb-6">
                      {list}
                    </h2>
                  </a>
                </div>
              );
            })}
            <AnimatedButton title="SignUp" />
          </div>
        </div>

        {/* Social Media Icons and Theme Toggle */}
        <div className="absolute bottom-0 w-[250px] bg-[var(--color-dark)] p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              {socials.map(({ name, link, icon: Icon }, index) => {
                return (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    aria-label={name}
                    className="text-white text-xl hover:text-gray-300 transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
            <div>
              {/* Theme Toggle (Light/Dark Mode Switch) */}
              <button className="text-white text-2xl hover:text-gray-300 transition-colors">
                <span>🌙</span>{" "}
                {/* Moon icon for dark mode - toggle this with ☀️ for light mode */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBarSideBar;
