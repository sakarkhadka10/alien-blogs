import { ProductCard } from "@/components/ui/ProductCard";
import React from "react";
import { ProductList } from "@/Data/Product";

interface Product {
  title: string;
  shortDescription: string;
  admin: string;
  category: string;
}

interface PostsProps {
  items: Product[];
}
const Posts = ({ items }: PostsProps) => {
  const productToDisplay = items || ProductList;
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4 py-6">
        {productToDisplay.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            shortDescription={product.shortDescription}
            admin={product.admin}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
