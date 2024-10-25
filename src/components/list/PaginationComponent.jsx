import { useState, useEffect, useContext } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";
import { MdLastPage, MdFirstPage } from "react-icons/md";
const PaginationComponent = () => {
  const { pageSize, setPageSize, page, setPage, totalCustomersCount } =
    useContext(GlobalContext);
  const [selectedPage, setSelectedPage] = useState(page);
  const lastPage = Math.ceil(totalCustomersCount / pageSize);

  useEffect(() => {
    setSelectedPage(page);
  }, [page]);

  const pageNumbers = [];
  for (let i = 0; i < lastPage; i++) {
    pageNumbers.push(i);
  }
  console.log(page + 1);

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
      setSelectedPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < lastPage - 1) {
      setPage(page + 1);
      setSelectedPage(page + 1);
    }
  };

  const handleAdvancedPageClick = (num) => {
    if (page < lastPage - 1) {
      setSelectedPage(num);
      setPage(num);
    }
  };

  const offset = 2;
  return (
    <div className={style.paginationContainer}>
      <ButtonSmall onClick={handlePreviousPage} text="Previous" />
      {page !== 0 ? (
        <button className={style.paginationButton} onClick={() => setPage(0)}>
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
              data-selectedpage={selectedPage === pageNummber}
            >
              {pageNummber + 1}
            </button>
          ) : null
        )}
      </div>

      {page !== lastPage - 1 ? (
        <button
          className={style.paginationButton}
          onClick={() => setPage(lastPage - 1)}
        >
          <MdLastPage />
        </button>
      ) : null}

      <ButtonSmall onClick={handleNextPage} text="Next" />

      <select
        className={style.pageSize}
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
