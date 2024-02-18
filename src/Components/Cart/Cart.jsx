import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "../CartModal/CartModal";

const Cart = ({ cartProducts, cartOpen, toggleCartClose }) => {
  return (
    <div className="relative">
      <div>
        <FaShoppingCart className="text-3xl" />
        <h1 className="text-2xl font-semibold absolute -top-5 -right-5">
          {cartProducts.length}
        </h1>
      </div>
      <div className="absolute -top-5 -right-5 z-50">
        {cartOpen ? (
          <CartModal
            cartProducts={cartProducts}
            toggleCartClose={toggleCartClose}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
