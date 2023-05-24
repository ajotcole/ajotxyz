import { createRoot } from 'react-dom/client';
import './index.scss';
import { HomeView } from './pages/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './pages/ViewSinglePost/ViewSinglePost';
import { Naviagtion } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';

// TODO make below dynamic
export const versionNumber = '1.1.0.1';
export const changedDate = '12.03.2022';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <div style={{ backgroundColor: '#fff' }}>
      <Naviagtion />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/articles/:id" component={ViewSinglePost} />
        </Switch>
      </Router>
      <Footer />
    </div>
  </React.StrictMode>,
);
