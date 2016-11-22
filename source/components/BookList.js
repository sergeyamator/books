import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(mapStateToProps)
export default class BooksList extends Component {
  render() {
    const bookList = this.props.books || [];

    return (
      <div>
        { bookList.map(book => <div key={book.id}>{book.bookName}</div>) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state[1]
  }
}