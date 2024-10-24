import { useState } from "react";
import style from "./List.module.css";
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const SortingComponent = ({
  customersListForDisplay,
  setCustomersListForDisplay,
}) => {
  const [sortByFirstName, setSortByFirstName] = useState(true);
  const [sortByLastName, setSortByLastName] = useState(true);

  const handleSortByFirstName = () => {
    const sortedList = [...customersListForDisplay].sort((a, b) => {
      return sortByFirstName
        ? a.firstName > b.firstName
          ? 1
          : -1
        : a.firstName < b.firstName
        ? 1
        : -1;
    });
    setCustomersListForDisplay(sortedList);
    setSortByFirstName(!sortByFirstName);
  };

  const handleSortByLastName = () => {
    const sortedList = [...customersListForDisplay].sort((a, b) => {
      return sortByLastName
        ? a.lastName > b.lastName
          ? 1
          : -1
        : a.lastName < b.lastName
        ? 1
        : -1;
    });

    setCustomersListForDisplay(sortedList);
    setSortByLastName(!sortByLastName);
  };

  return (
    <div className={style.listHeaderTopRow}>
      <div className={style.headerTitle}>
        <p>First Name</p>
        <button
          type="button"
          onClick={handleSortByFirstName}
          className={style.sortButton}
        >
          {sortByFirstName ? <FaSortAlphaDownAlt /> : <FaSortAlphaDown />}
        </button>
      </div>
      <div className={style.headerTitle}>
        <p>Last Name</p>
        <button
          type="button"
          onClick={handleSortByLastName}
          className={style.sortButton}
        >
          {sortByLastName ? <FaSortAlphaDownAlt /> : <FaSortAlphaDown />}
        </button>
      </div>
    </div>
  );
};

export default SortingComponent;
