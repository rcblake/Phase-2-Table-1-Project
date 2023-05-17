import React from "react";

function GameCard({ game, handleDetailClick }) {
  return (
    <div class="card">
      <h1>{game.name}</h1>
      <p>Released: {game.released.slice(0, 4)}</p>
      <img src={game.background_image} alt={game.name} />
      {game.parent_platforms.map((platform) => (
        <p>{platform.platform.name}</p>
      ))}
      <button onClick={() => handleDetailClick(game)} class="detailButton">
        Details
      </button>
    </div>
  );
}

export default GameCard;
