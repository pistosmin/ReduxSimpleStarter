import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';

//openweathermap api key
//5f9e44aeac42b4f56406fc415816b25e


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}