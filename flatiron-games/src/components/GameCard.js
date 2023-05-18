import React, {useState} from "react";

function GameCard({ game, handleDetailClick, handleRating}) {
const [userRating, setUserRating] = useState(false)


function handleRatingClick() {
  const gameRating = {id: game.id, rating: userRating}
  fetch("http://localhost:3000", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(gameRating),
  })
  .then(r => r.json())
  .then(userRating)
}
function handleSubmit(event) {
  event.preventDefault();
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
      <p>My Rating is {userRating}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <button value="1" newRating={userRating} onClick={handleRatingClick(userRating)}>1</button>
          <button value="2" newRating={userRating} onClick={handleRatingClick(userRating)}>2</button>
          <button value="3" newRating={userRating} onClick={handleRatingClick(userRating)}>3</button>
          <button value="4" newRating={userRating} onClick={handleRatingClick(userRating)}>4</button>
          <button value="5" newRating={userRating} onClick={handleRatingClick(userRating)}>5</button>
        </div>
      </form>
      <button onClick={() => handleDetailClick(game)} class="detailButton">
        Details
      </button>
    </div>
  );
}

export default GameCard;
