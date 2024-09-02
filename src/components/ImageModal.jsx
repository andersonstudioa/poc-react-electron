// src/components/ImageModal.jsx
import React from 'react';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-auto max-w-4xl h-4/5">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full pt-1 pb-2 px-3 hover:bg-gray-600 active:bg-gray-700"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
