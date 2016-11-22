import React, { Component } from 'react';
import { connect } from 'react-redux';

import Author from './author/';

@connect(mapStateToProps)
export default class AuthorList extends Component {
  render() {
    const authors = this.props.state[0] || [];
    const books = this.props.state[1] || [];

    const authorsListComponent = authors.map(item => {
      return (
          <Author
            key={item.id}
            author={item}
            books={books}
          />
      )
    });

    return (
      <div className="authors">
        { authorsListComponent }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    state
  }
}

