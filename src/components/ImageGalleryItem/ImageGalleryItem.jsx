import React from 'react';

const ImageGalleryItem = ({ item}) => {
    
    return (
      <li className="galleryItem" id={item.id}>
        <img src={item.webformatURL} alt='images'/>
      </li>
    );
  };

export default ImageGalleryItem;