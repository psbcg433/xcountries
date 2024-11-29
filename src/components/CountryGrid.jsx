import React from "react";
import CountryCard from "./CountryCard";

const CountryGrid = ({ countryDataList }) => {
  return (
    <div className="countryGrid">
      {countryDataList.map((country, index) => (
        <CountryCard
          key={`${country.abbr}-${index}`}
          countryflag={country.flag}
          countryname={country.name}
        />
      ))}
    </div>
  );
};

export default CountryGrid;
