import { useState, useEffect, useContext } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
const PaginationComponent = () => {
  const { pageSize, setPageSize, page, setPage } = useContext(GlobalContext);
  const pageCount = page + 1;
  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };
  return (
    <div className={style.paginationContainer}>
      <ButtonSmall onClick={handlePreviousPage} text="Previous" />
      <p>{pageCount}</p>
      <p>{pageCount}</p>
      <p>{pageCount}</p>
      <p>{pageCount}</p>
      <p>{pageCount}</p>
      <ButtonSmall onClick={handleNextPage} text="Next" />

      <select
        className={style.pageSize}
        value={pageSize}
        onChange={(e) => setPageSize(e.target.value)}
        required
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};

export default PaginationComponent;
