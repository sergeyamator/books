import React, { Component } from 'react';
import { connect } from 'react-redux';

import httpGet from '../httpGet';

@connect()
export default class App extends Component {
  constructor() {
    super();
    httpGet('build/data.json')
      .then(data => {
          this.props.dispatch({
            type: 'DATA_RECEIVED',
            data: JSON.parse(data)
          });
        }
      )
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}