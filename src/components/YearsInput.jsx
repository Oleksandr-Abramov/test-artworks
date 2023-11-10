import React from "react";

import CreatableSelect from "react-select/creatable";

const YearsInput = ({ onChange, field, selectedItems }) => {
  const handleChange = (value) => {
    onChange({ [field]: value || [] });
  };

  return (
    <CreatableSelect
      value={selectedItems}
      onChange={handleChange}
      isMulti
      placeholder="Enter years here"
    />
  );
};
export default YearsInput;
