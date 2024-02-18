import React from "react";
import CartCard from "../CartCard/CartCard";
import { IoMdCloseCircleOutline } from "react-icons/io";

const CartModal = ({ cartProducts, toggleCartClose }) => {
  return (
    <div className="bg-slate-700 text-white min-h-screen lg:w-[750px] rounded-md relative">
      <div className="text-4xl text-gray-300 absolute top-0 right-0">
        <button onClick={toggleCartClose}>
          <IoMdCloseCircleOutline />
        </button>
      </div>
      <h1 className="text-4xl py-10">My Cart</h1>
      <div className="flex justify-between text-xl px-5">
        <h1>SN</h1>
        <h1>Product</h1>
        <h1>Quantity</h1>
        <h1>Total Price</h1>
      </div>
      <hr className="m-5" />
      <div className="px-5">
        {cartProducts.map((product, index) => (
          <CartCard key={product.id} product={product} index={index} />
        ))}
      </div>
      <div className="absolute bottom-5 w-full">
        <hr className="m-5" />
        <div className="flex justify-between px-5 text-xl">
          <h1>Total Price: </h1>
          <h1>$1000</h1>
        </div>
        <div className="my-10 mr-10 text-end">
          <button className="bg-slate-300 text-black px-5 py-2 rounded-md font-semibold ">
            Add to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
