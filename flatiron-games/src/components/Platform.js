import React from "react";
import GameCard from "./GameCard";

function Platform({ currentPlatformGames, currentPlatform }) {
  return (
    <div>
      <h2 className="pageHeader">{currentPlatform}</h2>
      <div className="fullGameList">
        <h3 className="gamesHeader">All Games</h3>
        <div className="cards">
          {currentPlatformGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Platform;
