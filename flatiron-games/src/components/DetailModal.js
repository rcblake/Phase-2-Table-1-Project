import { useState } from "react";

function DetailModal({ modalGame, handleModalClose }) {
  const [detailImage, setDetailImage] = useState(modalGame.background_image);

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
              Rating:
              {modalGame.rating} / {modalGame.rating_top}
            </strong>
            <strong>ESRB: {modalGame.esrb_rating.name}</strong>
          </div>
          <div>My Rating</div>
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
