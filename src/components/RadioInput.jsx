const RadioInput = ({ onChange, field, selectedItems }) => {
  const handleOptionChange = (e) => {
    e.target.value === selectedItems
      ? onChange({ [field]: "" })
      : onChange({ [field]: e.target.value });
  };

  return (
    <div className="inline-flex items-center ml-4">
      <div className="mr-2">
        <label htmlFor="asc" className="ml-2 text-gray-700">
          ▲
        </label>
        <input
          type="checkbox"
          id="asc"
          name="radio"
          value="asc"
          checked={selectedItems === "asc"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
      </div>
      <div>
        <label htmlFor="desc" className="ml-2 text-gray-700">
          ▼
        </label>
        <input
          type="checkbox"
          id="desc"
          name="radio"
          value="desc"
          checked={selectedItems === "desc"}
          onChange={handleOptionChange}
          className="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
        />
      </div>
    </div>
  );
};

export default RadioInput;
