import Image from "next/image";
import React from "react";
import AnimatedButton from "../ui/AnimatedButton";

const Hero = () => {
  return (
    <div className="w-full h-full mt-6 font-heebo flex justify-center">
      <div className="bg-[#c9e4de] w-[90vw] rounded-sm grid py-4 lg:grid-cols-2 place-items-center lg:px-16">
        <div>
          <Image
            src="/hero-image.webp"
            alt="hero image"
            width={500}
            height={500}
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-center text-black px-4 py-4 text-2xl font-semibold lg:text-4xl">
            Boost Your Web & Business with Ready-to-Use Digital Assets!
          </h1>

          <div className="flex gap-1.5 sm:gap-4 mb-8 lg:mb-0">
            <AnimatedButton title="React" />
            <AnimatedButton title="Next Js" />
            <AnimatedButton title="HTML" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
