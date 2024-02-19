import CartCard from "../CartCard/CartCard";
import Swal from "sweetalert2";

const CartModal = ({
  cartProducts,
  calculateTotalBill,
  incrementQuantity,
  decrementQuantity,
}) => {
  const handleCheckout = () => {
    console.log("btn clicked");
    Swal.fire({
      icon: "success",
      title: "Need to payment",
      text: "Checkout on progress. Waiting for payment...",
    });
  };

  return (
    <div className="bg-slate-700 text-white min-h-screen w-[400px] md:w-[600px] lg:w-[1000px] rounded-md relative">
      <h1 className="text-4xl py-10">My Cart</h1>
      <div className="flex justify-between text-xl px-5">
        <h1 className="w-2/12">SN</h1>
        <h1 className="w-6/12 text-start">Product</h1>
        <h1 className="w-2/12">Quantity</h1>
        <h1 className="w-2/12 text-start">Total Price</h1>
      </div>
      <hr className="m-5" />
      <div className="px-5">
        {cartProducts.map((product, index) => (
          <CartCard
            key={product.id}
            product={product}
            index={index}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </div>
      <div className="absolute bottom-5 w-full">
        <hr className="m-5" />
        <div className="flex justify-between px-10 text-xl">
          <h1>Total Price: </h1>
          <h1>${calculateTotalBill().toFixed(2)}</h1>
        </div>
        <div className="my-10 mr-10 text-end">
          <button
            className="bg-slate-300 text-black px-5 py-2 rounded-md font-semibold"
            onClick={handleCheckout}
          >
            Add to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
