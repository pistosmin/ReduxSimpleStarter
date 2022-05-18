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
            <div>
                <input 
                    value={this.state.term}
                    onChange={event => this.setState({ term: event.target.value })}
                />
                {/* Value of the input: {this.state.term} */}
            </div>

        )
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    //     // console.log(event);
    // }

};
// new SearchBar;

export default SearchBar;