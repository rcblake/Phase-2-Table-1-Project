import React, { useState } from "react";
import gameKey from "../APIKey";

import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [games, setGames] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${gameKey}&search=${searchTerm}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setGames(data.results);
      } else {
        setGames([]);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const renderGameCard = () => {
    if (games.length > 0) {
      return <SearchResults games={games} />;
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search games"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {renderGameCard()}
    </div>
  );
};

export default SearchBar;

