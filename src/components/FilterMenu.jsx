import MultiSelect from "components/MultiSelect";
import artistsList from "data/artistsList";
import stylesList from "data/stylesList";
import RadioInput from "components/RadioInput";
import SideOver from "components/SideOver";
import YearsInput from "components/YearsInput";
import { useEffect } from "react";
import { getArtworks } from "service/api";

const FilterMenu = ({
  queryParams,
  pagination,
  setList,
  setPagination,
  setQueryParams,
  isOpenSideOver,
  setIsLoading,
  handleSubmitFilter,
  setIsOpenSideOver,
}) => {
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

  const handleSubmitSort = (query) => {
    setQueryParams((prevState) => ({
      ...prevState,
      ...{ sort: { ...prevState.sort, ...query } },
    }));
  };
  return (
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
  );
};

export default FilterMenu;
