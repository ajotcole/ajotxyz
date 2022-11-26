import { createRoot } from 'react-dom/client';
import './index.scss';
import { HomeView } from './pages/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './pages/ViewSinglePost/ViewSinglePost';
import { Naviagtion } from './components/navigation/navigation';
import { Footer } from './components/footer/footer';
import { initializeIcons, loadTheme } from '@fluentui/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';

export const versionNumber = '1.1.0.1';
export const changedDate = '12.03.2022';

initializeIcons();

loadTheme({
  palette: {
    themePrimary: '#000000',
    themeLighterAlt: '#898989',
    themeLighter: '#737373',
    themeLight: '#595959',
    themeTertiary: '#373737',
    themeSecondary: '#2f2f2f',
    themeDarkAlt: '#252525',
    themeDark: '#151515',
    themeDarker: '#0b0b0b',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
});

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
