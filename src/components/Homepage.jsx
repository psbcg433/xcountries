import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import CountryGrid from "./CountryGrid";
import SearchBar from "./SearchBar";

const Homepage = () => {
  const API_ENDPOINT = "https://restcountries.com/v3.1/all";
  const [completeCountryDataList, setCompleteCountryDataList] = useState([]);
  const [countryDataList, setCountryDataList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_ENDPOINT);
        if (Array.isArray(data)) {
          setCompleteCountryDataList(data);
          setCountryDataList(data);
        } else {
          console.error("Unexpected API response:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleChange = useCallback(
    debounce((query) => {
      if (query.trim() === "") {
        setCountryDataList(completeCountryDataList);
      } else {
        const filteredList = completeCountryDataList.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
        setCountryDataList(filteredList);
      }
    }, 500),
    [completeCountryDataList]
  );

  const onSearchChange = (query) => {
    setSearchValue(query);
    handleChange(query);
  };

  return (
    <div>
      <SearchBar searchValue={searchValue} onSearchChange={onSearchChange} />
      <CountryGrid countryDataList={countryDataList} />
    </div>
  );
};

export default Homepage;
