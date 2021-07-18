import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomeView } from './components/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ViewSinglePost } from './components/ViewSinglePost/ViewSinglePost';

ReactDOM.render(
  <React.StrictMode>
    <div className="horizontalLine" />
    <Router>
      <Switch>
        <Route path="/single">
          <ViewSinglePost />
        </Route>

        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
