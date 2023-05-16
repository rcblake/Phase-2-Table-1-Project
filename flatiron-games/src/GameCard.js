import React from "react";


function getPlatforms(platforms) {
  return platforms.map((platform) => (
    <p key={platform.platform.id}>{platform.platform.name}</p>
  ));
}



function GameCard({ game }) {
  return (
    <div className="card">
      <h1>{game.name}</h1>
      <p>Released: {game.released}</p>
      <img src={game.background_image} alt={game.name} />
      {getPlatforms(game.platforms)}

    </div>
  );
}

export default GameCard;
