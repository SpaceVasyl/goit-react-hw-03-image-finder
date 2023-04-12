import React from 'react';
// import css from './Gallery.module.css';

const ImageGalleryItem = ({ images }) => {
  return (
    <li class="gallery-item">
  <img src="" alt="" />  
      {/* {images.map(image => (
        <li key={image.id}>
          <img src={image.url} alt={image.alt} />
        </li>
      ))} */}</li>
    
  );
};
export default ImageGalleryItem;