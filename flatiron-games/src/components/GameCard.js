import React from "react";

function GameCard({ game, handleDetailClick }) {
  if (!game) {
    return null; // Render nothing if the game is null or undefined
  }

  return (
    <div className="card">
      <h1>{game.name}</h1>
      {game.released && <p>Released: {game.released.slice(0, 4)}</p>}
      <img src={game.background_image} alt={game.name} />
      {game.parent_platforms.map((platform) => (
        <p key={platform.platform.id}>{platform.platform.name}</p>
      ))}
      <button onClick={() => handleDetailClick(game)} className="detailButton">
        Details
      </button>
    </div>
  );
}

export default GameCard;