import React, { Component } from 'react';
import { connect } from 'react-redux';

// export default class BookList extends Component {
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> { book.title }</li>
            );
        });
    }


    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // 여기서 만환되는 무엇이든 props가 된다 book-list의
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);

// function mapDispatchToPropsTo(state) {
//     retrun
// }