import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// create youtube api key
// https://console.developers.google.com
// npm install --save youtube-api-search

const API_KEY = 'AIzaSyBe5nWRGvmSRnRkW0xNOFcD-Mk_W3SjimY';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
