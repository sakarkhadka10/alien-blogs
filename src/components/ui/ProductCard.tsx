import Image from "next/image";

interface ProductCardProps {
  admin: string;
  category: string;
  title: string;
  shortDescription: string;
}

export const ProductCard = ({
  admin,
  category,
  title,
  shortDescription,
}: ProductCardProps) => {
  return (
    <>
      <div className="shadow-2xl px-2 py-2 border rounded-xl h-auto">
        <div className="space-y-4">
          <div className="relative">
            <Image
              src="/product/p1.webp"
              alt="product"
              width={400}
              height={225}
              className=" relative rounded-t-lg"
            />
            <h3 className="absolute top-2 left-2.5 text-black text-[.6rem] rounded-md bg-white font-bold  px-2 py-1">
              {category}
            </h3>
          </div>
          <div className="space-y-4 pb-4">
            <h4 className="font-fredoka text-sm">
              <button className="cursor-pointer hover:text-gray-300">
                {admin}
              </button>{" "}
              on <span>March 5, 2025</span>
            </h4>

            <h1 className="font-heebo text-2xl font-bold text-white">
              {title}
            </h1>
            <p className="font-fredoka text-sm text-gray-300 ">
              {shortDescription}
            </p>
            <button className="bg-[#a6d5c1] px-4 py-1 rounded-md text-dark font-bold">
              Continue Reading
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
