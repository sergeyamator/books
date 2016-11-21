import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import reducer from './redusers/';

import App from './components/App';
import AuthorList from './components/AuthorList';
import Author from './components/author/';
import Books from './components/BookList';
import Book from './components/book';
import BooksByGenre from './components/BooksByGenre';

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={AuthorList}/>
        <Route path="author/:id" component={Author}/>
        <Route path="books" component={Books}/>
        <Route path="book/:id" component={Book}/>
        <Route path="genre" components={BooksByGenre}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);