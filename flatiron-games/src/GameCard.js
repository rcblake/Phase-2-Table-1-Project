import React from "react";

function GameCard({ game }) {
  console.log(game);

  return (
    <div className="card">
      <h1>{game.name}</h1>
      <img src={game.background_image} />
    </div>
  );
}

export default GameCard;
