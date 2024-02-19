import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Search from "../Search/Search";
import PriceFilter from "../PriceFilter/PriceFilter";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setFilterProducts(data.products);
      });
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product?.title.toLowerCase().includes(searchItem.toLowerCase())
    );
    setFilterProducts(filtered);

    const max = products.reduce((max, product) => {
      return product.price > max ? product.price : max;
    }, 0);
    setMaxPrice(max);
  }, [searchItem, products]);

  const handlePriceFilter = (min, max) => {
    const filterWithPrice = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilterProducts(filterWithPrice);
  };

  const handleCart = (product, discountPrice) => {
    if (cartProducts.find((items) => items.id === product.id)) {
      Swal.fire({
        icon: "warning",
        title: "Warning!",
        text: "product already added in cart",
      });
    } else {
      const newCartProducts = [
        ...cartProducts,
        { ...product, quantity: 1, discountPrice: parseFloat(discountPrice) },
      ];
      setCartProducts(newCartProducts);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "product added on cart successfully",
      });
    }
  };

  const incrementQuantity = (pId) => {
    const updateProducts = cartProducts.map((product) =>
      product.id == pId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCartProducts(updateProducts);
  };
  const decrementQuantity = (pId) => {
    const updateProducts = cartProducts.map((product) =>
      product.id == pId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCartProducts(updateProducts);
  };

  const calculateTotalBill = () => {
    return cartProducts.reduce((total, item) => {
      return total + item.discountPrice * item.quantity;
    }, 0);
  };

  const toggleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="my-10 text-center">
      <div className="w-full mb-10 flex flex-col md:flex-row justify-between items-center gap-5 mx-5">
        <h1 className="text-4xl font-semibold">Short-eComm</h1>
        <Search setSearchItem={setSearchItem} />
        <div className="w-full md:w-fit flex justify-end">
          <div onClick={toggleCartOpen} className="cursor-pointer">
            {cartOpen ? (
              <IoMdCloseCircleOutline className="text-4xl" />
            ) : (
              <div className="flex gap-1 text-2xl relative">
                <FaShoppingCart className="text-4xl" />
                <h1 className="absolute -top-6 right-0">
                  {cartProducts.length}
                </h1>
              </div>
            )}
          </div>
          <Cart
            cartProducts={cartProducts}
            cartOpen={cartOpen}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            calculateTotalBill={calculateTotalBill}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start">
        <div className="w-full md:w-fit flex justify-center">
          <PriceFilter
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            handlePriceFilter={handlePriceFilter}
          />
        </div>
        <Product products={filterProducts} handleCart={handleCart} />
      </div>
    </div>
  );
};

export default Home;
