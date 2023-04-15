import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery = ({image , imageModal}) =>  {
    return (
      <><ul className='gallery'>
        {image.map(item => {return (<ImageGalleryItem item={item} key={item.id} imageModal={imageModal}/>)})}  
      </ul>
      
      </>
    );
}