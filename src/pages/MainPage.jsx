import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext.jsx";
import CustomerListTemplate from "../components/list/CustomerListTemplate.jsx";
import Header from "../components/header/Header.jsx";
import MoreInfo from "../components/employee_info/MoreInfo.jsx";
const MainPage = () => {
  const { moreInformationSelectedEmployee, darkMode } =
    useContext(GlobalContext);

  return (
    <>
      <Header></Header>
      <main className="mainPageContainer" data-darkmode={darkMode}>
        <CustomerListTemplate />
        <MoreInfo></MoreInfo>
      </main>
    </>
  );
};

export default MainPage;
