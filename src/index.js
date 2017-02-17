import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// create youtube api key
// https://console.developers.google.com
// npm install --save youtube-api-search


// downward data follow

//const API_KEY = 'AIzaSyBe5nWRGvmSRnRkW0xNOFcD-Mk_W3SjimY'; // marchock - you need to enable
const API_KEY = 'AIzaSyBQjNRYkQTJJKNiNoD5vN_SvHB6IHMEeTA'; // bynd


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: []
    };

    YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
