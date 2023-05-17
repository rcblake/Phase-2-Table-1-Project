import { useState } from "react";

function DetailPage({ game }) {
  const [detailImage, setDetailImage] = useState(game.background_image);

  const handleDetailImg = (e) => {
    setDetailImage(e.target.src);
  };

  return (
    <div>
      <div class="detailTitle">
        <h2>{game.name}</h2>
      </div>
      <div>
        <h4>Genres 2 Max</h4>
        <h4>Release Year</h4>
        <h4>
          {game.rating} / {game.rating_top}
          &#11088
        </h4>
        <h4>ESRB</h4>
      </div>
      <button>Add to Favorites</button>
      <img src={detailImage} alt={game.name} />
      <div>My Rating</div>

      <div>
        <img
          src={game.background_image}
          alt="gameplay screenshot"
          onClick={handleDetailImg}
        />
        {game.short_screenshots.map((screenshot) => (
          <img
            src={screenshot.image}
            alt="gameplay screenshot"
            onClick={handleDetailImg}
          />
        ))}
      </div>
    </div>
  );
}
export default DetailPage;
