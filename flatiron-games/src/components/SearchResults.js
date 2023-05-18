import React from "react";
import GameCard from "./GameCard";

const SearchResults = ({ games }) => {
  debugger;
  const renderGameCard = () => {
    if (games.length > 0) {
      return (
        <div>
          <h2>Search Results</h2>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      );
    }
    return null;
  };

  return renderGameCard();
};

export default SearchResults;
