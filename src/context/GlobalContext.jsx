import { createContext, useEffect, useState } from "react";

export const initialContext = {
  darkTheme: false,
  customersList: [],
  selectedCustomerInformation: null,
  page: 0,
  pageSize: 10,
  fetchApiData: () => {},
  handleMoreInformation: () => {},
  handleMoreInformationClose: () => {},
};
export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [darkTheme, setdarkTheme] = useState(initialContext.darkTheme);
  const [page, setPage] = useState(initialContext.page);
  const [pageSize, setPageSize] = useState(initialContext.pageSize);
  const [customersList, setCustomersList] = useState(
    initialContext.customersList
  );

  const [selectedCustomerInformation, setSelectedCustomerInformation] =
    useState(initialContext.selectedCustomerInformation);

  useEffect(() => {
    fetchCustomersList();
  }, [page, pageSize]);

  async function fetchCustomersList() {
    const url = `https://hiring-api.simbuka.workers.dev/?page=${page}&size=${pageSize}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setCustomersList(data);
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(customersList);

  function handleMoreInformation(customer) {
    setSelectedCustomerInformation(customer);
  }
  function handleMoreInformationClose() {
    setSelectedCustomerInformation(null);
  }

  const value = {
    darkTheme,
    customersList,
    handleMoreInformation,
    handleMoreInformationClose,
    selectedCustomerInformation,
    page,
    setPage,
    pageSize,
    setPageSize,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
