import React from "react";
import GameCard from "./GameCard";

const SearchResults = ({ games }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <div className="fullGameList">
        <div className="cards">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
