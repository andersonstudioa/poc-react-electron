/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BackgroundVideo from './components/BackgroundVideo';
import ImageCarousel from './components/ImageCarousel';
import ImageModal from './components/ImageModal';

const JSON_PATH = import.meta.env.VITE_APP_JSON_DATA;

const App = () => {
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  //TODO
  /*
    Etapa 1:
    - Verificar se os valores estão armazenados no LocalStorage
    - Se não estiverem, exibir modal da etapa 2 sem a necessidade de clique

    Etapa2:
    1- Criar div transparente no canto inferior esquerdo de 200px x 200px
    2- Ao clicar no neste div e manter pressionado, abrir um modal
    3- Exibir no modal os seguintes elementos:
        a) <h1>Update application</h1>
        b) <label>Load new config file</label>
        c) <input type="file">
        d) <button>Update</button>
        e) Chamar window.electron.ipcRenderer.invoke('read-json-file', [arquivo])
    4- Validar formato do json com base em um arquivo do tipo template.json
    5- Validar se os arquivos descrito no json existem
    6- Setar valores useState
    7- Setar valores no localStorage
  */

  useEffect(() => {
    // Carregue o JSON a partir do IPC
    window.electron = require('electron'); // Acesso ao módulo electron
    window.electron.ipcRenderer.invoke('read-json-file', JSON_PATH)
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
