import { useState, useEffect, useContext } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { FaFilter } from "react-icons/fa";
import { IoMdFemale, IoMdMale } from "react-icons/io";

const FilterComponent = ({ customersList, setCustomersListForDisplay }) => {
  const { darkMode } = useContext(GlobalContext);
  const [filterActive, setFilterActive] = useState(false);
  const [filterInputByFirstName, setFilterInputByFirstName] = useState("");
  const [filterInputByLastName, setFilterInputByLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState(null);

  useEffect(() => {
    handleFilterCancel();
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
    setSelectedGender(null);
  };

  return (
    <>
      <div className={style.listHeaderFilterRow}>
        <div className={style.filterField}>
          <input
            className={style.filterInput}
            data-darkmode={darkMode}
            type="text"
            placeholder="Filter by name"
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
            data-darkmode={darkMode}
            value={filterInputByLastName}
            onChange={(e) => handleFilterByLastName(e.target.value)}
            required
          >
            <option value="" disabled>
              Filter by last name
            </option>
            {customersList.map((customer, index) => (
              <option key={index} value={customer.lastName}>
                {customer.lastName}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={() => {
              handleFilterByGender("Female");
              setSelectedGender(1);
            }}
            className={style.genderButton}
            data-selected={selectedGender === 1}
          >
            <IoMdFemale />
          </button>

          <button
            onClick={() => {
              handleFilterByGender("Male");
              setSelectedGender(2);
            }}
            className={style.genderButton}
            data-selected={selectedGender === 2}
          >
            <IoMdMale />
          </button>
        </div>
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
