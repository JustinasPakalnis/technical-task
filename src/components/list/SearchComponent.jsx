import { useState, useEffect } from "react";
import style from "./List.module.css";
import { FaSearch } from "react-icons/fa";
const SearchComponent = ({ setCustomersListForDisplay, customersList }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText("");
  }, []);

  const handleSearch = () => {
    setCustomersListForDisplay(
      customersList.filter(
        (customer) =>
          customer.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
          customer.lastName.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className={style.searchContainer}>
      <input
        className={style.filterInput}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search"
      />
      <button className={style.searchButton} onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchComponent;
