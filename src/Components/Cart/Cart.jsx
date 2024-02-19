import React from "react";
import CartModal from "../CartModal/CartModal";

const Cart = ({
  cartProducts,
  cartOpen,
  incrementQuantity,
  decrementQuantity,
  calculateTotalBill,
}) => {
  return (
    <div className="relative">
      <div className="absolute top-10 right-2 z-50">
        {cartOpen ? (
          <CartModal
            cartProducts={cartProducts}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            calculateTotalBill={calculateTotalBill}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
