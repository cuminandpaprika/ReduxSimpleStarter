import React, { Component} from 'react';
import { connect } from 'react-redux'
import { selectBook} from '../actions/index'
import { bindActionCreators} from 'redux'

// Makes a connnetion to redux

class BookList extends Component {
    renderList() {
        return this.props.books.map( (book) => {
            return (
                    <li
                        key={book.title}
                        onClick = {() => this.props.selectBook(book)}
                        className = "list-group-item">
                        {book.title}
                    </li>
            );
        });
    }

    render() {
        return (
            <ul className = "list-group col-sm-4">
            {this.renderList()}
            </ul>
        )
    }
}

// This is the glue that makes the container class which allows access
// Of stuff
// Gets called whenever state changes.
// Only booklist cares about list of books. Nothing else does
function mapStateToProps(state) {
    // Whatever's here will show up as props inside of BookList
    return {
        books: state.books
    };
}

// DIspatch function takes result of all the actions, passes it to all the reducers
// Anything returned will be mapped to a prop on the booklist container
// Whenever selectbook is called, result is passed to reducers
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
