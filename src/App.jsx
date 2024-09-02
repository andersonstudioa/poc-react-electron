import React, { useState } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import ImageCarousel from './components/ImageCarousel';
import ImageModal from './components/ImageModal';

const images = [
  { src: '/images/img(1).jpg', alt: 'Image 1' },
  { src: '/images/img(2).jpg', alt: 'Image 2' },
  { src: '/images/img(3).jpg', alt: 'Image 3' },
  { src: '/images/img(4).jpg', alt: 'Image 4' },
  { src: '/images/img(5).jpg', alt: 'Image 5' },
  { src: '/images/img(6).jpg', alt: 'Image 6' },
  { src: '/images/img(7).jpg', alt: 'Image 7' },
  { src: '/images/img(8).jpg', alt: 'Image 8' },
  { src: '/images/img(9).jpg', alt: 'Image 9' },
];

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <BackgroundVideo videoSrc="/videos/background.mp4" />
      <ImageCarousel images={images} onThumbnailClick={openModal} />
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage.src}
          imageAlt={selectedImage.alt}
        />
      )}
    </div>
  );
};

export default App;
