const isSortByNumber = (query) => {
  const arr = ["date_start", "date_end"];
  return arr.includes(query);
};
export default isSortByNumber;
