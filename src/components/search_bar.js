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
        // this.state.term = event.target.value; //BAD 이렇게 코딩하지 말것
        // return <input onChange={event => console.log(event.target.value)}/>
        return (
            <div className="search-bar">
              <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)}
              />
            </div>
        );
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    //     // console.log(event);
    // }
    onInputChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }

};
// new SearchBar;

export default SearchBar;