import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";
import CustomerListTemplate from "../components/list/CustomerListTemplate.jsx";
import MoreInfo from "../components/employee_info/MoreInfo.jsx";
const MainPage = () => {
  const { moreInformationSelectedEmployee } = useContext(GlobalContext);

  return (
    <main className="mainPageContainer">
      <CustomerListTemplate />
      <MoreInfo></MoreInfo>
    </main>
  );
};

export default MainPage;
