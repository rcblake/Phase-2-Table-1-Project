import React, { useState } from "react";
import GameCard from "./GameCard";
import Sort from "./Sort";

function Home({ games, handleDetailClick }) {
  const [sortOption, setSortOption] = useState(""); // State variable to track the sort option

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  
  const sortedGames = sortGames(games, sortOption);

  return (
    <div>
      <h2 className="pageHeader">Home</h2>
      <div className="highestRatedList">
        {/* <h3 className="gamesHeader">Highest Rated</h3> */}
      </div>
      <div className="fullGameList">
        {/* <h3 className="gamesHeader">All Games</h3> */}
        <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
        <div className="cards">
          {sortedGames.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              handleDetailClick={handleDetailClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


function sortGames(games, sortOption) {
  let sortedGames = [...games];
  if (sortOption === "title") {
    sortedGames.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "rating") {
    sortedGames.sort((a, b) => b.rating - a.rating);
  }
  return sortedGames;
}

export default Home;
