import Select from "react-select";

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
      value={selectedItems}
      onChange={handleChange}
      options={options}
      isMulti
      placeholder="Search and select"
    />
  );
};

export default MultiSelect;
