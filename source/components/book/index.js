import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './book.less';

@connect(mapStateToProps)
export default class Book extends Component {
  render() {
    let book = this.props.book || {};
    let author = {};

    const books = this.props.books;
    const authors = this.props.authors;

    if(!Object.keys(book).length && books) {
      book = books[this.props.routeParams.id - 1];
      author = authors[book.authorId - 1];
    }

    return (
      <div className="book">
        <div className="book__name">
          <span className="book__label">Name</span>
          {book.bookName}
        </div>
        <div className="book__author">
          <Link to={`/author/${author.id}`}>
          <span className="book__label">Author</span>
          {author.author}
          </Link>
        </div>
        <div className="book__genre">
          <Link to={`/genre/${book.genre}`}>
          <span className="book__label">Genre</span>
          {book.genre}
          </Link>
        </div>
        <div className="book__brief">
          <span className="book__label">Brief</span>
          {book.brief}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state[1],
    authors: state[0]
  }
}