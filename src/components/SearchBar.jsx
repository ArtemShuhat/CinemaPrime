import React, { useRef, useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";

const SearchBar = ({ setter, fetchPopularMovies }) => {
  let input = useRef("");
  const [noResults, setNoResults] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=984db5e8e7bd513ab4c76c37a6e2cb79&query=${value}`);
      const results = response.data.results;
      if (results.length === 0) {
        setNoResults(true);
      } else {
        setNoResults(false);
        setter(results);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleClear = () => {
    input.current.value = "";
    setNoResults(false);
  };

  return (
    <form>
      <input type="text" placeholder="Search for movies..." ref={input} className="SearchPanel" />
      <HiSearch className="hisearch" />
      <button onClick={handleClick}>Search Movie</button>
      <button onClick={handleClear}>Clear</button>
      {noResults && <p className="noResultsText">Ничего не найдено</p>}
    </form>
  );
};

export default SearchBar;

