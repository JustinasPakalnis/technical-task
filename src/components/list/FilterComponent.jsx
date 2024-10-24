import { useState, useEffect } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { FaFilter } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const FilterComponent = ({ customersList, setCustomersListForDisplay }) => {
  const [filterActive, setFilterActive] = useState(false);
  const [filterInputByFirstName, setFilterInputByFirstName] = useState("");
  const [filterInputByLastName, setFilterInputByLastName] = useState("");

  useEffect(() => {
    setFilterActive(false);
    setFilterInputByFirstName("");
    setFilterInputByLastName("");
  }, []);

  const handleFilterByFirstName = () => {
    if (filterInputByFirstName !== "") {
      setCustomersListForDisplay(
        customersList.filter((customer) =>
          customer.firstName
            .toLowerCase()
            .includes(filterInputByFirstName.toLowerCase())
        )
      );
      setFilterActive(true);
      setFilterInputByLastName("");
    }
  };

  const handleFilterByLastName = (value) => {
    setFilterInputByLastName(value);
    setCustomersListForDisplay(
      customersList.filter((customer) =>
        customer.lastName.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilterActive(true);
    setFilterInputByFirstName("");
  };

  const handleFilterByGender = (gender) => {
    setCustomersListForDisplay(
      customersList.filter((customer) => customer.gender === gender)
    );
    setFilterActive(true);
  };

  const handleFilterCancel = () => {
    setCustomersListForDisplay([...customersList]);
    setFilterActive(false);
    setFilterInputByFirstName("");
    setFilterInputByLastName("");
  };

  return (
    <>
      <div className={style.listHeaderFilterRow}>
        <div className={style.filterField}>
          <input
            className={style.filterInput}
            type="text"
            placeholder="Filter by first name"
            value={filterInputByFirstName}
            onChange={(e) => setFilterInputByFirstName(e.target.value)}
          />
          <button
            onClick={handleFilterByFirstName}
            className={style.filterButton}
          >
            <FaFilter />
          </button>
        </div>
        <div className={style.filterField}>
          <select
            className={style.filterInput}
            value={filterInputByLastName}
            onChange={(e) => handleFilterByLastName(e.target.value)}
            required
          >
            <option value="" disabled>
              Select last name
            </option>
            {customersList.map((customer, index) => (
              <option key={index} value={customer.lastName}>
                {customer.lastName}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => handleFilterByGender("Female")}
          className={style.genderButton}
        >
          <IoMdFemale />
        </button>

        <button
          onClick={() => handleFilterByGender("Male")}
          className={style.genderButton}
        >
          <IoMdMale />
        </button>
      </div>
      <div>
        {filterActive && (
          <ButtonSmall onClick={handleFilterCancel} text="Remove filter" />
        )}
      </div>
    </>
  );
};

export default FilterComponent;
