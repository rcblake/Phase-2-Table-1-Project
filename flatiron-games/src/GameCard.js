import React from "react";

function getPlatforms(platforms) {
  return platforms.map((platform) => (
    <p key={platform.platform.id}>{platform.platform.name}</p>
  ));
}

function getRatings(ratings) {
  return ratings.map((rating) => (
    <p key={rating.id}>{rating.title}</p>
  ));
}

function GameCard({ game }) {
  console.log(game.ratings);

  return (
    <div className="card">
      <h1>{game.name}</h1>
      <img src={game.background_image} alt={game.name} />
      {getPlatforms(game.platforms)}
      {getRatings(game.ratings)}
    </div>
  );
}

export default GameCard;
