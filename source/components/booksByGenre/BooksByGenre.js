import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import './styles.less';

@connect(mapStateToProps)
export default class booksByGenre extends Component {
  render() {
    const genreName = this.props.routeParams.name;
    const booksToRender = genreName
      ? this.props.books.filter(book => book.genre === genreName)
      : this.props.books;

    return (
      <div className="books">
        <div className="books__title">Books by genre</div>
        {
        booksToRender.map(book => {
        return (
          <div className="books__item" key={Date.now() + book.id}>
            <div>
              <Link to={`/book/${book.id}`}>{book.bookName}</Link>
              </div>
          </div>
        )
      })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state[1] || []
  }
}