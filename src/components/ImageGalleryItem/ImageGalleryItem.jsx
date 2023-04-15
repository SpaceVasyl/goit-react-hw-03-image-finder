import React from 'react';

const ImageGalleryItem = ({item, imageModal}) => {
  const handleImageClick = (e) => {
    imageModal(e.target.alt);
  };

  return (
    <li className="galleryItem" id={item.id} onClick={handleImageClick}>
      <img src={item.webformatURL} alt={item.largeImageURL }/>
    </li>
  );
};

export default ImageGalleryItem;