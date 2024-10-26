import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ContextWrapper, GlobalContext } from "./context/GlobalContext.jsx";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
function App() {
  const { isLogInAuthorized } = useContext(GlobalContext);
  return (
    <>
      <BrowserRouter>
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </ContextWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
