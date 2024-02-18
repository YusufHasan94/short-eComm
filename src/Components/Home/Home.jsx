import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Search from "../Search/Search";
import PriceFilter from "../PriceFilter/PriceFilter";
import Cart from "../Cart/Cart";
import Swal from "sweetalert2";

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

  const handleCart = (product) => {
    if (cartProducts.find((items) => items.id === product.id)) {
      Swal.fire({
        icon: "warning",
        title: "Warning!",
        text: "product already added in cart",
      });
    } else {
      const newCartProducts = [...cartProducts, product];
      setCartProducts(newCartProducts);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "product added on cart successfully",
      });
    }
  };

  const toggleCartClose = () => {
    setCartOpen(false);
  };

  const toggleCartOpen = () => {
    setCartOpen(true);
  };

  return (
    <div className="my-10 text-center">
      <div className="mb-10 flex justify-between items-center gap-5">
        <h1 className="text-4xl font-semibold">Short-eComm</h1>
        <Search setSearchItem={setSearchItem} />
        <button onClick={toggleCartOpen}>
          <Cart
            cartProducts={cartProducts}
            cartOpen={cartOpen}
            toggleCartClose={toggleCartClose}
          />
        </button>
      </div>
      <div className="flex gap-5 items-start">
        <PriceFilter
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          handlePriceFilter={handlePriceFilter}
        />
        <Product products={filterProducts} handleCart={handleCart} />
      </div>
    </div>
  );
};

export default Home;
