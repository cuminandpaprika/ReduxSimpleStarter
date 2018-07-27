import React from 'react';
import ReactDOM from 'react-dom';

// Create new component that outputs HTML
const App = () => {
  return <div>Hi!</div>;
}

// Take this components generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
