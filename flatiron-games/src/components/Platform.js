import React from "react";
import GameCard from "./GameCard";

function Platform({ platformGames, name }) {
  return (
    <div>
      <h2 class="pageHeader">{name}</h2>
      <div class="fullGameList">
        <h3 class="gamesHeader">All Games</h3>
        <div class="cards">
          {platformGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Platform;
