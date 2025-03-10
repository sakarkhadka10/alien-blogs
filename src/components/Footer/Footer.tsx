import React from "react";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full font-fredoka">
        <div className="bg-[#ffebd0] px-16 py-6">
          <div className="text-center space-y-2 text-dark">
            <h1 className="text-3xl font-bold">AlienBlogs</h1>
            <h3 className="text-xl font-normal">Providing Code From 2025</h3>
            <span>© 2025 Game Code Hub. All rights reserved.</span>
            <div className="flex items-center justify-center text-4xl gap-2 mt-2">
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
