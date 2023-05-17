import React from "react";
import GameCard from "./GameCard";

function Home({ games, handleDetailClick }) {
  return (
    <div>
      <h2 class="pageHeader">Home</h2>
      <div class="highestRatedList">
        <h3 class="gamesHeader">Highest Rated</h3>
      </div>
      <div class="fullGameList">
        <h3 class="gamesHeader">All Games</h3>
        <div class="cards">
          {games.map((game) => (
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
export default Home;
