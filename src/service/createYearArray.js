const createYearArray = () => {
  const currentYear = new Date().getFullYear();
  const years = [];

  for (let year = -5000; year <= currentYear; year++) {
    years.push({ id: year, title: year.toString() });
  }

  return years;
};

export default createYearArray;
