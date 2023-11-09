import Select from "react-tailwindcss-select";

const MultiSelect = ({ onChange, arr, field, selectedItems }) => {
  const options = arr.map((item) => ({
    value: item.id,
    label: item.title,
  }));

  const handleChange = (value) => {
    onChange({ [field]: value || [] });
  };

  return (
    <Select
      isMultiple={true}
      isSearchable={true}
      value={selectedItems}
      onChange={handleChange}
      options={options}
      multiple
    />
  );
};

export default MultiSelect;
