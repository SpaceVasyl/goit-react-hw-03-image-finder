import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';


export class App extends Component {
  state = {
    inputValue: '',
    photos: []
  };

  handleSearch = (inputValue) => {
    this.setState({ inputValue : `${inputValue}` })
  };
componentDidUpdate(_, prevState){
  if (this.state.inputValue !== prevState.inputValue){
    this.smallFunction()
}}
smallFunction = () => {
  getPhotos(this.state.inputValue)
  .then((response) => response.json())
  .then((data) => {
    this.setState({photos:data.hits})
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery  image={this.state.photos}/>
      </div>
    );
  }
}