import React, { useState } from "react";
import gameKey from "../APIKey";
import GameCard from "./GameCard";

const SearchBar = ({ setGames }) => { // Update the prop name to setGames
  const [searchTerm, setSearchTerm] = useState("");
  const [game, setGame] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.rawg.io/api/games?key=${gameKey}&search=${searchTerm}`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        setGames(data.results); // Update the state using setGames function
      } else {
        setGames([]); // If no results found, set games state to an empty array
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
    if (game) {
      return <GameCard game={game} />;
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
