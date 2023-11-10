"use client";

import { useEffect, useState } from "react";
import { getArtworks } from "service/api";
import Cards from "components/Cards";
import SearchForm from "components/SearchForm";
import MultiSelect from "components/MultiSelect";
import artistsList from "data/artistsList";
import stylesList from "data/stylesList";
import RadioInput from "components/RadioInput";
import Pagination from "components/Pagination";
import SideOver from "components/SideOver";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Loader from "components/Loader";
import YearsInput from "components/YearsInput";

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
  const [pagination, setPagination] = useState(initialPagination);
  const [queryParams, setQueryParams] = useState(initialState);
  const [isOpenSideOver, setIsOpenSideOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleOpenSideOver = () => setIsOpenSideOver(!isOpenSideOver);

  useEffect(() => {
    const req = async () => {
      const resp = await getArtworks(queryParams, pagination);
      setList(resp.data);
      setPagination({
        page: 1,
        total_pages:
          resp.pagination.total_pages <= 50 ? resp.pagination.total_pages : 50,
      });
      setIsLoading(false);
    };

    setIsLoading(true);
    req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryParams]);

  useEffect(() => {
    const req = async () => {
      const resp = await getArtworks(queryParams, pagination);
      setList(resp.data);
      setIsLoading(false);
    };
    setIsLoading(true);
    req();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const handleSubmitSearch = async (query) => {
    setQueryParams((prevState) => ({ ...prevState, ...query }));
  };

  const handleSubmitFilter = async (query) => {
    console.log("query:", query);
    setQueryParams((prevState) => ({
      ...prevState,
      ...{ filter: { ...prevState.filter, ...query } },
    }));
  };

  const handleSubmitSort = async (query) => {
    setQueryParams((prevState) => ({
      ...prevState,
      ...{ sort: { ...prevState.sort, ...query } },
    }));
  };

  const handleChangePage = async (page) => {
    setPagination((prevState) => ({ ...prevState, ...page }));
    window.scrollTo(0, 0);
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
      <SideOver isOpen={isOpenSideOver} close={() => setIsOpenSideOver(false)}>
        <p className="block text-gray-700 text-sm font-bold mt-4">
          Select Artists
        </p>
        <MultiSelect
          onChange={handleSubmitFilter}
          arr={artistsList}
          selectedItems={queryParams.filter.artist_id}
          field={"artist_id"}
        />
        <p className="block text-gray-700 text-sm font-bold mt-4">
          Select Styles
        </p>
        <MultiSelect
          onChange={handleSubmitFilter}
          arr={stylesList}
          field={"style_id"}
          selectedItems={queryParams.filter.style_id}
        />
        <p className="block text-gray-700 text-sm font-bold mt-4">
          Select the years of the beginning of creation
        </p>
        <YearsInput
          onChange={handleSubmitFilter}
          field={"date_start"}
          selectedItems={queryParams.filter.date_start}
        />
        <p className="block text-gray-700 text-sm font-bold mt-4">
          Select the years of the end of the creation
        </p>
        <YearsInput
          onChange={handleSubmitFilter}
          field={"date_end"}
          selectedItems={queryParams.filter.date_end}
        />
        <div>
          <p className="inline-block text-gray-700 text-sm font-bold mt-4">
            sort by date start
          </p>
          <RadioInput
            onChange={handleSubmitSort}
            field={"date_start"}
            selectedItems={queryParams.sort.date_start}
          />
        </div>
        <div>
          <p className="inline-block text-gray-700 text-sm font-bold mt-4">
            sort by date end
          </p>
          <RadioInput
            onChange={handleSubmitSort}
            field={"date_end"}
            selectedItems={queryParams.sort.date_end}
          />
        </div>
        <div>
          <p className="inline-block text-gray-700 text-sm font-bold mt-4">
            sort by artist
          </p>
          <RadioInput
            onChange={handleSubmitSort}
            field={"artist_title"}
            selectedItems={queryParams.sort.artist_title}
          />
        </div>
        <div>
          <p className="inline-block text-gray-700 text-sm font-bold mt-4">
            sort by style
          </p>
          <RadioInput
            onChange={handleSubmitSort}
            field={"style_title"}
            selectedItems={queryParams.sort.style_title}
          />
        </div>
      </SideOver>
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
