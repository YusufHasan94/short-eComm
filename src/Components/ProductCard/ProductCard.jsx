import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import React, { useState } from "react";
import ProductDetails from "../ProductDetails/ProductDetails";

const ProductCard = ({ handleCart, product }) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const disCountPrice =
    parseFloat(product?.price) -
    (parseFloat(product?.discountPercentage) / 100) *
      parseFloat(product?.price);

  const handleCartProduct = () => {
    handleCart(product, disCountPrice);
  };

  return (
    <div className="m-4 p-5 border bg-slate-100 rounded-lg">
      <div>
        <div className="mb-10 flex justify-center">
          <img
            src={product?.thumbnail}
            className="w-3/4 h-[250px] rounded-lg"
            alt=""
          />
        </div>
        <div className="text-start text-lg">
          <h1 className="text-xl font-semibold">{product?.title}</h1>
          <h1>
            Price: <del>${product?.price}</del>
          </h1>
          <h1>Discount Price: ${disCountPrice.toFixed(2)}</h1>
          <div className="w-1/4">
            <Rating className="size-10" value={product?.rating} readOnly />
          </div>
        </div>
        <div className="flex justify-end items-center text-lg gap-5 mt-4">
          <button
            type="button"
            onClick={openModal}
            className="bg-slate-300 px-5 py-1 rounded-lg text-black"
          >
            View Details
          </button>
          <button
            className="bg-blue-950 px-5 py-1 rounded-lg text-white"
            onClick={handleCartProduct}
          >
            Add to Cart
          </button>
        </div>
      </div>
      {isOpen ? (
        <ProductDetails
          isOpen={isOpen}
          closeModal={closeModal}
          product={product}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductCard;
