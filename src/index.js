import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './components/App';
import HomePage from './components/HomePage';
import ArticlesPage from './components/ArticlesPage';
import SingleArticlePage from './components/SingleArticlePage';
import CreateArticlePage from './components/CreateArticlePage';
import LoginPage from './components/LoginPage';

render((
  <Router history={browserHistory}>
    <Route path="/" name="Home" component={App}>
      <IndexRoute name="Home" component={HomePage}/>
      <Route path="/auth" name="Login" component={LoginPage}/>
      <Route path="/articles" name="Articles" component={ArticlesPage}/>
      <Route path="/articles/new" name="Create Article" component={CreateArticlePage}/>
      <Route path="/articles/:userName/:id" name="Single Article" component={SingleArticlePage}/>
    </Route>
  </Router>
),document.getElementById('root'),);
