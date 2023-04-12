// import {ImageGallery} from './ImageGallery';
import {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
import { getPhotos } from 'fetch/getPhotos';


export class App extends Component  {
  state = {
    inputValue: ''
  }
  handleSearch = inputValue => {
    // componentDidUpdate(prevProps, prevState){
    //   if (prevProps.searchText !== this.props.searchText){
    //     getPhotos(this.props.searchText)
    //     .then((response)=>response.json())
    //     .then((photo)=>console.log(photo))
    //   }
    }
  };
  render(){return(
  <div>
    <Searchbar onSubmit={this.handleSearch} />
    <ImageGallery />
  </div>
  )}
