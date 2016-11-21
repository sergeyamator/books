import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(mapStateToProps)
export default class booksByGenre extends Component {
  render() {
    return (
      <div>{this.props.books.map(book => <div key={Date.now() + book.id}>{book.genre}</div>)}</div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state[1] || []
  }
}