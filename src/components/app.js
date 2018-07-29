import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'

//

export default class App extends Component {
  render() {
    return (
      <div className = "jumbotron">
          <div className = "container">
          <h1>Hello, world!</h1>
          <SearchBar />
          React simple starter
          </div>
      </div>

    );
  }
}
