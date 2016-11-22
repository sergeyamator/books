import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import './styles.less';

@connect(mapStateToProps)
export default class Author extends Component {
  render() {
    const authors = this.props.authors;
    const books = this.props.books || [];
    let author = this.props.author || [];

    if(Array.isArray(author) && authors.length) {
      author = authors[this.props.routeParams.id - 1];
    }

    const filteredBookByAuthor = books.filter(book => {
      return book.authorId === author.id;
    });

    const filteredBookByAuthorForRender = filteredBookByAuthor.map(book => {
      return (
        <Link
          to={`/book/${book.id}`}
          key={book.id}
          className="author__book"
        >
          {book.bookName}
        </Link>
      )
    });

    return (
      <div className="author">
        <Link className="author__name" to={`/author/${author.id}`}>
          {author.author}
        </Link>

        <div className="author__biography">{author.biography}</div>
        <div className="author__books-list">
          {
            filteredBookByAuthorForRender
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authors: state[0] || [],
    books: state[1] || []
  }
}