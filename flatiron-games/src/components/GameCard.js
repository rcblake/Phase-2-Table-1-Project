import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function GameCard({ game, handleModalClick }) {
  const [starAmount, setStarAmount] = useState(game.rating);

  function handleRatingClick(nextValue) {
    setStarAmount(nextValue);
fetch('http://localhost:3000/games', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    game: game.name,
    rating: starAmount,
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error sending rating.');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error sending rating:', error);
  });

  }
  


  return (
    <div className="card">
      <h4 className="gameName">{game.name}</h4>
      <StarRatingComponent
        name={game.name}
        value={starAmount}
        onStarClick={handleRatingClick}
      />
      {game.released && <p>Released: {game.released.slice(0, 4)}</p>}
      <img
        src={
          game.background_image ||
          'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'
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
