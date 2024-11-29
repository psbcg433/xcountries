import React, { useCallback } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CountryGrid from "./CountryGrid";
import SearchBar from "./SearchBar";
const Homepage = () => {
  const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";
  const [completeCountryDataList, setCompleteCountryDataList] = useState([]);
  const [countryDataList, setCountryDataList] = useState([]);
  const [searcValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countryapiresult = await axios.get(API_ENDPOINT);
        const countrydata = await countryapiresult.data;
        setCountryDataList(countrydata);
        setCompleteCountryDataList(countrydata);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleChange = useCallback(
    debounce((querry) => {
      console.log("Querry:", querry);
      if(querry.trim()==="")
      {
        console.log(completeCountryDataList)
        setCountryDataList(completeCountryDataList)
      }
      else
      {
        const filterdDataList = completeCountryDataList.filter((country)=>country.name.toLowerCase().includes(querry.toLowerCase()))
        console.log(filterdDataList)
        setCountryDataList(filterdDataList)
    } 
      
    }, 1000),[completeCountryDataList]
  );

  const onSearchChange = (querry) => {
    setSearchValue(querry);
    handleChange(querry);
  };

  return (
    <div>
      <SearchBar searchValue={searcValue} onSearchChange={onSearchChange} />
      <CountryGrid countryDataList={countryDataList} />
    </div>
  );
};

export default Homepage;
