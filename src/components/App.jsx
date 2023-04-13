import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';

export class App extends Component {
  state = {
    inputValue: '',
    photos: [],
  };

  handleSearch = (inputValue) => {
    getPhotos(inputValue);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery photos={this.state.photos} />
      </div>
    );
  }
}