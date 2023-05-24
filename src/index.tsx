import { createRoot } from 'react-dom/client';
import './index.scss';
import { HomeView } from './views/HomeView/HomeView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewSinglePost } from './views/ViewSinglePost/ViewSinglePost';
import { Footer } from './components/footer/footer';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import React from 'react';
import { Navbar } from './components/navbar/navbar';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './views/home/home';

// TODO make below dynamic
export const versionNumber = '1.1.0.1';
export const changedDate = '12.03.2022';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <div
        style={{
          display: 'block',
          height: '50.5px',
        }}
      />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles/:id" component={ViewSinglePost} />
        </Switch>
      </Router>
      <Footer />
    </ChakraProvider>
  </React.StrictMode>,
);
