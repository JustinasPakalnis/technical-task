import { createContext, useEffect, useState } from "react";

export const initialContext = {
  darkTheme: false,
  customersList: [],
  selectedCustomerInformation: null,
  loading: true,
  page: 0,
  pageSize: 10,
  totalCustomersCount: 500,
  fetchApiData: () => {},
  handleMoreInformation: () => {},
  handleMoreInformationClose: () => {},
  getCustomersCount: () => {},
};
export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const [darkTheme, setdarkTheme] = useState(initialContext.darkTheme);
  const [page, setPage] = useState(initialContext.page);
  const [loading, setLoading] = useState(initialContext.loading);
  const [totalCustomersCount, setTotalCustomersCount] = useState(
    initialContext.totalCustomersCount
  );
  const [pageSize, setPageSize] = useState(initialContext.pageSize);
  const [customersList, setCustomersList] = useState(
    initialContext.customersList
  );

  const [selectedCustomerInformation, setSelectedCustomerInformation] =
    useState(initialContext.selectedCustomerInformation);

  useEffect(() => {
    fetchCustomersList();
  }, [page, pageSize]);

  // Used to check total amount of data. But causes delay on dynamic data loading. Would be great to have api for total count??
  // useEffect(() => {
  //   getCustomersCount();
  // }, []);
  // async function getCustomersCount() {
  //   let page = 0;
  //   let totalCustomersCount = 0;

  //   while (true) {
  //     const url = `https://hiring-api.simbuka.workers.dev/?page=${page}&size=10`;
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error(`Response status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       totalCustomersCount += data.length;
  //       if (data.length === 0) {
  //         break;
  //       }
  //       page++;
  //     } catch (error) {
  //       console.error(error.message);
  //       break;
  //     }
  //   }
  //   setTotalCustomersCount(totalCustomersCount);
  // }

  async function fetchCustomersList() {
    setLoading(true);
    const url = `https://hiring-api.simbuka.workers.dev/?page=${page}&size=${pageSize}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const data = await response.json();
      setCustomersList(data);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  }
  // console.log(loading);

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
    totalCustomersCount,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
