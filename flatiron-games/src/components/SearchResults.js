import React from "react";
import GameCard from "./GameCard";

const SearchResults = ({ games, handleModalClick }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <div className="fullGameList">
        <div className="cards">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleModalClick={handleModalClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
