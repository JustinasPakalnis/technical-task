import { useContext } from "react";
import style from "./Buttons.module.css";
import { GlobalContext } from "../../context/GlobalContext.jsx";
const ButtonSmall = ({ onClick, text }) => {
  const { darkMode } = useContext(GlobalContext);
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className={style.buttonSmall}
        data-darkmode={darkMode}
      >
        {text}
      </button>
    </>
  );
};

export default ButtonSmall;
