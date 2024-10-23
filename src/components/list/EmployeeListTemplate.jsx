import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
const EmployeeListTemplate = () => {
  const { darkTheme, apiData, handleMoreInformation } =
    useContext(GlobalContext);

  return (
    <>
      <div className={style.listContainer}>
        <div className={style.listHeader}>
          <p className={style.headerTitle}>First Name</p>
          <p className={style.headerTitle}>Last Name</p>
        </div>
        {apiData.map((employee) => (
          <>
            <div
              key={employee.customerIdentificationCode}
              className={style.listElement}
            >
              <div className={style.listData}>
                <p className={style.listItem}>{employee.firstName}</p>
                <p className={style.listItem}>{employee.lastName}</p>
              </div>
              <div>
                <ButtonSmall
                  onClick={() => handleMoreInformation(employee)}
                  text={"More"}
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default EmployeeListTemplate;
