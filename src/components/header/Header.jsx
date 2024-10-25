import { useContext } from "react";
import style from "./Header.module.css";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
const Header = () => {
  const { darkMode, setDarkMode } = useContext(GlobalContext);
  console.log(darkMode);

  return (
    <header className={style.header} data-darkMode={darkMode}>
      <h1>Justinas Pakalnis</h1>
      <h1>Technical Interview Assignment</h1>
      <h1>Simbuka</h1>
      <div className={style.displayMode}>
        <button
          className={style.cleanButton}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
      </div>
    </header>
  );
};

export default Header;
