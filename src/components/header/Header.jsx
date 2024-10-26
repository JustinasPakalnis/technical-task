import { useContext } from "react";
import style from "./Header.module.css";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ImExit } from "react-icons/im";
const Header = ({ props }) => {
  const { darkMode, setDarkMode, handleLogOut, isLogInAuthorized } =
    useContext(GlobalContext);

  return (
    <header className={style.header} data-darkmode={darkMode}>
      <h1>Justinas Pakalnis</h1>
      <h1>Technical Interview Assignment</h1>
      <div className={style.rightBlock}>
        <h1>Simbuka</h1>
        {isLogInAuthorized && (
          <button onClick={handleLogOut} className={style.cleanButton}>
            <ImExit />
          </button>
        )}
      </div>
      <div className={style.displayMode}>
        {props === "Login" ? null : (
          <button
            className={style.cleanButton}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
