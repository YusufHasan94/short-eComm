import React, { useState } from "react";

const PriceFilter = ({
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  handlePriceFilter,
}) => {
  const handleFilter = () => {
    handlePriceFilter(minPrice, maxPrice);
  };

  return (
    <div className="flex flex-col items-end gap-5 mt-36">
      <input
        type="number"
        name=""
        id=""
        className="border border-gray-300 rounded-lg p-1"
        placeholder="min price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <input
        type="number"
        name=""
        id=""
        className="border border-gray-300 rounded-lg p-1"
        placeholder="max price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button
        className="px-5 py-2 bg-blue-950 text-white text-lg rounded-lg"
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
};

export default PriceFilter;
