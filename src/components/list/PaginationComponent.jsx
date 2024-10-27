import { useState, useEffect, useContext } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { MdLastPage, MdFirstPage } from "react-icons/md";
const PaginationComponent = () => {
  const {
    pageSize,
    setPageSize,
    page,
    setPage,
    totalCustomersCount,
    darkMode,
  } = useContext(GlobalContext);
  const lastPage = Math.ceil(totalCustomersCount / pageSize);

  const pageNumbers = [];
  for (let i = 0; i < lastPage; i++) {
    pageNumbers.push(i);
  }

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < lastPage - 1) {
      setPage(page + 1);
    }
  };

  const handleAdvancedPageClick = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < lastPage) {
      setPage(pageNumber);
    }
  };

  const offset = 2;
  return (
    <div className={style.paginationContainer}>
      <ButtonSmall onClick={handlePreviousPage} text="Previous" />
      {page !== 0 ? (
        <button
          disabled={page === 0}
          className={style.paginationButton}
          onClick={() => setPage(0)}
        >
          <MdFirstPage />
        </button>
      ) : null}
      <div className={style.advancedPagination}>
        {pageNumbers.map((pageNummber) =>
          pageNummber >= page - offset &&
          pageNummber <= page + offset &&
          pageNummber >= 0 &&
          pageNummber < lastPage ? (
            <button
              onClick={() => handleAdvancedPageClick(pageNummber)}
              key={pageNummber}
              className={style.paginationButton}
              data-selectedpage={page === pageNummber}
            >
              {pageNummber + 1}
            </button>
          ) : null
        )}
      </div>

      {page !== lastPage - 1 ? (
        <button
          disabled={page === lastPage - 1}
          className={style.paginationButton}
          onClick={() => setPage(lastPage - 1)}
        >
          <MdLastPage />
        </button>
      ) : null}

      <ButtonSmall onClick={handleNextPage} text="Next" />

      <select
        className={style.pageSize}
        data-darkmode={darkMode}
        value={pageSize}
        onChange={(e) => setPageSize(Number(e.target.value))}
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
