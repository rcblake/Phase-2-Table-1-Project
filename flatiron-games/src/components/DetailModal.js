import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";

function DetailModal({ modalGame, handleModalClose }) {
  const [detailImage, setDetailImage] = useState(modalGame.background_image);
  const [ratingDB, setRatingDB] = useState([]);
  const [myRating, setMyRating] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/games`)
      .then((res) => res.json())
      .then((ratings) => {
        console.log(ratings);
        setRatingDB(ratings);
      });
  }, []);

  useEffect(() => {
    const existingGame = ratingDB.find((game) => game.id === modalGame.id);
    setMyRating(existingGame ? `${existingGame.rating}` : 0);
  }, []);

  const onRatingChange = (rate) => {
    const rateNum = Number(rate);
    setMyRating(rateNum);

    if (ratingDB.find((game) => game.id === modalGame.id)) {
      fetch(`http://localhost:3000/games/${modalGame.id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ rating: myRating }),
      })
        .then((res) => res.json())
        .then(console.log);
    } else {
      fetch(`http://localhost:3000/games/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id: modalGame.id, rating: myRating }),
      })
        .then((res) => res.json())
        .then(console.log);
    }
  };

  const handleDetailImg = (e) => {
    setDetailImage(e.target.src);
  };

  return (
    <div className="modal">
      <div className="modalHeader">
        <h2>{modalGame.name}</h2>
        <button onClick={handleModalClose}>close</button>
      </div>
      <div className="modalBody">
        <img
          className="modalMainImage"
          src={detailImage}
          alt={modalGame.name}
        />
        <div className="modalRight">
          <div className="modalText">
            <strong>Genre: </strong>
            {modalGame.genres.map((genre) => (
              <strong key={genre.id}>{genre.name}</strong>
            ))}
            <strong>Released: {modalGame.released.slice(0, 4)}</strong>
            <strong>
              Rating: {modalGame.rating} / {modalGame.rating_top}
            </strong>
            <strong>ESRB: {modalGame.esrb_rating.name}</strong>
          </div>
          <div>
            <Rating onClick={onRatingChange} value={myRating} />
          </div>
          <div>
            {modalGame.short_screenshots.map((screenshot) => (
              <img
                key={screenshot.id}
                className="modalScreenShots"
                src={screenshot.image}
                alt="gameplay screenshot"
                onClick={handleDetailImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailModal;
