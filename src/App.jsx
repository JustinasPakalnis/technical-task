import { useState, useContext } from "react";
import "./App.css";
import { ContextWrapper } from "./context/GlobalContext.jsx";
import MainPage from "./pages/MainPage.jsx";
function App() {
  return (
    <>
      <ContextWrapper>
        <MainPage></MainPage>
      </ContextWrapper>
    </>
  );
}

export default App;
