import React from "react";
import CountryCard from "./CountryCard";

const CountryGrid = ({ countryDataList }) => {
  console.log("DATA RECEIVED:", countryDataList);  // Log to check what data is coming in

  return (
    <div className="countryGrid">
      {countryDataList && countryDataList.length > 0 && (
        countryDataList.map((country, index) => (
          <CountryCard
            key={country.abbr ? `${country.abbr}-${index}` : index} // Use a unique key, combining abbr and index or just index
            countryflag={country.flag}
            countryname={country.name}
          />
        ))
      )
      // Handle case where no countries match the search
      }
    </div>
  );
};

export default CountryGrid;
