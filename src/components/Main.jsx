import { useEffect, useState } from "react";
import { getArtworks } from "service/api";
import Cards from "components/Cards";
import SearchForm from "components/SearchForm";
import Pagination from "components/Pagination";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Loader from "components/Loader";
import FilterMenu from "components/FilterMenu";

const initialState = {
  searchQuery: "",
  filter: {
    artist_id: [],
    style_id: [],
    date_start: [],
    date_end: [],
  },
  sort: { artist_title: "", style_title: "", date_start: "", date_end: "" },
};
const initialPagination = { page: 0, total_pages: 0 };

const Main = () => {
  const [list, setList] = useState([]);
  const [queryParams, setQueryParams] = useState(initialState);
  const [pagination, setPagination] = useState(initialPagination);
  const [prevPage, setPrevPage] = useState(0);
  const [isOpenSideOver, setIsOpenSideOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleOpenSideOver = () => setIsOpenSideOver(!isOpenSideOver);

  useEffect(() => {
    const req = async () => {
      setIsLoading(true);

      const resp = await getArtworks(queryParams, pagination);
      setList(resp.data);
      setIsLoading(false);
      window.scrollTo(0, 0);
    };
    if (!pagination.page) {
      return;
    }
    if (!prevPage) {
      return;
    }
    req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const handleSubmitSearch = (query) => {
    setQueryParams((prevState) => ({ ...prevState, ...query }));
  };

  const handleChangePage = (page) => {
    setPrevPage(pagination.page);
    setPagination((prevState) => ({ ...prevState, ...page }));
  };

  const handleSubmitFilter = (query) => {
    setQueryParams((prevState) => ({
      ...prevState,
      ...{ filter: { ...prevState.filter, ...query } },
    }));
  };
  return (
    <>
      <div className="flex items-center justify-center m-auto mb-5 w-full max-w-md px-5 py-2 bg-[#ffffff4a] shadow-md">
        <SearchForm onSubmit={handleSubmitSearch} />
        <button onClick={handleToggleOpenSideOver}>
          <AdjustmentsHorizontalIcon
            className="h-10 w-10 ml-5"
            aria-hidden="true"
          />
        </button>
      </div>
      <FilterMenu
        queryParams={queryParams}
        pagination={pagination}
        setList={setList}
        setPagination={setPagination}
        setQueryParams={setQueryParams}
        isOpenSideOver={isOpenSideOver}
        setIsLoading={setIsLoading}
        handleSubmitFilter={handleSubmitFilter}
        setIsOpenSideOver={setIsOpenSideOver}
      />
      <Cards
        list={list}
        showLoader={() => setIsLoading(true)}
        hideLoader={() => setIsLoading(false)}
        onFilter={handleSubmitFilter}
      />
      <Pagination
        onChangePage={handleChangePage}
        totalPages={pagination.total_pages}
        currentPage={pagination.page}
      />
      <Loader isActive={isLoading} />
    </>
  );
};

export default Main;
