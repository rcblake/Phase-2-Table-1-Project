import { useState } from "react";

function DetailModal({ modalGame, handleModalClose }) {
  const [detailImage, setDetailImage] = useState(modalGame.background_image);

  const handleDetailImg = (e) => {
    setDetailImage(e.target.src);
  };

  return (
    <div class="modal">
      <div className="modalHeader">
        <h2>{modalGame.name}</h2>
      </div>
      <div className="modalBody">
        <img class="modalMainImage" src={detailImage} alt={modalGame.name} />
        <div class="modalText">
          <h4>Genres 2 Max</h4>
          <h4>Release Year</h4>
          <h4>
            {modalGame.rating} / {modalGame.rating_top}
            &#11088
          </h4>
          <h4>ESRB</h4>
          <div>My Rating</div>
        </div>
      </div>

      <div>
        {modalGame.short_screenshots.map((screenshot) => (
          <img
            className="modalScreenShots"
            src={screenshot.image}
            alt="gameplay screenshot"
            onClick={handleDetailImg}
          />
        ))}
      </div>
      <button onClick={handleModalClose}>close</button>
    </div>
  );
}
export default DetailModal;
