import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const initialContext = {
  darkMode: false,
  customersList: [],
  selectedCustomerInformation: null,
  isLogInAuthorized: false,
  loginError: false,
  username: "",
  password: "",
  loginCredentials: {
    username: "Admin",
    password: "Admin",
  },
  page: 0,
  pageSize: 10,
  totalCustomersCount: 500, //Hard coded
  fetchApiData: () => {},
  handleMoreInformation: () => {},
  handleMoreInformationClose: () => {},
  getCustomersCount: () => {},
  handleLogin: () => {},
  handleLogOut: () => {},
};
export const GlobalContext = createContext(initialContext);

export function ContextWrapper(props) {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(initialContext.darkMode);
  const [page, setPage] = useState(initialContext.page);
  const [loginError, setLoginError] = useState(initialContext.loginError);
  const [isLogInAuthorized, setIsLogInAuthorized] = useState(
    initialContext.isLogInAuthorized
  );
  const [username, setUsername] = useState(initialContext.username);
  const [password, setPassword] = useState(initialContext.password);
  const [loginCredentials, setLoginCredentials] = useState(
    initialContext.loginCredentials
  );
  const [totalCustomersCount, setTotalCustomersCount] = useState(
    initialContext.totalCustomersCount
  );
  const [pageSize, setPageSize] = useState(initialContext.pageSize);
  const [customersList, setCustomersList] = useState(
    initialContext.customersList
  );
  const [selectedCustomerInformation, setSelectedCustomerInformation] =
    useState(initialContext.selectedCustomerInformation);

  const loginTokenLocalSession = JSON.parse(
    sessionStorage.getItem("isLogInAuthorized")
  );
  console.log(loginTokenLocalSession);

  const customerApiDataLocalStorage = JSON.parse(
    localStorage.getItem("customerApiDataLocalStorage")
  );

  useEffect(() => {
    fetchCustomersList();
  }, [page, pageSize]);

  useEffect(() => {
    if (customerApiDataLocalStorage) {
      setCustomersList(customerApiDataLocalStorage);
    } else {
      fetchCustomersList();
      localStorage.setItem(
        "customerApiDataLocalStorage",
        JSON.stringify(customersList)
      );
    }
    if (loginTokenLocalSession) {
      setIsLogInAuthorized(true);
      navigate("/main");
    } else {
      navigate("/");
    }
  }, []);

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
    const url = `https://hiring-api.simbuka.workers.dev/?page=${page}&size=${pageSize}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      setCustomersList(data);
      localStorage.setItem("customerApiDataLocalStorage", JSON.stringify(data));
    } catch (error) {
      console.error(error.message);
    }
  }
  console.log(selectedCustomerInformation);

  function handleMoreInformation(customer) {
    setSelectedCustomerInformation(customer);
  }
  function handleMoreInformationClose() {
    setSelectedCustomerInformation(null);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (
      loginCredentials.username === username &&
      loginCredentials.password === password
    ) {
      setIsLogInAuthorized(true);
      navigate("/main");
      sessionStorage.setItem("isLogInAuthorized", JSON.stringify(true));
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  }
  function handleLogOut() {
    setIsLogInAuthorized(false);
    sessionStorage.setItem("isLogInAuthorized", JSON.stringify(false));
    navigate("/");
    setDarkMode(false);
  }

  const value = {
    darkMode,
    setDarkMode,
    customersList,
    handleMoreInformation,
    handleMoreInformationClose,
    selectedCustomerInformation,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalCustomersCount,
    setUsername,
    setPassword,
    username,
    password,
    handleLogin,
    handleLogOut,
    isLogInAuthorized,
    loginError,
  };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
