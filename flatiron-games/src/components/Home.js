import React from "react";
import GameCard from "./GameCard";

function Home({ games, handleModalClick }) {
  return (
    <div>
      <h2 className="pageHeader">Home</h2>
      <div className="highestRatedList"></div>
      <div className="fullGameList">
        <h3 className="gamesHeader">All Games</h3>
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
}
export default Home;
