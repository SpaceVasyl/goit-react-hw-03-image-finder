import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'

export const ImageGallery = ({image , imageModal}) =>  {
    return (
      <><ul className={css.ImageGallery}>
        {image.map(item => {return (<ImageGalleryItem item={item} key={item.id} imageModal={imageModal}/>)})}  
      </ul>
      
      </>
    );
}