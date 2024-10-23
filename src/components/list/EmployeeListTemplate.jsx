import { useContext, useEffect, useState } from "react";

import { GlobalContext } from "../../context/GlobalContext";

const EmployeeListTemplate = () => {
  const { darkTheme, apiData } = useContext(GlobalContext);
  console.log(apiData);

  return (
    <>
      {apiData.map((employee) => (
        <p key={employee.customerIdentificationCode}>{employee.firstName}</p>
      ))}
    </>
  );
};

export default EmployeeListTemplate;
