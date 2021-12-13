import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HomeView } from './pages/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './pages/ViewSinglePost/ViewSinglePost';
import { Naviagtion } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { initializeIcons } from '@fluentui/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

export const versionNumber = '1.0.1.1';
export const changedDate = '13.12.2021';

initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Naviagtion />
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/articles/:id" component={ViewSinglePost} />
      </Switch>
    </Router>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
