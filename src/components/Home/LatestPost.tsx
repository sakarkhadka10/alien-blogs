import React from "react";
import AnimatedButton from "../ui/AnimatedButton";
import Posts from "@/app/[posts]/page";
import { ProductList } from "@/Data/Product";

const LatestPost = () => {
  const limitedpost = ProductList.slice(0, 9);
  return (
    <>
      <div className="w-full px-16 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Latest Post</h1>
          </div>
          <div>
            <AnimatedButton title="View More" />
          </div>
        </div>

        {/* Post Starts From Here */}
        <div>
          <Posts items={limitedpost} />
        </div>
      </div>
    </>
  );
};

export default LatestPost;
