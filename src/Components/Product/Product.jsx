import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const Product = ({ handleCart, products }) => {
  return (
    <div>
      <h1 className="uppercase  text-4xl my-10">product list</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} handleCart={handleCart} />
        ))}
      </div>
    </div>
  );
};

export default Product;
