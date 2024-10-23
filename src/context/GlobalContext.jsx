import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const initialContext = {
  darkTheme: "alio",
  apiData: [],
  moreInformationSelectedEmployee: {
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    customerIdentificationCode: "",
  },
  fetchApiData: () => {},
  handleMoreInformation: () => {},
};
export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [darkTheme, setdarkTheme] = useState(initialContext.darkTheme);
  const [apiData, setApiData] = useState(initialContext.apiData);

  const [moreInformationSelectedEmployee, setMoreInformationSelectedEmployee] =
    useState(initialContext.apiData);

  useEffect(() => {
    fetchApiData();
  }, []);

  async function fetchApiData() {
    const url = "https://hiring-api.simbuka.workers.dev";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  function handleMoreInformation(employee) {
    setMoreInformationSelectedEmployee(employee);
  }
  console.log(moreInformationSelectedEmployee);

  const value = {
    darkTheme,
    apiData,
    handleMoreInformation,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
