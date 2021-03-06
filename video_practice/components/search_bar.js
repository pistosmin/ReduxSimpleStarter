import React, { Component } from "react";
// const Component = React.Component;

// const SearchBar = () => {
//     return <input />;
    
// };
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }


    render() {
        return (
          <div className="search-bar">
            <input
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)}
            />
          </div>
        );
      }
    
      onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
      }
    }
// new SearchBar;

export default SearchBar;