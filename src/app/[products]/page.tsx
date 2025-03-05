import { ProductCard } from "@/components/ui/ProductCard";
import React from "react";
import { ProductList } from "@/Data/Product";

const Products = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
        {ProductList.map((product, index) => (
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

export default Products;
