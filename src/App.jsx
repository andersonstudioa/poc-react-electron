// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import ImageCarousel from './components/ImageCarousel';
import ImageModal from './components/ImageModal';

const App = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Carregue o JSON a partir da pasta public
    fetch('/assets.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao carregar o JSON');
        }
        return response.json();
      })
      .then((data) => {
        setImages(data.images);
        setVideos(data.videos);
      })
      .catch((error) => {
        console.error('Erro ao carregar o arquivo JSON:', error);
      });
  }, []);

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
      {videos.length > 0 && <BackgroundVideo videoSrc={videos[0].src} />}
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
