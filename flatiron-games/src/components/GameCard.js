import React, {useState} from "react";

function GameCard({ game, handleDetailClick, handleRatingClick}) {
const [userRating, setUserRating] = useState(false)

function handleRatingClick() {
  setUserRating((userRating) => !userRating)
}
  return (
    <div class="card">
      <h1>{game.name}</h1>
      <p>Released: {game.released.slice(0, 4)}</p>
      <img src={game.background_image} alt={game.name} />
      {game.parent_platforms.map((platform) => (
        <p>{platform.platform.name}</p>
      ))}
      <p>{game.rating}/{game.rating_top}</p>
      <button onClick={handleRatingClick}>Add Rating</button>
      <form>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </div>
      </form>
      <button onClick={() => handleDetailClick(game)} class="detailButton">
        Details
      </button>
    </div>
  );
}

export default GameCard;
