import React, { useState } from "react";

function GameCard({ game, handleModalClick }) {
  return (
    <div className="card">
      <h4 className="gameName">{game.name}</h4>

      {game.released && <p>Released: {game.released.slice(0, 4)}</p>}
      <img
        src={
          game.background_image ||
          "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
        }
        alt={game.name}
      />
      {game.parent_platforms.slice(0, 4).map((platform) => (
        <p key={platform.platform.id}>{platform.platform.name}</p>
      ))}

      <button className="detailButton" onClick={() => handleModalClick(game)}>
        Details
      </button>
    </div>
  );
}

export default GameCard;
