import React from "react";

function GameCard({ game }) {
  return (
    <div class="card">
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <img src={game.background_image} alt={game.name} />
      {game.platform}
    </div>
  );
}

export default GameCard;
