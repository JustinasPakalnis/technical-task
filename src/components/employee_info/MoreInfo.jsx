import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import style from "./MoreInfo.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";

const MoreInfo = () => {
  const { selectedCustomerInformation, handleMoreInformationClose } =
    useContext(GlobalContext);
  console.log(selectedCustomerInformation);

  return (
    <>
      {selectedCustomerInformation && (
        <div className={style.moreInfoContainer}>
          <div>
            <h2 className={style.moreInfoTitle}>Customer Information</h2>
            <p className={style.moreInfoDetail}>
              <strong>First Name: </strong>
              {selectedCustomerInformation.firstName}
            </p>
            <p className={style.moreInfoDetail}>
              <strong>Last Name: </strong>
              {selectedCustomerInformation.lastName}
            </p>
            <p className={style.moreInfoDetail}>
              <strong>Customer ID: </strong>
              {selectedCustomerInformation.customerIdentificationCode}
            </p>
            <p className={style.moreInfoDetail}>
              <strong>Gender: </strong>
              {selectedCustomerInformation.gender}
            </p>
            <p className={style.moreInfoDetail}>
              <strong>Birth Date: </strong>
              {selectedCustomerInformation.birthDate}
            </p>
          </div>
          <div>
            <ButtonSmall onClick={handleMoreInformationClose} text="Close" />
          </div>
        </div>
      )}
    </>
  );
};

export default MoreInfo;
