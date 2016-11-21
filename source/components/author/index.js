import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Author extends Component {
  render() {
    const {author, books} = this.props;
    const filteredBookByAuthor = books.filter(book => {
      return book.authorId === author.id;
    });

    return (
      <div className="author">
        <div className="author__name">{author.name}</div>
        <div className="author_biography">{author.biography}</div>
        <ul className="author__books-list">
          {
            filteredBookByAuthor.map(book => {
              return (
                <Link >
                  <li key={book.id}>{book.bookName}</li>
                </Link>
              )
            })
          }
        </ul>
      </div>
    );
  }
}