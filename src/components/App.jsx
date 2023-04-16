
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from '../fetch/getPhotos';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import css from './Modal/Modal.module.css'

export class App extends Component {
  state = {
    inputValue: '',
    photos: [],
    imagesDisplayed: 12,
    isModalShown: false,
    modalPhotoURL: ''
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
handleLoadMore = (evt) => {
  evt.preventDefault();
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
imageModal = (item) => {
this.setState({isModalShown:true, modalPhotoURL: item});
}
closeModal = () => {
  this.setState({ isModalShown: false });
};
componentDidMount() {
  document.addEventListener("keydown", this.handleKeyDown);
}

componentWillUnmount() {
  document.removeEventListener("keydown", this.handleKeyDown);
}

handleKeyDown = (evt) => {
  if (evt.key === "Escape") {
    this.setState({ isModalShown: false });
  }
};
  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery  image={this.state.photos} imageModal={this.imageModal}/>
        {this.state.photos.length > 0 ? <Button handleLoadMore={this.handleLoadMore} state={this.state.imagesDisplayed}/>: <></>}
        {this.state.isModalShown === true ? <Modal modalPhotoURL={this.state.modalPhotoURL} onClose={this.closeModal}/> : null}
      </div>
    );
  }
}