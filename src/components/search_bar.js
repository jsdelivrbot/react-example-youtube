import React, { Component } from 'react';


// * CLASS COMPONENT
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // this render function updates every time a state is changed
  render() {
    return (
      <div>
        <input onChange={ event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

/* How to name events

  handler: on
  element: Input
  name of event: Change
*/
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

// * FUNCTIONAL COMPONENT - dumb component returns plain jsx
// const SearchBar = () => {
//   return <input />
// }

export default SearchBar;
