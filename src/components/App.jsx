import {Component} from 'react';
import Searchbar from './Searchbar/Searchbar';
export class App extends Component  {
  state = {
    inputValue: ''
  }
  handleSearch = inputValue => {
    console.log(`Search value: ${inputValue}`);
    // do something with the search value
  };
  render(){return (
  <div>
    <Searchbar onSubmit={this.handleSearch}/>
  </div>
  )}}
