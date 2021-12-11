import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomeView } from './pages/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './pages/ViewSinglePost/ViewSinglePost';
import { Naviagtion } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { initializeIcons } from '@fluentui/react';

export const versionNumber = '1.0.0.6';
export const changedDate = '19.11.2021';

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Naviagtion />
    <Router>
      <Switch>
        <Route path="/articles/:id">
          <ViewSinglePost />
        </Route>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
