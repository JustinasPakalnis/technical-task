import { useState, useEffect, useContext } from "react";
import style from "./List.module.css";
import ButtonSmall from "../buttons/ButtonSmall.jsx";
import { GlobalContext } from "../../context/GlobalContext.jsx";

const PaginationComponent = () => {
  const { pageSize, setPageSize, page, setPage, totalCustomersCount } =
    useContext(GlobalContext);
  const [selectedPage, setSelectedPage] = useState(page);
  const [lastPage, setLastPage] = useState(totalCustomersCount / pageSize);

  useEffect(() => {
    setSelectedPage(page);
  }, [page]);
  useEffect(() => {
    setLastPage(totalCustomersCount / pageSize);
  }, [totalCustomersCount, pageSize]);

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

  return (
    <div className={style.paginationContainer}>
      <ButtonSmall onClick={handlePreviousPage} text="Previous" />

      <button
        onClick={() => handleAdvancedPageClick(page)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === page}
      >
        {page + 1}
      </button>
      <button
        onClick={() => handleAdvancedPageClick(page + 1)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === page + 1}
      >
        {page + 2}
      </button>
      <button
        onClick={() => handleAdvancedPageClick(page + 2)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === page + 2}
      >
        {page + 3}
      </button>
      <button
        onClick={() => handleAdvancedPageClick(page + 3)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === page + 3}
      >
        {page + 4}
      </button>

      <button
        onClick={() => handleAdvancedPageClick(page + 4)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === page + 4}
      >
        {page + 5}
      </button>

      <span>...</span>
      <button
        onClick={() => handleAdvancedPageClick(lastPage - 1)}
        className={style.paginationButton}
        data-selectedpage={selectedPage === lastPage - 1}
      >
        {lastPage}
      </button>
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
