import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import FilterComponent from "./FilterComponent.jsx";
import SortingComponent from "./SortingComponent.jsx";
import SearchComponent from "./SearchComponent.jsx";
import PaginationComponent from "./PaginationComponent.jsx";
const CustomerListTemplate = () => {
  const { customersList, handleMoreInformation, darkMode } =
    useContext(GlobalContext);
  const [customersListForDisplay, setCustomersListForDisplay] = useState([]);

  useEffect(() => {
    setCustomersListForDisplay([...customersList]);
  }, [customersList]);

  return (
    <section className={style.mainListContainer} data-darkmode={darkMode}>
      <div className={style.listContainer} data-darkmode={darkMode}>
        <SearchComponent
          customersList={customersList}
          setCustomersListForDisplay={setCustomersListForDisplay}
        ></SearchComponent>
        <div className={style.listHeader} data-darkmode={darkMode}>
          <SortingComponent
            customersList={customersList}
            customersListForDisplay={customersListForDisplay}
            setCustomersListForDisplay={setCustomersListForDisplay}
          />
          <FilterComponent
            customersList={customersList}
            customersListForDisplay={customersListForDisplay}
            setCustomersListForDisplay={setCustomersListForDisplay}
          />
        </div>
        {customersListForDisplay.length > 0 ? (
          customersListForDisplay.map((customer) => (
            <div
              key={customer.customerIdentificationCode}
              className={style.listElement}
              data-darkmode={darkMode}
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
      <PaginationComponent></PaginationComponent>
    </section>
  );
};

export default CustomerListTemplate;
