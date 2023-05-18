import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ handleSearch, games }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search_results");
    handleSearch(searchTerm);
  };

  return (
    <div class="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          class="searchInput"
          type="text"
          placeholder="Search games"
          value={searchTerm}
          onChange={handleChange}
        />
        <button class="searchButton" type="submit">
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
