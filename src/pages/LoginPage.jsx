import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import style from "./MoreInfo.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
const LoginPage = () => {
  const { moreInformationSelectedEmployee } = useContext(GlobalContext);

  return <>login</>;
};

export default LoginPage;
