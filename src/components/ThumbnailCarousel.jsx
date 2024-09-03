/* eslint-disable react/prop-types */
// src/components/ThumbnailCarousel.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ThumbnailCarousel = ({ images, onThumbnailClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="w-[90%] max-w-screen-lg mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => onThumbnailClick(image)}>
            {/* <img src={image.src} alt={image.alt} className="cursor-pointer" /> */}
            <p className='text-center'>{image.alt}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-next" onClick={onClick}>
      ➡
    </div>
  );
}

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="slick-arrow slick-prev" onClick={onClick}>
      ⬅
    </div>
  );
}

export default ThumbnailCarousel;
