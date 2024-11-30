import React from "react";

const CountryCard = ({ countryflag, countryname }) => {
  return (
    <div className="countryCard">
      <img src={countryflag} alt={`${countryname} flag`} />
      <h4>{countryname}</h4>
    </div>
  );
};

export default CountryCard;
