import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    const book = this.props.book;

    return (
      <div>
        <div className="">{book.bookName}</div>
        <div>{author}</div>
        <div>{book.genre}</div>
        <div>{book.brief}</div>
      </div>
    );
  }
}