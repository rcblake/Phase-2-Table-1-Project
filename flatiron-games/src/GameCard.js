import React from "react";

function getPlatforms(platforms) {
  return platforms.map((platform) => (
    <p key={platform.platform.id}>{platform.platform.name}</p>
  ));
}

function GameCard({ game }) {
  console.log(game.name);

  return (
    <div className="card">
      <h2>
        {getPlatforms}
      </h2>
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      {getPlatforms(game.platforms)}
    </div>
  );
}

export default GameCard;

