// src/components/ImageCarousel.jsx
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const ImageCarousel = ({ images, onThumbnailClick }) => {
  useEffect(() => {
    const swiperInstance = document.querySelector('.swiper').swiper;
    swiperInstance.params.navigation.prevEl = '.custom-swiper-button-prev';
    swiperInstance.params.navigation.nextEl = '.custom-swiper-button-next';
    swiperInstance.navigation.init();
    swiperInstance.navigation.update();
  }, []);

  return (
    <div className="relative w-11/12 max-w-5xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer"
              onClick={() => onThumbnailClick(image)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="custom-swiper-button-prev absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-gray-800 active:bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center cursor-pointer">
        &#10094;
      </div>
      <div className="custom-swiper-button-next absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 w-14 h-14 bg-gray-800 active:bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center justify-center cursor-pointer">
        &#10095;
      </div>
    </div>
  );
};

export default ImageCarousel;
