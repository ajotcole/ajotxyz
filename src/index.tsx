import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomeView } from './components/pages/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './components/pages/ViewSinglePost/ViewSinglePost';
import { Naviagtion } from './components/controls/navigation/navigation';
import { Footer } from './components/controls/footer/footer';

ReactDOM.render(
  <React.StrictMode>
    <Naviagtion />
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
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root'),
);
