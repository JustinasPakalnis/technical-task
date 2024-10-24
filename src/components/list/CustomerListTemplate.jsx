import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import FilterComponent from "./FilterComponent.jsx";
import SortingComponent from "./SortingComponent.jsx";

const CustomerListTemplate = () => {
  const { customersList, handleMoreInformation } = useContext(GlobalContext);
  const [customersListForDisplay, setCustomersListForDisplay] = useState([]);

  useEffect(() => {
    setCustomersListForDisplay([...customersList]);
  }, [customersList]);

  return (
    <div className={style.listContainer}>
      <div className={style.listHeader}>
        <SortingComponent
          customersListForDisplay={customersListForDisplay}
          setCustomersListForDisplay={setCustomersListForDisplay}
        />
        <FilterComponent
          customersList={customersList}
          setCustomersListForDisplay={setCustomersListForDisplay}
        />
      </div>

      {customersListForDisplay.length > 0 ? (
        customersListForDisplay.map((customer) => (
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
        ))
      ) : (
        <p className={style.emptyListMessage}>Sorry, list is empty...</p>
      )}
    </div>
  );
};

export default CustomerListTemplate;