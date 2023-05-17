import React, {useState} from "react";
import gameKey from "../APIKey";

function GameCard({ game, handleDetailClick, handleRating}) {
const [userRating, setUserRating] = useState(false)

function handleRatingClick() {
  fetch(`https://api.rawg.io/api/ratings?key=${gameKey}`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userRating),
  })
  .then(r => r.json())
  .then(userRating => setUserRating(userRating))
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
      <form>
        <div>
          <button newRating={userRating} onClick={handleRatingClick(userRating)}>1</button>
          <button newRating={userRating} onClick={handleRatingClick(userRating)}>2</button>
          <button newRating={userRating} onClick={handleRatingClick(userRating)}>3</button>
          <button newRating={userRating} onClick={handleRatingClick(userRating)}>4</button>
          <button newRating={userRating} onClick={handleRatingClick(userRating)}>5</button>
        </div>
      </form>
      <button onClick={() => handleDetailClick(game)} class="detailButton">
        Details
      </button>
    </div>
  );
}

export default GameCard;
