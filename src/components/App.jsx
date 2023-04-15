import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';
import { Button } from './Button/Button';


export class App extends Component {
  state = {
    inputValue: '',
    photos: [],
    imagesDisplayed: 12
  };

  handleSearch = (inputValue) => {
    this.setState({ inputValue : `${inputValue}` })
  };
componentDidUpdate(_, prevState){
  if (this.state.inputValue !== prevState.inputValue){
    this.smallFunction()
}}
smallFunction = () => {
  this.setState({ imagesDisplayed: 12 });
  getPhotos(this.state.inputValue, this.state.imagesDisplayed)
  .then((response) => response.json())
  .then((data) => {
    this.setState({photos:data.hits})
    return data;
  })
  .catch((error) => {
    console.log(error);
  })
}
handleLoadMore = () => {
  this.setState(prevState => ({ imagesDisplayed: prevState.imagesDisplayed + 12 })); // Increment the number of images displayed by 12
  getPhotos(this.state.inputValue, this.state.imagesDisplayed)
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
        <ImageGallery  image={this.state.photos} />
        <Button onClick={this.handleLoadMore} state={this.state.imagesDisplayed}/>
      </div>
    );
  }
}