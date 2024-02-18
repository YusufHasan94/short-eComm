import React from "react";

const Search = ({ setSearchItem }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const searchItem = e.target.value;
    setSearchItem(searchItem);
  };
  return (
    <div>
      <input
        type="text"
        name="product"
        id=""
        className="border border-gray-400 rounded-lg p-1 w-72"
        onChange={handleSearch}
        placeholder="Search Products"
      />
    </div>
  );
};

export default Search;
