import React from "react";
import GameCard from "./GameCard";

function Platform({ currentPlatformGames, currentPlatform }) {
  return (
    <div>
      <h2 class="pageHeader">{currentPlatform}</h2>
      <div class="fullGameList">
        <h3 class="gamesHeader">All Games</h3>
        <div class="cards">
          {currentPlatformGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Platform;
