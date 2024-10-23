import { useState, useContext } from "react";
import "./App.css";
import { ContextWrapper, GlobalContext } from "./context/GlobalContext.jsx";
import EmployeeListTemplate from "./components/list/EmployeeListTemplate.jsx";
function App() {
  return (
    <>
      <ContextWrapper>
        <EmployeeListTemplate></EmployeeListTemplate>
      </ContextWrapper>
    </>
  );
}

export default App;
