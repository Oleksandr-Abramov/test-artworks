import { useState } from "react";

function SearchForm({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ searchQuery });
  };

  return (
    <form className="w-full max-w-md " onSubmit={handleSubmit}>
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          type="text"
          className="text-lg appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 px-3 leading-tight focus:outline-none"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-600 text-lg text-white py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
