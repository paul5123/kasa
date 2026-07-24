import { useState } from "react";
import arrowLeft from "../../assets/arrow-left.png";
import arrowRight from "../../assets/arrow-right.png";
import "./Slideshow.scss";

function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextPicture() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function previousPicture() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="slideshow">
      <img
        className="slideshow__image"
        src={pictures[currentIndex]}
        alt={`Vue du logement ${currentIndex + 1}`}
      />

      {pictures.length > 1 && (
        <>
          <p className="slideshow__counter">
            {currentIndex + 1}/{pictures.length}
          </p>

          <button
            className="slideshow__previous-button"
            onClick={previousPicture}
          >
            <img src={arrowLeft} alt="Image précédente" />
          </button>

          <button className="slideshow__next-button" onClick={nextPicture}>
            <img src={arrowRight} alt="Image suivante" />
          </button>
        </>
      )}
    </div>
  );
}

export default Slideshow;
