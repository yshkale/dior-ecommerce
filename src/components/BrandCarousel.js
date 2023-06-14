import { useState } from "react";
import Forbes from "../img/brands_carousel_forbes.webp";
import Farfetch from "../img/brands_carousel_farfetch.webp";
import GQ from "../img/brands_carousel_GQ.webp";
import "../css/carousel.css";

const BrandCarousel = function () {
  const [activeDot, setActiveDot] = useState(2);

  const handleCarousel = function (dotIndex) {
    setActiveDot(dotIndex);
  };

  const carouselContent = function () {
    if (activeDot === 1) {
      return (
        <>
          <p className="main-carousel-content">
            Le Petit Violette redefined women elegancy. Its high quality leather
            and convenient interior make it perfect for an everyday usage!
          </p>

          <img
            className="brand-carousel-logo"
            src={Farfetch}
            alt="farfetch logo"
          />
        </>
      );
    } else if (activeDot === 2) {
      return (
        <>
          <p className="main-carousel-content">
            Le Nouveau Cartable is perfectly sized, even holds my water bottle.
            And the leather just looks super rich and luxurious. Most awesome
            product I've tested!
          </p>

          <img
            className="brand-carousel-logo "
            src={Forbes}
            alt="forbes logo"
          />
        </>
      );
    } else if (activeDot === 3) {
      return (
        <>
          <p className="main-carousel-content">
            The GQ choice: "black or green, with its leather both flexible and
            rigid, small Binder protects your equipment in dedicated
            compartments"
          </p>

          <img className="brand-carousel-logo" src={GQ} alt="GQ logo" />
        </>
      );
    }
  };

  return (
    <>
      <section className="section-carousel">
        <div className="carousel-info">
          <p className="carousel-heading">Materials</p>
          <p className="carousel-details">
            We only work with the best leather, chosen in collaboration with our
            factory. Made in Italy.
          </p>
          <a className="learn-more-btn" href="#info">
            Learn more
          </a>
        </div>
      </section>

      <section>
        <div className="main-carousel" id="info">
          {carouselContent()}

          <div className="dots">
            <button
              className={`dot ${activeDot === 1 ? "dot-fill" : ""}`}
              onClick={() => handleCarousel(1)}
            >
              &nbsp;
            </button>
            <button
              className={`dot ${activeDot === 2 ? "dot-fill" : ""}`}
              onClick={() => handleCarousel(2)}
            >
              &nbsp;
            </button>
            <button
              className={`dot ${activeDot === 3 ? "dot-fill" : ""}`}
              onClick={() => handleCarousel(3)}
            >
              &nbsp;
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCarousel;
