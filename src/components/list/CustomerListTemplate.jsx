import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
const CustomerListTemplate = () => {
  const { darkTheme, customersList, handleMoreInformation } =
    useContext(GlobalContext);

  const [sortByName, setSortByName] = useState(true);
  const [sortByLastName, setSortByLastName] = useState(true);
  const [customersListForDisplay, setCustomersListForDisplay] =
    useState(customersList);

  function handleSortByFirstName() {
    setCustomersListForDisplay(
      customersList.sort((a, b) => {
        if (sortByName) {
          if (a.firstName < b.firstName) {
            return 1;
          }
          if (a.firstName > b.firstName) {
            return -1;
          }
        } else {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
        }
        return 0;
      })
    );
    setSortByName(!sortByName);
  }

  function handleSortByLastName() {
    setCustomersListForDisplay(
      customersList.sort((a, b) => {
        if (sortByLastName) {
          if (a.lastName < b.lastName) {
            return 1;
          }
          if (a.lastName > b.lastName) {
            return -1;
          }
        } else {
          if (a.lastName < b.lastName) {
            return -1;
          }
          if (a.lastName > b.lastName) {
            return 1;
          }
        }
        return 0;
      })
    );
    setSortByLastName(!sortByLastName);
  }

  return (
    <>
      <div className={style.listContainer}>
        <div className={style.listHeader}>
          <div className={style.headerTitle}>
            <p>First Name</p>
            {sortByName ? (
              <FaSortAlphaDown onClick={handleSortByFirstName} />
            ) : (
              <FaSortAlphaDownAlt onClick={handleSortByFirstName} />
            )}
          </div>
          <div className={style.headerTitle}>
            <p>Last Name</p>
            {sortByLastName ? (
              <FaSortAlphaDown onClick={handleSortByLastName} />
            ) : (
              <FaSortAlphaDownAlt onClick={handleSortByLastName} />
            )}
          </div>
        </div>
        {customersListForDisplay.map((customer) => (
          <div
            key={customer.customerIdentificationCode}
            className={style.listElement}
          >
            <div className={style.listData}>
              <p className={style.listItem}>{customer.firstName}</p>
              <p className={style.listItem}>{customer.lastName}</p>
            </div>
            <div>
              <ButtonSmall
                onClick={() => handleMoreInformation(customer)}
                text={"More"}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomerListTemplate;
