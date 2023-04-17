import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css'
import PropTypes from "prop-types";

export const ImageGallery = ({image , imageModal}) =>  {
    return ( 
      <><ul className={css.ImageGallery}>
        {image.map((item, index) => <ImageGalleryItem item={item} key={item.id + index} imageModal={imageModal} />)}  
      </ul>
      </>
    );
}

ImageGallery.propTypes = {
  image: PropTypes.array.isRequired,
  imageModal: PropTypes.func.isRequired,
};