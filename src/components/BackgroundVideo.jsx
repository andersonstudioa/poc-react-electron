// src/components/BackgroundVideo.jsx
import React from 'react';

const BackgroundVideo = ({ videoSrc }) => {
  return (
    <video
      className="fixed inset-0 w-full h-full object-cover -z-10 grayscale"
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
    >
      Seu navegador não suporta a tag de vídeo.
    </video>
  );
};

export default BackgroundVideo;
