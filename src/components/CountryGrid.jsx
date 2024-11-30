import React from "react";
import CountryCard from "./CountryCard";

const CountryGrid = ({ countryDataList }) => {
  return (
    <div className="countryGrid">
      {countryDataList.length > 0 ? (
        countryDataList.map((country) => (
          <CountryCard
            key={country.cca3} 
            countryflag={country.flags.png}
            countryname={country.name.common}
          />
        ))
      ) : (
        ''
      )}
    </div>
  );
};

export default CountryGrid;
