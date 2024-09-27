import React from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = ({ direction = "right", images = [] }) => {
  return (
    <div className={`carousel ${direction}`}>
      <div className="carousel-inner">
        {images.concat(images).map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`carousel-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  direction: PropTypes.oneOf(["right", "left"]),
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
