import React from "react";

const SearchBar = ({ searchValue, onSearchChange }) => {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search for a country"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
