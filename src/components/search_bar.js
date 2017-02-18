import React, { Component } from 'react';

// * CLASS COMPONENT
class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: 'reactjs' };
  }

  // this render function updates every time a state is changed
  render() {
    return (
      <div className="search-bar form-group">
        <input
          className="form-control"
          value={this.state.term}
          onChange={ event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
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
