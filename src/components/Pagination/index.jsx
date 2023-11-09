import ReactPaginate from "react-paginate";
import s from "./Pagination.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Pagination({ onChangePage, totalPages, currentPage }) {
  const handlePageClick = (event) => {
    onChangePage({ page: event.selected + 1 });
  };

  return (
    <>
      <div className={s.container}>
        <ReactPaginate
          forcePage={currentPage - 1 || 0}
          nextLabel={<ChevronRightIcon />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={totalPages}
          previousLabel={<ChevronLeftIcon />}
          pageClassName={s.pageIitem}
          pageLinkClassName={s.pageLink}
          previousClassName=""
          previousLinkClassName={s.prevLink}
          nextClassName=""
          nextLinkClassName={s.nextLink}
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName={s.pagination}
          activeClassName={s.pageActive}
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
}
