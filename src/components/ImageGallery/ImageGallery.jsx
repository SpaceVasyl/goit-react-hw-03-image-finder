import { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { getPhotos } from '../../fetch/getPhotos';

export class ImageGallery extends Component {
  state = {
    photos: [],
  };

  handleSearch = (inputValue) => {
    getPhotos(inputValue)
  };

  render() {
    const { photos } = this.state;

    return (
      <ul className='gallery'>
        {photos.map((photo) => (
          <ImageGalleryItem key={photo.id} photo={photo} />
        ))}
      </ul>
    );
  }
}