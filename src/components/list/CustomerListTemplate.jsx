import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
const CustomerListTemplate = () => {
  const { darkTheme, customersList, handleMoreInformation } =
    useContext(GlobalContext);

  return (
    <>
      <div className={style.listContainer}>
        <div className={style.listHeader}>
          <div className={style.headerTitle}>
            <p>First Name</p>
            <FaSortAlphaDown className={style.ascendingName} />
            <FaSortAlphaDownAlt className={style.descendingName} />
          </div>
          <div className={style.headerTitle}>
            <p>Last Name</p>
            <FaSortAlphaDown className={style.ascendingLastName} />
            <FaSortAlphaDownAlt className={style.descendingLastName} />
          </div>
        </div>
        {customersList.map((customer) => (
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
