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
    setSearchTerm("");
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Search games"
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="searchButton" type="submit">
          🔍
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
