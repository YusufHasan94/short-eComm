import React, { useState } from "react";

const CartCard = ({ product, index }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="text-white mb-5">
      <div className="flex justify-between items-center">
        <h1 className="text-xl">{index + 1}</h1>
        <div className="flex gap-4">
          <img
            src={product?.thumbnail}
            className="w-[50px] h-[50px] rounded-lg"
            alt=""
          />
          <h1 className="text-xl">{product.title}</h1>
        </div>
        <div className="flex justify-center items-center gap-2 text-xl">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity == 1 ? true : false}
            className="text-2xl"
          >
            -
          </button>
          <h1 className="border size-8 bg-white text-black rounded-md">
            {quantity}
          </h1>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <div>
          <h1 className="text-xl">
            $
            {(
              parseInt(quantity) *
              (parseFloat(product?.price) -
                (parseFloat(product?.discountPercentage) / 100) *
                  parseFloat(product?.price))
            ).toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
