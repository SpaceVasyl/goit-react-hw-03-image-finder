import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
// import css from './Gallery.module.css';

export const ImageGallery = () => {
    
  return (
    <ul className='gallery'>
<ImageGalleryItem/>
      {/* {images.map(image => (
        <li key={image.id}>
          <img src={image.url} alt={image.alt} />
        </li>
      ))} */}
    </ul>
  );
};

// export default ImageGallery;